"use client";

import { toggleSavedCar } from "@/actions/car-listing";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useFetch from "@/hooks/use-fetch";
import { formatCurrency } from "@/lib/helpers";
import { useAuth } from "@clerk/nextjs";
import { format } from "date-fns";
import {
  Calendar,
  Car,
  CarFront,
  Clock,
  Currency,
  Fuel,
  Gauge,
  Heart,
  LocateFixed,
  Mail,
  MapPin,
  MessageSquare,
  PaintBucket,
  Phone,
  Share2,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import EmiCalculator from "./emi-calculator";
import { Settings, Users, Palette, Info } from "lucide-react";
export function CarDetails({ car, testDriveInfo }) {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(car.wishlisted);

  const {
    loading: savingCar,
    fn: toggleSavedCarFn,
    data: toggleResult,
    error: toggleError,
  } = useFetch(toggleSavedCar);

  // Handle toggle result with useEffect
  useEffect(() => {
    if (toggleResult?.success) {
      setIsWishlisted(toggleResult.saved);
      toast.success(toggleResult.message);
    }
  }, [toggleResult]);

  // Handle errors with useEffect
  useEffect(() => {
    if (toggleError) {
      toast.error("Failed to update favorites");
    }
  }, [toggleError]);

  // Handle save car
  const handleSaveCar = async () => {
    if (!isSignedIn) {
      toast.error("Please sign in to save cars");
      router.push("/sign-in");
      return;
    }

    if (savingCar) return;

    // Use the toggleSavedCarFn from useFetch hook
    await toggleSavedCarFn(car.id);
  };

  // Handle share
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${car.year} ${car.make} ${car.model}`,
          text: `Check out this ${car.year} ${car.make} ${car.model} on Ignition!`,
          url: window.location.href,
        })
        .catch((error) => {
          console.log("Error sharing", error);
          copyToClipboard();
        });
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard");
  };

  // Handle book test drive
  const handleBookTestDrive = () => {
    if (!isSignedIn) {
      toast.error("Please sign in to book a test drive");
      router.push("/sign-in");
      return;
    }
    router.push(`/test-drive/${car.id}`);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Gallery */}
        <div className="w-full lg:w-7/12">
          {/* Main Car Image */}
          <div className="aspect-video rounded-2xl overflow-hidden relative mb-4 shadow-md dark:shadow-none border border-gray-200 dark:border-gray-700">
            {car.images && car.images.length > 0 ? (
              <Image
                src={car.images[currentImageIndex]}
                alt={`${car.year} ${car.make} ${car.model}`}
                fill
                className="object-cover transition-all duration-300 ease-in-out"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <Car className="h-24 w-24 text-gray-400 dark:text-gray-600" />
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {car.images && car.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {car.images.map((image, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer rounded-lg h-20 w-24 flex-shrink-0 overflow-hidden transition-all duration-200 ${
                    index === currentImageIndex
                      ? "ring-2 ring-blue-600"
                      : "opacity-70 hover:opacity-100 border border-gray-300 dark:border-gray-600"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`${car.year} ${car.make} ${car.model} - view ${
                      index + 1
                    }`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Secondary Actions */}
          <div className="flex mt-5 gap-4">
            <Button
              variant="outline"
              className={`flex items-center gap-2 flex-1 rounded-xl transition duration-200 ${
                isWishlisted
                  ? "text-red-500 border-red-300 dark:border-red-600 dark:text-red-400"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              onClick={handleSaveCar}
              disabled={savingCar}
            >
              <Heart
                className={`h-5 w-5 ${isWishlisted ? "fill-red-500" : ""}`}
              />
              {isWishlisted ? "Saved" : "Save"}
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 flex-1 rounded-xl transition duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={handleShare}
            >
              <Share2 className="h-5 w-5" />
              Share
            </Button>
          </div>
        </div>

        {/* Car Details */}
        <div className="w-full lg:w-5/12">
          {/* Body Type Badge */}
          <div className="flex items-center justify-between">
            <Badge className="mb-2 capitalize text-sm text-white">
              {car.bodyType}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-1 text-gray-900 dark:text-white">
            {car.year} {car.make} {car.model}
          </h1>

          {/* Price */}
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {formatCurrency(car.price)}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <Gauge className="text-gray-500 dark:text-gray-400 h-5 w-5" />
              <span>{car.mileage.toLocaleString()} miles</span>
            </div>
            <div className="flex items-center gap-2">
              <Fuel className="text-gray-500 dark:text-gray-400 h-5 w-5" />
              <span>{car.fuelType}</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="text-gray-500 dark:text-gray-400 h-5 w-5" />
              <span>{car.transmission}</span>
            </div>
          </div>

          {/* EMI Calculator */}
          <Dialog>
            <DialogTrigger className="w-full text-start">
              <Card className="pt-5 hover:shadow-md transition dark:bg-gray-900 dark:border-gray-700">
                <CardContent>
                  <div className="flex items-center gap-2 text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    <Currency className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <h3>EMI Calculator</h3>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Estimated Monthly Payment:{" "}
                    <span className="font-bold text-gray-900 dark:text-white">
                      {formatCurrency(car.price / 60)}
                    </span>{" "}
                    for 60 months
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    *Based on $0 down payment and 4.5% interest rate
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="dark:bg-gray-900 dark:text-white">
              <DialogHeader>
                <DialogTitle>Ignition Car Loan Calculator</DialogTitle>
                <EmiCalculator price={car.price} />
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Request More Info */}
          <Card className="my-6 dark:bg-gray-900 dark:border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h3>Have Questions?</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Our representatives are available to answer all your queries
                about this vehicle.
              </p>
              <a href="mailto:help@Ignition.in">
                <Button
                  variant="outline"
                  className="w-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Request Info
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Alert for Sold/Unavailable */}
          {(car.status === "SOLD" || car.status === "UNAVAILABLE") && (
            <Alert
              variant="destructive"
              className="dark:bg-red-900 dark:text-red-200"
            >
              <AlertTitle className="capitalize">
                This car is {car.status.toLowerCase()}
              </AlertTitle>
              <AlertDescription>Please check again later.</AlertDescription>
            </Alert>
          )}

          {/* Book Test Drive */}
          {car.status !== "SOLD" && car.status !== "UNAVAILABLE" && (
            <Button
              className="w-full py-6 text-lg mt-4 rounded-xl blue-gradient cursor-pointer hover:brightness-90 text-white transition"
              onClick={handleBookTestDrive}
              disabled={testDriveInfo.userTestDrive}
            >
              <Calendar className="mr-2 h-5 w-5" />
              {testDriveInfo.userTestDrive
                ? `Booked for ${format(
                    new Date(testDriveInfo.userTestDrive.bookingDate),
                    "EEEE, MMMM d, yyyy"
                  )}`
                : "Book Test Drive"}
            </Button>
          )}
        </div>
      </div>

      {/* Details & Features Section */}
      <div className="mt-12 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md transition-colors">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Description Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <Info className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              Description
            </h3>
            <p className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
              {car.description}
            </p>
          </div>

          {/* Features Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <Settings className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              Features
            </h3>
            <ul className="grid grid-cols-1 gap-3 text-gray-800 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <Settings className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                {car.transmission} Transmission
              </li>
              <li className="flex items-center gap-3">
                <Fuel className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                {car.fuelType} Engine
              </li>
              <li className="flex items-center gap-3">
                <Car className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                {car.bodyType} Body Style
              </li>
              {car.seats && (
                <li className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  {car.seats} Seats
                </li>
              )}
              <li className="flex items-center gap-3">
                <Palette className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                {car.color} Exterior
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="mt-8 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md transition-colors">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Specifications
        </h2>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {/* Make */}
            <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <CarFront className="w-5 h-5" /> Make
              </span>
              <span className="font-medium text-gray-900 dark:text-gray-200">
                {car.make}
              </span>
            </div>

            {/* Model */}
            <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Car className="w-5 h-5" /> Model
              </span>
              <span className="font-medium text-gray-900 dark:text-gray-200">
                {car.model}
              </span>
            </div>

            {/* Year */}
            <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Calendar className="w-5 h-5" /> Year
              </span>
              <span className="font-medium text-gray-900 dark:text-gray-200">
                {car.year}
              </span>
            </div>

            {/* Body Type */}
            <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <CarFront className="w-5 h-5" /> Body Type
              </span>
              <span className="font-medium text-gray-900 dark:text-gray-200">
                {car.bodyType}
              </span>
            </div>

            {/* Fuel Type */}
            <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Fuel className="w-5 h-5" /> Fuel Type
              </span>
              <span className="font-medium text-gray-900 dark:text-gray-200">
                {car.fuelType}
              </span>
            </div>

            {/* Transmission */}
            <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Settings className="w-5 h-5" /> Transmission
              </span>
              <span className="font-medium text-gray-900 dark:text-gray-200">
                {car.transmission}
              </span>
            </div>

            {/* Mileage */}
            <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Gauge className="w-5 h-5" /> Mileage
              </span>
              <span className="font-medium text-gray-900 dark:text-gray-200">
                {car.mileage.toLocaleString()} miles
              </span>
            </div>

            {/* Color */}
            <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <PaintBucket className="w-5 h-5" /> Color
              </span>
              <span className="font-medium text-gray-900 dark:text-gray-200">
                {car.color}
              </span>
            </div>

            {/* Seats (optional) */}
            {car.seats && (
              <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Users className="w-5 h-5" /> Seats
                </span>
                <span className="font-medium text-gray-900 dark:text-gray-200">
                  {car.seats}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dealership Location Section */}
      <div className="mt-8 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md transition-colors">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
          <LocateFixed className="h-6 w-6 text-blue-600" />
          Dealership Location
        </h2>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-colors">
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            {/* Dealership Info */}
            <div className="flex items-start gap-4">
              <div className="flex flex-col gap-3 text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span>
                    {testDriveInfo.dealership?.address || "Not Available"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-green-500" />
                  <span>
                    {testDriveInfo.dealership?.phone || "Not Available"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-purple-500" />
                  <span>
                    {testDriveInfo.dealership?.email || "Not Available"}
                  </span>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="md:w-1/2 lg:w-1/3">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5 text-yellow-500" />
                Working Hours
              </h4>
              <div className="space-y-2">
                {testDriveInfo.dealership?.workingHours
                  ? testDriveInfo.dealership.workingHours
                      .sort((a, b) => {
                        const days = [
                          "MONDAY",
                          "TUESDAY",
                          "WEDNESDAY",
                          "THURSDAY",
                          "FRIDAY",
                          "SATURDAY",
                          "SUNDAY",
                        ];
                        return (
                          days.indexOf(a.dayOfWeek) - days.indexOf(b.dayOfWeek)
                        );
                      })
                      .map((day) => (
                        <div
                          key={day.dayOfWeek}
                          className="flex justify-between text-sm text-gray-700 dark:text-gray-300"
                        >
                          <span>
                            {day.dayOfWeek.charAt(0) +
                              day.dayOfWeek.slice(1).toLowerCase()}
                          </span>
                          <span>
                            {day.isOpen
                              ? `${day.openTime} - ${day.closeTime}`
                              : "Closed"}
                          </span>
                        </div>
                      ))
                  : [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ].map((day, index) => (
                      <div
                        key={day}
                        className="flex justify-between text-sm text-gray-700 dark:text-gray-300"
                      >
                        <span>{day}</span>
                        <span>
                          {index < 5
                            ? "9:00 - 18:00"
                            : index === 5
                            ? "10:00 - 16:00"
                            : "Closed"}
                        </span>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
