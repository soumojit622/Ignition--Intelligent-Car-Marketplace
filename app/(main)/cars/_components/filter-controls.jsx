"use client";

import { Check, X } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

export const CarFilterControls = ({
  filters,
  currentFilters,
  onFilterChange,
  onClearFilter,
}) => {
  const { make, bodyType, fuelType, transmission, priceRange } = currentFilters;

  const filterSections = [
    {
      id: "make",
      title: "Make",
      options: filters.makes.map((make) => ({ value: make, label: make })),
      currentValue: make,
      onChange: (value) => onFilterChange("make", value),
    },
    {
      id: "bodyType",
      title: "Body Type",
      options: filters.bodyTypes.map((type) => ({ value: type, label: type })),
      currentValue: bodyType,
      onChange: (value) => onFilterChange("bodyType", value),
    },
    {
      id: "fuelType",
      title: "Fuel Type",
      options: filters.fuelTypes.map((type) => ({ value: type, label: type })),
      currentValue: fuelType,
      onChange: (value) => onFilterChange("fuelType", value),
    },
    {
      id: "transmission",
      title: "Transmission",
      options: filters.transmissions.map((type) => ({
        value: type,
        label: type,
      })),
      currentValue: transmission,
      onChange: (value) => onFilterChange("transmission", value),
    },
  ];

  return (
    <div className="space-y-8">
      {/* 💰 Price Range */}
      <div className="space-y-4">
        <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100">
          Price Range
        </h3>

        <div className="px-2">
          <Slider
            min={filters.priceRange.min}
            max={filters.priceRange.max}
            step={100}
            value={priceRange}
            onValueChange={(value) => onFilterChange("priceRange", value)}
            className="text-primary"
          />
        </div>

        <div className="flex items-center justify-between px-2 text-sm text-gray-700 dark:text-gray-300">
          <span className="font-medium">${priceRange[0]}</span>
          <span className="font-medium">${priceRange[1]}</span>
        </div>
      </div>

      {/* 🏷️ Filter Categories */}
      {filterSections.map((section) => (
        <div key={section.id} className="space-y-3">
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              {section.title}
            </h4>
            {section.currentValue && (
              <button
                className="text-sm text-gray-300 hover:text-red-500 transition-colors flex items-center cursor-pointer"
                onClick={() => onClearFilter(section.id)}
              >
                <X className="mr-1 h-3 w-3" />
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
            {section.options.map((option) => {
              const isActive = section.currentValue === option.value;
              return (
                <Badge
                  key={option.value}
                  variant={isActive ? "default" : "outline"}
                  className={`cursor-pointer text-xs font-medium px-3 py-1 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                      : "bg-white dark:bg-zinc-800 dark:text-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-zinc-700"
                  }`}
                  onClick={() => section.onChange(isActive ? "" : option.value)}
                >
                  {option.label}
                  {isActive && <Check className="ml-1 h-3 w-3 inline" />}
                </Badge>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
