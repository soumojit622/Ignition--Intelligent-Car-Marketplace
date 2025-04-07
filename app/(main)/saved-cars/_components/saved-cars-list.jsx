"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CarCard } from "@/components/car-card";
import { Heart } from "lucide-react";

export function SavedCarsList({ initialData }) {
  // No saved cars
  if (!initialData?.data || initialData?.data.length === 0) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center text-center p-8 border rounded-2xl bg-zinc-900 border-zinc-800 shadow-xl transition-colors duration-300">
        <div className="bg-blue-900/30 p-4 rounded-full mb-4 shadow-md">
          <Heart className="h-8 w-8 text-blue-400" />
        </div>
        <h3 className="text-2xl font-semibold text-blue-100 mb-2">
          No Saved Cars
        </h3>
        <p className="text-zinc-400 mb-6 max-w-md">
          You haven't saved any cars yet. Browse our listings and click the
          heart icon to save cars for later.
        </p>
        <Button
          variant="outline"
          asChild
          className="text-blue-400 border-blue-500 hover:bg-blue-500/10 hover:text-blue-300 transition-colors duration-200 px-6 py-2 rounded-xl text-sm"
        >
          <Link href="/cars">Browse Cars</Link>
        </Button>
      </div>
    );
  }

  // Display saved cars
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {initialData?.data?.map((car) => (
        <CarCard key={car.id} car={{ ...car, wishlisted: true }} />
      ))}
    </div>
  );
}
