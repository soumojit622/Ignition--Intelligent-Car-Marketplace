"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  BadgeInfo,
  Bot,
  Calendar,
  Camera,
  Car,
  CarFront,
  CheckCircle,
  FileText,
  Fuel,
  Gauge,
  Info,
  Keyboard,
  Lightbulb,
  ListOrdered,
  Loader2,
  Image as LucideImage,
  Palette,
  PlusCircle,
  ScanSearch,
  Settings,
  Sparkles,
  Star,
  Sun,
  Tag,
  Upload,
  UploadCloud,
  Users,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { addCar, processCarImageWithAI } from "@/actions/cars";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import useFetch from "@/hooks/use-fetch";
import Image from "next/image";

// Predefined options
const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid", "Plug-in Hybrid"];
const transmissions = ["Automatic", "Manual", "Semi-Automatic"];
const bodyTypes = [
  "SUV",
  "Sedan",
  "Hatchback",
  "Convertible",
  "Coupe",
  "Wagon",
  "Pickup",
];
const carStatuses = ["AVAILABLE", "UNAVAILABLE", "SOLD"];

// Define form schema with Zod
const carFormSchema = z.object({
  make: z.string().min(1, "Make is required"),
  model: z.string().min(1, "Model is required"),
  year: z.string().refine((val) => {
    const year = parseInt(val);
    return !isNaN(year) && year >= 1900 && year <= new Date().getFullYear() + 1;
  }, "Valid year required"),
  price: z.string().min(1, "Price is required"),
  mileage: z.string().min(1, "Mileage is required"),
  color: z.string().min(1, "Color is required"),
  fuelType: z.string().min(1, "Fuel type is required"),
  transmission: z.string().min(1, "Transmission is required"),
  bodyType: z.string().min(1, "Body type is required"),
  seats: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),
  status: z.enum(["AVAILABLE", "UNAVAILABLE", "SOLD"]),
  featured: z.boolean().default(false),
  // Images are handled separately
});

