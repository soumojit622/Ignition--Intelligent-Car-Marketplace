"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Search, Loader2, CalendarRange, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TestDriveCard } from "@/components/test-drive-card";
import useFetch from "@/hooks/use-fetch";
import { getAdminTestDrives, updateTestDriveStatus } from "@/actions/admin";
import { cancelTestDrive } from "@/actions/test-drive";

export const TestDrivesList = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // Custom hooks for API calls
  const {
    loading: fetchingTestDrives,
    fn: fetchTestDrives,
    data: testDrivesData,
    error: testDrivesError,
  } = useFetch(getAdminTestDrives);

  const {
    loading: updatingStatus,
    fn: updateStatusFn,
    data: updateResult,
    error: updateError,
  } = useFetch(updateTestDriveStatus);

  const {
    loading: cancelling,
    fn: cancelTestDriveFn,
    data: cancelResult,
    error: cancelError,
  } = useFetch(cancelTestDrive);

  // Initial fetch and refetch on search/filter changes
  useEffect(() => {
    fetchTestDrives({ search, status: statusFilter });
  }, [search, statusFilter]);

  // Handle errors
  useEffect(() => {
    if (testDrivesError) {
      toast.error("Failed to load test drives");
    }
    if (updateError) {
      toast.error("Failed to update test drive status");
    }
    if (cancelError) {
      toast.error("Failed to cancel test drive");
    }
  }, [testDrivesError, updateError, cancelError]);

  // Handle successful operations
  useEffect(() => {
    if (updateResult?.success) {
      toast.success("Test drive status updated successfully");
      fetchTestDrives({ search, status: statusFilter });
    }
    if (cancelResult?.success) {
      toast.success("Test drive cancelled successfully");
      fetchTestDrives({ search, status: statusFilter });
    }
  }, [updateResult, cancelResult]);

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchTestDrives({ search, status: statusFilter });
  };

  // Handle status update
  const handleUpdateStatus = async (bookingId, newStatus) => {
    if (newStatus) {
      await updateStatusFn(bookingId, newStatus);
    }
  };

  // Handle booking cancellation
  const handleCancel = async (bookingId) => {
    await cancelTestDriveFn(bookingId);
  };

  return (
    <div className="space-y-6">
      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          {/* Status Filter */}
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48 bg-zinc-800 text-gray-200 border border-zinc-700 focus:ring-1 focus:ring-blue-500">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border border-zinc-700 text-gray-100">
              <SelectItem>All Statuses</SelectItem>
              <SelectItem value="PENDING">Pending</SelectItem>
              <SelectItem value="CONFIRMED">Confirmed</SelectItem>
              <SelectItem value="COMPLETED">Completed</SelectItem>
              <SelectItem value="CANCELLED">Cancelled</SelectItem>
              <SelectItem value="NO_SHOW">No Show</SelectItem>
            </SelectContent>
          </Select>

          {/* Search Form */}
          <form onSubmit={handleSearchSubmit} className="flex w-full">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-blue-400" />
              <Input
                type="search"
                placeholder="Search by car or customer..."
                className="pl-10 w-full bg-zinc-800 text-white border border-zinc-700 focus:ring-blue-500"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="ml-2 blue-gradient hover:brightness-90 text-white shadow-md cursor-pointer"
            >
              Search
            </Button>
          </form>
        </div>
      </div>

      {/* Test Drives List */}
      <Card className="bg-zinc-900 border border-zinc-700 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-400">
            <CalendarRange className="h-5 w-5" />
            Test Drive Bookings
          </CardTitle>
          <CardDescription className="text-gray-400">
            Manage all test drive reservations and update their status
          </CardDescription>
        </CardHeader>

        <CardContent>
          {fetchingTestDrives && !testDrivesData ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
            </div>
          ) : testDrivesError ? (
            <Alert
              variant="destructive"
              className="bg-zinc-800 border border-red-600"
            >
              <AlertCircle className="h-4 w-4 text-red-500" />
              <AlertTitle className="text-white">Error</AlertTitle>
              <AlertDescription className="text-red-400">
                Failed to load test drives. Please try again.
              </AlertDescription>
            </Alert>
          ) : testDrivesData?.data?.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
              <CalendarRange className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-1">
                No Test Drives Found
              </h3>
              <p className="text-gray-400 mb-4">
                {statusFilter || search
                  ? "No test drives match your search criteria."
                  : "There are no test drive bookings yet."}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {testDrivesData?.data?.map((booking) => (
                <div key={booking.id} className="relative">
                  <TestDriveCard
                    booking={booking}
                    onCancel={handleCancel}
                    showActions={["PENDING", "CONFIRMED"].includes(
                      booking.status
                    )}
                    isAdmin={true}
                    isCancelling={cancelling}
                    cancelError={cancelError}
                    renderStatusSelector={() => (
                      <Select
                        value={booking.status}
                        onValueChange={(value) =>
                          handleUpdateStatus(booking.id, value)
                        }
                        disabled={updatingStatus}
                      >
                        <SelectTrigger className="w-full h-8 bg-zinc-800 border border-zinc-700 text-gray-100">
                          <SelectValue placeholder="Update Status" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-900 border border-zinc-700 text-gray-100">
                          <SelectItem value="PENDING">Pending</SelectItem>
                          <SelectItem value="CONFIRMED">Confirmed</SelectItem>
                          <SelectItem value="COMPLETED">Completed</SelectItem>
                          <SelectItem value="CANCELLED">Cancelled</SelectItem>
                          <SelectItem value="NO_SHOW">No Show</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
