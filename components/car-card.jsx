"use client";

import { toggleSavedCar } from "@/actions/car-listing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import useFetch from "@/hooks/use-fetch";
import { useAuth } from "@clerk/nextjs";
import { ArrowRight, Car as CarIcon, Heart, Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const CarCard = ({ car }) => {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const [isSaved, setIsSaved] = useState(car.wishlisted);

  // Use the useFetch hook
  const {
    loading: isToggling,
    fn: toggleSavedCarFn,
    data: toggleResult,
    error: toggleError,
  } = useFetch(toggleSavedCar);

  // Handle toggle result with useEffect
  useEffect(() => {
    if (toggleResult?.success && toggleResult.saved !== isSaved) {
      setIsSaved(toggleResult.saved);
      toast.success(toggleResult.message);
    }
  }, [toggleResult, isSaved]);

  // Handle errors with useEffect
  useEffect(() => {
    if (toggleError) {
      toast.error("Failed to update favorites");
    }
  }, [toggleError]);

  // Handle save/unsave car
  const handleToggleSave = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isSignedIn) {
      toast.error("Please sign in to save cars");
      router.push("/sign-in");
      return;
    }

    if (isToggling) return;

    // Call the toggleSavedCar function using our useFetch hook
    await toggleSavedCarFn(car.id);
  };

  return (
    <Card className="overflow-hidden bg-white dark:bg-[#0e172a] hover:shadow-blue-500/20 hover:shadow-md transition group border border-white/5 dark:border-white/10 rounded-2xl">
      <div className="relative h-48">
        {car.images && car.images.length > 0 ? (
          <div className="relative w-full h-full">
            <Image
              src={car.images[0]}
              alt={`${car.make} ${car.model}`}
              fill
              className="object-cover group-hover:scale-105 transition duration-300 rounded-t-2xl"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-slate-800 flex items-center justify-center">
            <CarIcon className="h-12 w-12 text-gray-400 dark:text-gray-500" />
          </div>
        )}

        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 bg-white/90 dark:bg-slate-900/70 rounded-full p-1.5 shadow-md backdrop-blur-md transition ${
            isSaved
              ? "text-red-500 hover:text-red-600"
              : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          }`}
          onClick={handleToggleSave}
          disabled={isToggling}
        >
          {isToggling ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Heart className={isSaved ? "fill-current" : ""} size={20} />
          )}
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="flex flex-col mb-2">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white line-clamp-1">
            {car.make} {car.model}
          </h3>
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
            ${car.price.toLocaleString()}
          </span>
        </div>

        <div className="text-gray-600 dark:text-gray-400 mb-2 flex items-center text-sm">
          <span>{car.year}</span>
          <span className="mx-2">•</span>
          <span>{car.transmission}</span>
          <span className="mx-2">•</span>
          <span>{car.fuelType}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          <Badge
            variant="outline"
            className="bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600"
          >
            {car.bodyType}
          </Badge>
          <Badge
            variant="outline"
            className="bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600"
          >
            {car.mileage.toLocaleString()} miles
          </Badge>
          <Badge
            variant="outline"
            className="bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600"
          >
            {car.color}
          </Badge>
        </div>

        <div className="flex justify-between">
          <Button
            className="flex-1 blue-gradient text-white cursor-pointer hover:brightness-90 flex items-center justify-center gap-2"
            onClick={() => router.push(`/cars/${car.id}`)}
          >
            View Car
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