export const AddCarForm = () => {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadedAiImage, setUploadedAiImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("ai");
  const [imageError, setImageError] = useState("");

  // Initialize form with react-hook-form and zod
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    resolver: zodResolver(carFormSchema),
    defaultValues: {
      make: "",
      model: "",
      year: "",
      price: "",
      mileage: "",
      color: "",
      fuelType: "",
      transmission: "",
      bodyType: "",
      seats: "",
      description: "",
      status: "AVAILABLE",
      featured: false,
    },
  });

  // Custom hooks for API calls
  const {
    loading: addCarLoading,
    fn: addCarFn,
    data: addCarResult,
  } = useFetch(addCar);

  const {
    loading: processImageLoading,
    fn: processImageFn,
    data: processImageResult,
    error: processImageError,
  } = useFetch(processCarImageWithAI);

  // Handle successful car addition
  useEffect(() => {
    if (addCarResult?.success) {
      toast.success("Car added successfully");
      router.push("/admin/cars");
    }
  }, [addCarResult, router]);

  useEffect(() => {
    if (processImageError) {
      toast.error(processImageError.message || "Failed to upload car");
    }
  }, [processImageError]);

  // Handle successful AI processing
  useEffect(() => {
    if (processImageResult?.success) {
      const carDetails = processImageResult.data;

      // Update form with AI results
      setValue("make", carDetails.make);
      setValue("model", carDetails.model);
      setValue("year", carDetails.year.toString());
      setValue("color", carDetails.color);
      setValue("bodyType", carDetails.bodyType);
      setValue("fuelType", carDetails.fuelType);
      setValue("price", carDetails.price);
      setValue("mileage", carDetails.mileage);
      setValue("transmission", carDetails.transmission);
      setValue("description", carDetails.description);

      // Add the image to the uploaded images
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImages((prev) => [...prev, e.target.result]);
      };
      reader.readAsDataURL(uploadedAiImage);

      toast.success("Successfully extracted car details", {
        description: `Detected ${carDetails.year} ${carDetails.make} ${
          carDetails.model
        } with ${Math.round(carDetails.confidence * 100)}% confidence`,
      });

      // Switch to manual tab for the user to review and fill in missing details
      setActiveTab("manual");
    }
  }, [processImageResult, setValue, uploadedAiImage]);

  // Process image with Gemini AI
  const processWithAI = async () => {
    if (!uploadedAiImage) {
      toast.error("Please upload an image first");
      return;
    }

    await processImageFn(uploadedAiImage);
  };

  // Handle AI image upload with Dropzone
  const onAiDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }

    setUploadedAiImage(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps: getAiRootProps, getInputProps: getAiInputProps } =
    useDropzone({
      onDrop: onAiDrop,
      accept: {
        "image/*": [".jpeg", ".jpg", ".png", ".webp"],
      },
      maxFiles: 1,
      multiple: false,
    });

  // Handle multiple image uploads with Dropzone
  const onMultiImagesDrop = useCallback((acceptedFiles) => {
    const validFiles = acceptedFiles.filter((file) => {
      if (file.size > 5 * 1024 * 1024) {
        toast.error(`${file.name} exceeds 5MB limit and will be skipped`);
        return false;
      }
      return true;
    });

    if (validFiles.length === 0) return;

    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);

        // Process the images
        const newImages = [];
        validFiles.forEach((file) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            newImages.push(e.target.result);

            // When all images are processed
            if (newImages.length === validFiles.length) {
              setUploadedImages((prev) => [...prev, ...newImages]);
              setUploadProgress(0);
              setImageError("");
              toast.success(
                `Successfully uploaded ${validFiles.length} images`
              );
            }
          };
          reader.readAsDataURL(file);
        });
      }
    }, 200);
  }, []);

  const {
    getRootProps: getMultiImageRootProps,
    getInputProps: getMultiImageInputProps,
  } = useDropzone({
    onDrop: onMultiImagesDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    multiple: true,
  });

  // Remove image from upload preview
  const removeImage = (index) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data) => {
    // Check if images are uploaded
    if (uploadedImages.length === 0) {
      setImageError("Please upload at least one image");
      return;
    }

    // Prepare data for server action
    const carData = {
      ...data,
      year: parseInt(data.year),
      price: parseFloat(data.price),
      mileage: parseInt(data.mileage),
      seats: data.seats ? parseInt(data.seats) : null,
    };

    // Call the addCar function with our useFetch hook
    await addCarFn({
      carData,
      images: uploadedImages,
    });
  };

  return (
    <div>
      <Tabs
        defaultValue="ai"
        value={activeTab}
        onValueChange={setActiveTab}
        className="mt-6"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="manual"
            className="flex items-center justify-center gap-2"
          >
            <Keyboard className="h-4 w-4" />
            Manual Entry
          </TabsTrigger>
          <TabsTrigger
            value="ai"
            className="flex items-center justify-center gap-2"
          >
            <Bot className="h-4 w-4" />
            AI Upload
          </TabsTrigger>
        </TabsList>

        <TabsContent value="manual" className="mt-6">
          <Card className="bg-zinc-900 border border-[#1E293B] shadow-md">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Car className="w-5 h-5 text-blue-400" />
                Car Details
              </CardTitle>
              <CardDescription className="text-slate-400">
                Enter the details of the car you want to add.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Text Inputs */}
                  {[
                    { id: "make", placeholder: "e.g. Toyota", icon: BadgeInfo },
                    { id: "model", placeholder: "e.g. Camry", icon: Tag },
                    { id: "year", placeholder: "e.g. 2022", icon: Calendar },
                    {
                      id: "price",
                      placeholder: "e.g. 25000",
                      icon: ListOrdered,
                    },
                    { id: "mileage", placeholder: "e.g. 15000", icon: Gauge },
                    { id: "color", placeholder: "e.g. Blue", icon: Palette },
                    {
                      id: "seats",
                      placeholder: "e.g. 5 (optional)",
                      icon: Users,
                    },
                  ].map(({ id, placeholder, icon: Icon }) => (
                    <div key={id} className="space-y-2">
                      <Label
                        htmlFor={id}
                        className="text-slate-300 capitalize flex items-center gap-1"
                      >
                        <Icon className="w-4 h-4 text-slate-400" />
                        {id}
                      </Label>
                      <Input
                        id={id}
                        {...register(id)}
                        placeholder={placeholder}
                        className={`bg-slate-800 text-white border ${
                          errors[id] ? "border-red-500" : "border-slate-600"
                        } focus:border-blue-500 focus:ring-0`}
                      />
                      {errors[id] && (
                        <p className="text-xs text-red-500">
                          {errors[id]?.message}
                        </p>
                      )}
                    </div>
                  ))}

                  {/* Select Inputs */}
                  {[
                    { id: "fuelType", options: fuelTypes, icon: Fuel },
                    {
                      id: "transmission",
                      options: transmissions,
                      icon: Settings,
                    },
                    { id: "bodyType", options: bodyTypes, icon: Car },
                    { id: "status", options: carStatuses, icon: BadgeInfo },
                  ].map(({ id, options, icon: Icon }) => (
                    <div key={id} className="space-y-2">
                      <Label
                        htmlFor={id}
                        className="text-slate-300 capitalize flex items-center gap-1"
                      >
                        <Icon className="w-4 h-4 text-slate-400" />
                        {id.replace(/([A-Z])/g, " $1")}
                      </Label>
                      <Select
                        onValueChange={(value) => setValue(id, value)}
                        defaultValue={getValues(id)}
                      >
                        <SelectTrigger
                          className={`bg-slate-800 text-white border ${
                            errors[id] ? "border-red-500" : "border-slate-600"
                          } focus:border-blue-500`}
                        >
                          <SelectValue placeholder={`Select ${id}`} />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 text-white border-slate-700">
                          {options.map((opt) => (
                            <SelectItem
                              key={opt}
                              value={opt}
                              className="hover:bg-blue-600"
                            >
                              {opt.charAt(0).toUpperCase() + opt.slice(1)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors[id] && (
                        <p className="text-xs text-red-500">
                          {errors[id]?.message}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label
                    htmlFor="description"
                    className="text-slate-300 flex items-center gap-1"
                  >
                    <FileText className="w-4 h-4 text-slate-400" />
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    {...register("description")}
                    placeholder="Enter detailed description of the car..."
                    className={`min-h-32 bg-slate-800 text-white border ${
                      errors.description ? "border-red-500" : "border-slate-600"
                    } focus:border-blue-500 focus:ring-0`}
                  />
                  {errors.description && (
                    <p className="text-xs text-red-500">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                {/* Featured Checkbox */}
                <div className="flex items-start space-x-3 border border-slate-700 rounded-md p-4">
                  <Checkbox
                    id="featured"
                    checked={watch("featured")}
                    onCheckedChange={(checked) => setValue("featured", checked)}
                  />
                  <div className="space-y-1 leading-none">
                    <Label
                      htmlFor="featured"
                      className="text-white flex items-center gap-1"
                    >
                      <Star className="w-4 h-4 text-yellow-400" />
                      Feature this car
                    </Label>
                    <p className="text-sm text-slate-400">
                      Featured cars appear on the homepage
                    </p>
                  </div>
                </div>

                {/* Image Upload */}
                <div>
                  <Label
                    htmlFor="images"
                    className={`text-slate-300 flex items-center gap-1 ${
                      imageError ? "text-red-500" : ""
                    }`}
                  >
                    <LucideImage className="w-4 h-4 text-slate-400" />
                    Images{" "}
                    {imageError && <span className="text-red-500">*</span>}
                  </Label>
                  <div
                    {...getMultiImageRootProps()}
                    className={`mt-2 border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition bg-slate-800 hover:bg-slate-700 ${
                      imageError ? "border-red-500" : "border-slate-600"
                    }`}
                  >
                    <input {...getMultiImageInputProps()} />
                    <div className="flex flex-col items-center justify-center">
                      <UploadCloud className="h-12 w-12 text-blue-400 mb-3" />
                      <span className="text-sm text-slate-300">
                        Drag & drop or click to upload multiple images
                      </span>
                      <span className="text-xs text-slate-400 mt-1">
                        (JPG, PNG, WebP, max 5MB each)
                      </span>
                    </div>
                  </div>
                  {imageError && (
                    <p className="text-xs text-red-500 mt-1">{imageError}</p>
                  )}
                  {uploadProgress > 0 && (
                    <div className="w-full bg-slate-700 rounded-full h-2.5 mt-2">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                  )}
                </div>

                {/* Image Preview */}
                {uploadedImages.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-white mb-2">
                      Uploaded Images ({uploadedImages.length})
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {uploadedImages.map((image, index) => (
                        <div key={index} className="relative group">
                          <Image
                            src={image}
                            alt={`Car image ${index + 1}`}
                            height={50}
                            width={50}
                            className="h-28 w-full object-cover rounded-md"
                            priority
                          />
                          <Button
                            type="button"
                            size="icon"
                            variant="destructive"
                            className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => removeImage(index)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full md:w-auto blue-gradient text-white cursor-pointer"
                  disabled={addCarLoading}
                >
                  {addCarLoading ? (
                    <>
                      <Loader2 className=" h-4 w-4 animate-spin" />
                      Adding Car...
                    </>
                  ) : (
                    <>
                      <PlusCircle className=" h-4 w-4" />
                      Add Car
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai" className="mt-6">
          <Card className="bg-zinc-900 border border-zinc-800 text-white">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-400" />
                AI-Powered Car Details Extraction
              </CardTitle>
              <CardDescription className="text-zinc-400">
                Upload an image of a car and let Gemini AI extract its details.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-2 border-dashed border-slate-700 rounded-lg p-6 text-center">
                  {imagePreview ? (
                    <div className="flex flex-col items-center">
                      <img
                        src={imagePreview}
                        alt="Car preview"
                        className="max-h-56 max-w-full object-contain mb-4"
                      />
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="bg-red-600 text-white hover:bg-red-700 transition-colors flex items-center cursor-pointer gap-2 rounded-md px-4 py-2"
                          onClick={() => {
                            setImagePreview(null);
                            setUploadedAiImage(null);
                          }}
                        >
                          <X className="h-4 w-4 mr-1" />
                          Remove
                        </Button>

                        <Button
                          onClick={processWithAI}
                          disabled={processImageLoading}
                          size="sm"
                          className="blue-gradient dark:text-white hover:brightness-90 cursor-pointer"
                        >
                          {processImageLoading ? (
                            <>
                              <Loader2 className=" h-4 w-4 animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              <ScanSearch className="h-4 w-4" />
                              Extract Details
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div
                      {...getAiRootProps()}
                      className={`mt-2 rounded-lg p-6 text-center cursor-pointer transition bg-slate-800 hover:bg-slate-700 ${
                        imageError ? "border-red-500" : "border-slate-600"
                      }`}
                    >
                      <input {...getAiInputProps()} />
                      <div className="flex flex-col items-center justify-center">
                        <UploadCloud className="h-12 w-12 text-blue-400 mb-3" />
                        <span className="text-sm text-slate-400">
                          Drag & drop or click to upload a car image
                        </span>
                        <span className="text-xs text-slate-500 mt-1">
                          (JPG, PNG, WebP, max 5MB)
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {processImageLoading && (
                  <div className="bg-blue-900 text-blue-300 p-4 rounded-md flex items-center border border-blue-700">
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    <div>
                      <p className="font-medium">Analyzing image...</p>
                      <p className="text-sm">
                        Gemini AI is extracting car details
                      </p>
                    </div>
                  </div>
                )}

                <div className="bg-zinc-800 p-4 rounded-md">
                  <h3 className="font-medium text-white mb-2 flex items-center gap-2">
                    <Info className="h-4 w-4 text-blue-400" />
                    How it works
                  </h3>
                  <ol className="space-y-2 text-sm text-zinc-400 list-decimal pl-4">
                    <li>Upload a clear image of the car</li>
                    <li>Click "Extract Details" to analyze with Gemini AI</li>
                    <li>Review the extracted information</li>
                    <li>Fill in any missing details manually</li>
                    <li>Add the car to your inventory</li>
                  </ol>
                </div>

                <div className="bg-yellow-900/30 p-4 rounded-md border border-yellow-700">
                  <h3 className="font-medium text-yellow-300 mb-1 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-yellow-300" />
                    Tips for best results
                  </h3>
                  <ul className="space-y-1 text-sm text-yellow-200">
                    <li>
                      <Sun className="inline-block h-4 w-4 mr-1" />
                      Use clear, well-lit images
                    </li>
                    <li>
                      <CarFront className="inline-block h-4 w-4 mr-1" />
                      Try to capture the entire vehicle
                    </li>
                    <li>
                      <Camera className="inline-block h-4 w-4 mr-1" />
                      For difficult models, use multiple views
                    </li>
                    <li>
                      <CheckCircle className="inline-block h-4 w-4 mr-1" />
                      Always verify AI-extracted information
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
