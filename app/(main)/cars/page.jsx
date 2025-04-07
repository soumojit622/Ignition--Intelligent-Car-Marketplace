import { CarFilters } from "./_components/car-filters";
import { getCarFilters } from "@/actions/car-listing";
import { CarListings } from "./_components/cars-listing";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Cars | Ignition",
  description: "Browse and search for your dream car",
};

export default async function CarsPage() {
  // Fetch filters data on the server
  const filtersData = await getCarFilters();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-6xl mb-4 gradient-title">Browse Cars</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Section */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <Suspense fallback={<div>Loading filters...</div>}>
            <CarFilters filters={filtersData.data} />
          </Suspense>
        </div>

        {/* Car Listings */}
        <div className="flex-1">
          <Suspense fallback={<div>Loading listings...</div>}>
            <CarListings />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
