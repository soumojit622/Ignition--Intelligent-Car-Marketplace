"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter, RotateCcw, Search, Sliders, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { CarFilterControls } from "./filter-controls";

export const CarFilters = ({ filters }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get current filter values from searchParams
  const currentMake = searchParams.get("make") || "";
  const currentBodyType = searchParams.get("bodyType") || "";
  const currentFuelType = searchParams.get("fuelType") || "";
  const currentTransmission = searchParams.get("transmission") || "";
  const currentMinPrice = searchParams.get("minPrice")
    ? parseInt(searchParams.get("minPrice"))
    : filters.priceRange.min;
  const currentMaxPrice = searchParams.get("maxPrice")
    ? parseInt(searchParams.get("maxPrice"))
    : filters.priceRange.max;
  const currentSortBy = searchParams.get("sortBy") || "newest";

  // Local state for filters
  const [make, setMake] = useState(currentMake);
  const [bodyType, setBodyType] = useState(currentBodyType);
  const [fuelType, setFuelType] = useState(currentFuelType);
  const [transmission, setTransmission] = useState(currentTransmission);
  const [priceRange, setPriceRange] = useState([
    currentMinPrice,
    currentMaxPrice,
  ]);
  const [sortBy, setSortBy] = useState(currentSortBy);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Update local state when URL parameters change
  useEffect(() => {
    setMake(currentMake);
    setBodyType(currentBodyType);
    setFuelType(currentFuelType);
    setTransmission(currentTransmission);
    setPriceRange([currentMinPrice, currentMaxPrice]);
    setSortBy(currentSortBy);
  }, [
    currentMake,
    currentBodyType,
    currentFuelType,
    currentTransmission,
    currentMinPrice,
    currentMaxPrice,
    currentSortBy,
  ]);

  // Count active filters
  const activeFilterCount = [
    make,
    bodyType,
    fuelType,
    transmission,
    currentMinPrice > filters.priceRange.min ||
      currentMaxPrice < filters.priceRange.max,
  ].filter(Boolean).length;

  // Update URL when filters change
  const applyFilters = useCallback(() => {
    const params = new URLSearchParams();

    if (make) params.set("make", make);
    if (bodyType) params.set("bodyType", bodyType);
    if (fuelType) params.set("fuelType", fuelType);
    if (transmission) params.set("transmission", transmission);
    if (priceRange[0] > filters.priceRange.min)
      params.set("minPrice", priceRange[0].toString());
    if (priceRange[1] < filters.priceRange.max)
      params.set("maxPrice", priceRange[1].toString());
    if (sortBy !== "newest") params.set("sortBy", sortBy);

    // Preserve search and page params if they exist
    const search = searchParams.get("search");
    const page = searchParams.get("page");
    if (search) params.set("search", search);
    if (page && page !== "1") params.set("page", page);

    const query = params.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    router.push(url);
    setIsSheetOpen(false);
  }, [
    make,
    bodyType,
    fuelType,
    transmission,
    priceRange,
    sortBy,
    pathname,
    searchParams,
    filters.priceRange.min,
    filters.priceRange.max,
  ]);

  // Handle filter changes
  const handleFilterChange = (filterName, value) => {
    switch (filterName) {
      case "make":
        setMake(value);
        break;
      case "bodyType":
        setBodyType(value);
        break;
      case "fuelType":
        setFuelType(value);
        break;
      case "transmission":
        setTransmission(value);
        break;
      case "priceRange":
        setPriceRange(value);
        break;
    }
  };

  // Handle clearing specific filter
  const handleClearFilter = (filterName) => {
    handleFilterChange(filterName, "");
  };

  // Clear all filters
  const clearFilters = () => {
    setMake("");
    setBodyType("");
    setFuelType("");
    setTransmission("");
    setPriceRange([filters.priceRange.min, filters.priceRange.max]);
    setSortBy("newest");

    // Keep search term if exists
    const params = new URLSearchParams();
    const search = searchParams.get("search");
    if (search) params.set("search", search);

    const query = params.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    router.push(url);
    setIsSheetOpen(false);
  };

  // Current filters object for the controls component
  const currentFilters = {
    make,
    bodyType,
    fuelType,
    transmission,
    priceRange,
    priceRangeMin: filters.priceRange.min,
    priceRangeMax: filters.priceRange.max,
  };

  return (
    <div className="flex flex-col lg:flex-col gap-6">
      {/* 📱 Mobile Filters */}
      <div className="lg:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800"
            >
              <Filter className="h-4 w-4" />
              Filters
              {activeFilterCount > 0 && (
                <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-primary text-white shadow-md">
                  {activeFilterCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-full sm:max-w-md overflow-y-auto bg-zinc-900 text-white px-6 py-6 flex flex-col"
          >
            <SheetHeader>
              <SheetTitle className="text-2xl font-semibold tracking-tight mb-4 text-white">
                Filters
              </SheetTitle>
            </SheetHeader>

            <div className="flex-1 overflow-y-auto space-y-6">
              <CarFilterControls
                filters={filters}
                currentFilters={currentFilters}
                onFilterChange={handleFilterChange}
                onClearFilter={handleClearFilter}
              />
            </div>

            <SheetFooter className="pt-6 mt-6 border-t border-zinc-700 flex flex-col gap-4">
              <Button
                variant="outline"
                onClick={clearFilters}
                className="w-full rounded-xl text-sm border-zinc-600 text-white hover:bg-zinc-800 flex items-center justify-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>

              <Button
                onClick={applyFilters}
                className="w-full rounded-xl text-sm blue-gradient text-white hover:bg-primary/90 flex items-center justify-center gap-2"
              >
                <Search className="h-4 w-4" />
                Show Results
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* 🔽 Sort Dropdown */}
      <Select
        value={sortBy}
        onValueChange={(value) => {
          setSortBy(value);
          setTimeout(() => applyFilters(), 0);
        }}
      >
        <SelectTrigger className="w-full rounded-xl bg-white dark:bg-zinc-900 border dark:border-gray-700 text-sm font-medium">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent className="rounded-xl shadow-lg bg-white dark:bg-zinc-900 border dark:border-gray-700">
          {[
            { value: "newest", label: "Newest First" },
            { value: "priceAsc", label: "Price: Low to High" },
            { value: "priceDesc", label: "Price: High to Low" },
          ].map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="hover:bg-gray-100 dark:hover:bg-zinc-800 px-3 py-2 rounded-md text-sm"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* 🖥 Desktop Filters */}
      <div className="hidden lg:block sticky top-24">
        <div className="rounded-xl border bg-white dark:bg-zinc-900 dark:border-gray-700 shadow-md overflow-hidden">
          <div className="p-4 border-b dark:border-gray-700 bg-gray-50 dark:bg-zinc-800 flex justify-between items-center">
            <h3 className="font-semibold text-base flex items-center">
              <Sliders className="mr-2 h-4 w-4" />
              Filters
            </h3>
            {activeFilterCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-sm text-gray-300 hover:text-red-500 cursor-pointer"
                onClick={clearFilters}
              >
                <X className="mr-1 h-3 w-3" />
                Clear All
              </Button>
            )}
          </div>

          <div className="p-4 space-y-4">
            <CarFilterControls
              filters={filters}
              currentFilters={currentFilters}
              onFilterChange={handleFilterChange}
              onClearFilter={handleClearFilter}
            />
          </div>

          <div className="px-4 py-4 border-t dark:border-gray-700">
            <Button
              onClick={applyFilters}
              className="w-full rounded-xl blue-gradient text-white hover:brightness-90 cursor-pointer"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
