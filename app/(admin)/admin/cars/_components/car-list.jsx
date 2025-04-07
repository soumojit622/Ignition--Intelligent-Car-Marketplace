"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Plus,
  Search,
  MoreHorizontal,
  Star,
  StarOff,
  Trash2,
  Eye,
  Loader2,
  Car as CarIcon,
  Tag,
  X,
  Trash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import useFetch from "@/hooks/use-fetch";
import { getCars, deleteCar, updateCarStatus } from "@/actions/cars";
import { formatCurrency } from "@/lib/helpers";
import Image from "next/image";

export const CarsList = () => {
  const router = useRouter();

  // State for search and dialogs
  const [search, setSearch] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [carToDelete, setCarToDelete] = useState(null);

  // Custom hooks for API calls
  const {
    loading: loadingCars,
    fn: fetchCars,
    data: carsData,
    error: carsError,
  } = useFetch(getCars);

  const {
    loading: deletingCar,
    fn: deleteCarFn,
    data: deleteResult,
    error: deleteError,
  } = useFetch(deleteCar);

  const {
    loading: updatingCar,
    fn: updateCarStatusFn,
    data: updateResult,
    error: updateError,
  } = useFetch(updateCarStatus);

  // Initial fetch and refetch on search changes
  useEffect(() => {
    fetchCars(search);
  }, [search]);

  // Handle errors
  useEffect(() => {
    if (carsError) {
      toast.error("Failed to load cars");
    }

    if (deleteError) {
      toast.error("Failed to delete car");
    }

    if (updateError) {
      toast.error("Failed to update car");
    }
  }, [carsError, deleteError, updateError]);

  // Handle successful operations
  useEffect(() => {
    if (deleteResult?.success) {
      toast.success("Car deleted successfully");
      fetchCars(search);
    }

    if (updateResult?.success) {
      toast.success("Car updated successfully");
      fetchCars(search);
    }
  }, [deleteResult, updateResult, search]);

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchCars(search);
  };

  // Handle delete car
  const handleDeleteCar = async () => {
    if (!carToDelete) return;

    await deleteCarFn(carToDelete.id);
    setDeleteDialogOpen(false);
    setCarToDelete(null);
  };

  // Handle toggle featured status
  const handleToggleFeatured = async (car) => {
    await updateCarStatusFn(car.id, { featured: !car.featured });
  };

  // Handle status change
  const handleStatusUpdate = async (car, newStatus) => {
    await updateCarStatusFn(car.id, { status: newStatus });
  };

  // Get status badge color
  const getStatusBadge = (status) => {
    switch (status) {
      case "AVAILABLE":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Available
          </Badge>
        );
      case "UNAVAILABLE":
        return (
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
            Unavailable
          </Badge>
        );
      case "SOLD":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            Sold
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-8 font-sans text-white bg-zinc-900 p-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <Button
          onClick={() => router.push("/admin/cars/create")}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white px-5 py-2 rounded-lg shadow-xl transition duration-300 hover:brightness-90 hover:scale-105 transform"
        >
          <Plus className="h-4 w-4" />
          <span className="text-sm font-semibold tracking-wide">Add Car</span>
        </Button>

        <form onSubmit={handleSearchSubmit} className="w-full sm:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-blue-400" />
            <Input
              type="search"
              placeholder="Search cars..."
              className="pl-10 w-full sm:w-72 rounded-xl bg-zinc-800 border border-zinc-700 focus:ring-2 focus:ring-blue-500 transition text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
      </div>

      {/* Cars Table */}
      <Card className="bg-zinc-900/70 backdrop-blur border border-zinc-700 shadow-xl rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          {loadingCars && !carsData ? (
            <div className="flex justify-center items-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
            </div>
          ) : carsData?.success && carsData.data.length > 0 ? (
            <div className="overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader className="bg-zinc-800 text-blue-100">
                  <TableRow>
                    <TableHead className="w-12"></TableHead>
                    <TableHead className="text-sm text-center">
                      Make & Model
                    </TableHead>
                    <TableHead className="text-sm text-center">Year</TableHead>
                    <TableHead className="text-sm text-center">Price</TableHead>
                    <TableHead className="text-sm text-center">
                      Status
                    </TableHead>
                    <TableHead className="text-sm text-center">
                      Featured
                    </TableHead>
                    <TableHead className="text-right text-sm">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-gray-100 text-sm">
                  {carsData.data.map((car) => (
                    <TableRow
                      key={car.id}
                      className="hover:bg-zinc-800/80 transition-all duration-200"
                    >
                      <TableCell className="text-center">
                        <div className="w-10 h-10 rounded-md overflow-hidden shadow-sm border border-zinc-700">
                          {car.images?.[0] ? (
                            <Image
                              src={car.images[0]}
                              alt={`${car.make} ${car.model}`}
                              height={40}
                              width={40}
                              className="w-full h-full object-cover"
                              priority
                            />
                          ) : (
                            <div className="w-full h-full bg-zinc-700 flex items-center justify-center">
                              <CarIcon className="h-5 w-5 text-gray-400" />
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-center">
                        {car.make} {car.model}
                      </TableCell>
                      <TableCell className="text-center">{car.year}</TableCell>
                      <TableCell className="text-center">
                        {formatCurrency(car.price)}
                      </TableCell>
                      <TableCell className="text-center">
                        {getStatusBadge(car.status)}
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleToggleFeatured(car)}
                          disabled={updatingCar}
                          className="hover:bg-blue-500/10"
                        >
                          {car.featured ? (
                            <Star className="h-5 w-5 text-blue-400 fill-blue-400" />
                          ) : (
                            <StarOff className="h-5 w-5 text-gray-500" />
                          )}
                        </Button>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="hover:bg-zinc-700/50 transition-all duration-200 ease-in-out transform"
                            >
                              <MoreHorizontal className="h-5 w-5 text-gray-300" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="bg-zinc-900 border border-zinc-700 text-white shadow-lg rounded-xl transition-all duration-200 ease-in-out transform"
                          >
                            <DropdownMenuLabel className="text-blue-500 font-semibold">
                              Actions
                            </DropdownMenuLabel>
                            <DropdownMenuItem
                              onClick={() => router.push(`/cars/${car.id}`)}
                              className="hover:bg-zinc-800 transition-colors duration-200 cursor-pointer"
                            >
                              <Eye className="mr-2 h-4 w-4 text-gray-300" />
                              View
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="border-zinc-700" />
                            <DropdownMenuLabel className="text-blue-500 font-semibold">
                              Status
                            </DropdownMenuLabel>
                            {["AVAILABLE", "UNAVAILABLE", "SOLD"].map(
                              (status) => (
                                <DropdownMenuItem
                                  key={status}
                                  onClick={() =>
                                    handleStatusUpdate(car, status)
                                  }
                                  disabled={
                                    car.status === status || updatingCar
                                  }
                                  className="hover:bg-zinc-800 transition-colors duration-200"
                                >
                                  <Tag className="mr-2 h-4 w-4 text-gray-300" />
                                  {`Set ${status}`}
                                </DropdownMenuItem>
                              )
                            )}
                            <DropdownMenuSeparator className="border-zinc-700" />
                            <DropdownMenuItem
                              className="text-red-500 hover:bg-zinc-800 transition-colors duration-200 cursor-pointer"
                              onClick={() => {
                                setCarToDelete(car);
                                setDeleteDialogOpen(true);
                              }}
                            >
                              <Trash2 className="mr-2 h-4 w-4 text-red-500" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 text-center text-gray-400 space-y-6 bg-zinc-900/50 backdrop-blur-md rounded-xl shadow-md transition-all duration-300">
              <div className="bg-zinc-800 p-4 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105">
                <CarIcon className="h-12 w-12 text-blue-400 transition-colors duration-300 hover:text-blue-500" />
              </div>

              <h3 className="text-2xl font-bold text-white tracking-wide transition-all duration-300">
                No Cars Found
              </h3>

              <p className="max-w-sm mx-auto text-sm text-gray-400">
                {search
                  ? "No cars match your search criteria."
                  : "You haven't added any cars yet. Start by adding your first vehicle to get started."}
              </p>

              <button
                onClick={() => router.push("/admin/cars/create")}
                className="blue-gradient text-white px-5 py-2 rounded-lg shadow-lg hover:brightness-90 active:scale-95 transform transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Plus className="h-4 w-4" />
                <span className="font-medium text-sm">Add Car</span>
              </button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="bg-zinc-900 border border-zinc-700 text-white rounded-xl shadow-2xl p-8 transform transition-all duration-300 ease-in-out">
          <DialogHeader>
            <DialogTitle className="text-white text-2xl font-semibold tracking-wide mb-2">
              Delete Car
            </DialogTitle>
            <DialogDescription className="text-gray-400 text-base">
              Are you sure you want to delete{" "}
              <span className="text-white font-semibold">
                {carToDelete?.make} {carToDelete?.model} ({carToDelete?.year})
              </span>
              ? This action is permanent and cannot be undone.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex justify-end gap-6 mt-8">
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
              className="border-gray-600 cursor-pointer text-gray-300 hover:bg-zinc-800 hover:border-zinc-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <X className=" h-4 w-4" /> {/* X icon for cancel */}
              Cancel
            </Button>
            <Button
              onClick={handleDeleteCar}
              className="bg-red-600 cursor-pointer hover:bg-red-700 text-white focus:ring-2 focus:ring-red-500 transition-all duration-300 ease-in-out transform hover:scale-105"
              disabled={deletingCar}
            >
              {deletingCar ? (
                <>
                  <Loader2 className=" h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                <>
                  <Trash className=" h-4 w-4" /> {/* Trash icon for delete */}
                  Delete Car
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
