"use client";

import { useState, useEffect } from "react";
import { Search, Upload, Camera, SearchIcon, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useDropzone } from "react-dropzone";
import { useRouter } from "next/navigation";
import { processImageSearch } from "@/actions/home";
import useFetch from "@/hooks/use-fetch";

export function HomeSearch() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchImage, setSearchImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isImageSearchActive, setIsImageSearchActive] = useState(false);

  // Use the useFetch hook for image processing
  const {
    loading: isProcessing,
    fn: processImageFn,
    data: processResult,
    error: processError,
  } = useFetch(processImageSearch);

  // Handle process result and errors with useEffect
  useEffect(() => {
    if (processResult?.success) {
      const params = new URLSearchParams();

      // Add extracted params to the search
      if (processResult.data.make) params.set("make", processResult.data.make);
      if (processResult.data.bodyType)
        params.set("bodyType", processResult.data.bodyType);
      if (processResult.data.color)
        params.set("color", processResult.data.color);

      // Redirect to search results
      router.push(`/cars?${params.toString()}`);
    }
  }, [processResult, router]);

  useEffect(() => {
    if (processError) {
      toast.error(
        "Failed to analyze image: " + (processError.message || "Unknown error")
      );
    }
  }, [processError]);

  // Handle image upload with react-dropzone
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size must be less than 5MB");
        return;
      }

      setIsUploading(true);
      setSearchImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setIsUploading(false);
        toast.success("Image uploaded successfully");
      };
      reader.onerror = () => {
        setIsUploading(false);
        toast.error("Failed to read the image");
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        "image/*": [".jpeg", ".jpg", ".png"],
      },
      maxFiles: 1,
    });

  // Handle text search submissions
  const handleTextSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      toast.error("Please enter a search term");
      return;
    }

    router.push(`/cars?search=${encodeURIComponent(searchTerm)}`);
  };

  // Handle image search submissions
  const handleImageSearch = async (e) => {
    e.preventDefault();
    if (!searchImage) {
      toast.error("Please upload an image first");
      return;
    }

    // Use the processImageFn from useFetch hook
    await processImageFn(searchImage);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto">
      {/* Text Search Form */}
      <form onSubmit={handleTextSearch}>
        <div className="relative flex items-center">
          {/* Search Icon inside input */}
          <Search className="absolute left-3 w-5 h-5 text-gray-500 dark:text-gray-300" />

          {/* Text Input */}
          <Input
            type="text"
            placeholder="Enter make, model, or use our AI Image Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-[7rem] py-4 sm:py-5 md:py-6 w-full rounded-full border border-gray-300 dark:border-gray-600 bg-white/95 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-blue-500 backdrop-blur-sm text-sm sm:text-base"
          />

          {/* Camera & Search Button Container */}
          <div className="absolute right-2 flex gap-2 items-center flex-row-reverse sm:flex-row">
            {/* Search Button */}
            <Button
              type="submit"
              className="blue-gradient glow rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium text-white flex items-center gap-2 cursor-pointer hover:brightness-90"
            >
              <SearchIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Search</span>
            </Button>

            {/* Camera Icon */}
            <Camera
              size={30}
              onClick={() => setIsImageSearchActive(!isImageSearchActive)}
              className={`cursor-pointer rounded-xl p-1.5 transition-colors ${
                isImageSearchActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            />
          </div>
        </div>
      </form>

      {/* Image Search Form */}
      {isImageSearchActive && (
        <div className="mt-6">
          <form onSubmit={handleImageSearch} className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-3xl p-6 text-center bg-gray-50 dark:bg-gray-800">
              {imagePreview ? (
                <div className="flex flex-col items-center">
                  <img
                    src={imagePreview}
                    alt="Car preview"
                    className="h-40 object-contain mb-4 rounded-xl border border-gray-200 dark:border-gray-700"
                  />
                  <Button
                    onClick={() => {
                      setSearchImage(null);
                      setImagePreview("");
                      toast.info("Image removed");
                    }}
                    className="bg-red-600 text-white hover:bg-red-700 transition-colors flex items-center cursor-pointer gap-2 rounded-md px-4 py-2"
                  >
                    <XCircle className="w-4 h-4" />
                    Remove Image
                  </Button>
                </div>
              ) : (
                <div {...getRootProps()} className="cursor-pointer">
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center">
                    <Upload className="h-12 w-12 text-blue-500 mb-2" />
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {isDragActive && !isDragReject
                        ? "Leave the file here to upload"
                        : "Drag & drop a car image or click to select"}
                    </p>
                    {isDragReject && (
                      <p className="text-red-500 mb-2">Invalid image type</p>
                    )}
                    <p className="text-gray-400 text-sm dark:text-gray-500">
                      Supports: JPG, PNG (max 5MB)
                    </p>
                  </div>
                </div>
              )}
            </div>

            {imagePreview && (
              <Button
                type="submit"
                className="w-full blue-gradient text-white cursor-pointer rounded-md shadow-md hover:brightness-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isUploading || isProcessing}
              >
                {isUploading
                  ? "Uploading..."
                  : isProcessing
                  ? "Analyzing image..."
                  : "Search with this Image"}
              </Button>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
