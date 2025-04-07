"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Car,
  Calendar,
  TrendingUp,
  Info,
  CheckCircle,
  Clock,
  XCircle,
  Star,
  DollarSign,
  FileText,
} from "lucide-react";

export function Dashboard({ initialData }) {
  const [activeTab, setActiveTab] = useState("overview");

  // Show error if data fetch failed
  if (!initialData || !initialData.success) {
    return (
      <Alert variant="destructive">
        <Info className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {initialData?.error || "Failed to load dashboard data"}
        </AlertDescription>
      </Alert>
    );
  }

  const { cars, testDrives } = initialData.data;

  return (
    <div className="space-y-6">
      <Tabs
        defaultValue="overview"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList>
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="test-drives" className="flex items-center gap-2">
            <Car className="h-4 w-4" />
            Test Drives
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* KPI Summary Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <Card className="bg-white dark:bg-zinc-900 shadow-md border border-blue-900 dark:border-blue-900">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Total Cars
                </CardTitle>
                <Car className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                  {cars.total}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {cars.available} available, {cars.sold} sold
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-white dark:bg-zinc-900 shadow-md border  dark:border-blue-900">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Test Drives
                </CardTitle>
                <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                  {testDrives.total}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {testDrives.pending} pending, {testDrives.confirmed} confirmed
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-white dark:bg-zinc-900 shadow-md border border-gray-200 dark:border-blue-900 ">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Conversion Rate
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                  {testDrives.conversionRate}%
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  From test drives to sales
                </p>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="bg-white dark:bg-zinc-900 shadow-md border border-gray-200 dark:border-blue-900">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Cars Sold
                </CardTitle>
                <DollarSign className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                  {cars.sold}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {((cars.sold / cars.total) * 100).toFixed(1)}% of inventory
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Dealership Summary */}
          <Card className="bg-white dark:bg-zinc-900 shadow-md border border-gray-200 dark:border-blue-900">
            <CardHeader>
              <CardTitle className="text-lg text-blue-200">
                Dealership Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* Inventory Progress */}
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-blue-100 mb-2">
                      Car Inventory
                    </h3>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{
                            width: `${(cars.available / cars.total) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm text-blue-600 dark:text-blue-400">
                        {((cars.available / cars.total) * 100).toFixed(0)}%
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      Available inventory capacity
                    </p>
                  </div>

                  {/* Test Drive Progress */}
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-blue-100 mb-2">
                      Test Drive Success
                    </h3>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-blue-500 h-2.5 rounded-full"
                          style={{
                            width: `${
                              (testDrives.completed / (testDrives.total || 1)) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm text-blue-500 dark:text-blue-300">
                        {(
                          (testDrives.completed / (testDrives.total || 1)) *
                          100
                        ).toFixed(0)}
                        %
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      Completed test drives
                    </p>
                  </div>
                </div>

                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      {cars.sold}
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Cars Sold
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-amber-600 dark:text-amber-400">
                      {testDrives.pending + testDrives.confirmed}
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Upcoming Test Drives
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                      {((cars.available / (cars.total || 1)) * 100).toFixed(0)}%
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Inventory Utilization
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Test Drives Tab */}
        <TabsContent value="test-drives" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {/* Total Bookings */}
            <Card className="bg-zinc-900 border border-blue-900 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-blue-100">
                  Total Bookings
                </CardTitle>
                <Calendar className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-300">
                  {testDrives.total}
                </div>
              </CardContent>
            </Card>

            {/* Pending */}
            <Card className="bg-zinc-900 border border-blue-900 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-blue-100">
                  Pending
                </CardTitle>
                <Clock className="h-4 w-4 text-yellow-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-300">
                  {testDrives.pending}
                </div>
                <p className="text-xs text-blue-400">
                  {((testDrives.pending / testDrives.total) * 100).toFixed(1)}%
                  of bookings
                </p>
              </CardContent>
            </Card>

            {/* Confirmed */}
            <Card className="bg-zinc-900 border border-blue-900 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-blue-100">
                  Confirmed
                </CardTitle>
                <CheckCircle className="h-4 w-4 text-green-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-300">
                  {testDrives.confirmed}
                </div>
                <p className="text-xs text-blue-400">
                  {((testDrives.confirmed / testDrives.total) * 100).toFixed(1)}
                  % of bookings
                </p>
              </CardContent>
            </Card>

            {/* Completed */}
            <Card className="bg-zinc-900 border border-blue-900 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-blue-100">
                  Completed
                </CardTitle>
                <CheckCircle className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-300">
                  {testDrives.completed}
                </div>
                <p className="text-xs text-blue-400">
                  {((testDrives.completed / testDrives.total) * 100).toFixed(1)}
                  % of bookings
                </p>
              </CardContent>
            </Card>

            {/* Cancelled */}
            <Card className="bg-zinc-900 border border-blue-900 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-blue-100">
                  Cancelled
                </CardTitle>
                <XCircle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-400">
                  {testDrives.cancelled}
                </div>
                <p className="text-xs text-blue-400">
                  {((testDrives.cancelled / testDrives.total) * 100).toFixed(1)}
                  % of bookings
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Test Drive Statistics */}
          <Card className="bg-zinc-900 border border-blue-900 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg text-blue-200">
                Test Drive Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Conversion Rate */}
                  <div className="bg-[#1e293b] rounded-lg p-4">
                    <h3 className="text-lg font-medium text-blue-100 mb-2">
                      Conversion Rate
                    </h3>
                    <div className="text-3xl font-bold text-blue-400">
                      {testDrives.conversionRate}%
                    </div>
                    <p className="text-sm text-blue-500 mt-1">
                      Test drives resulting in car purchases
                    </p>
                  </div>

                  {/* Completion Rate */}
                  <div className="bg-[#1e293b] rounded-lg p-4">
                    <h3 className="text-lg font-medium text-blue-100 mb-2">
                      Completion Rate
                    </h3>
                    <div className="text-3xl font-bold text-green-400">
                      {testDrives.total
                        ? (
                            (testDrives.completed / testDrives.total) *
                            100
                          ).toFixed(1)
                        : 0}
                      %
                    </div>
                    <p className="text-sm text-blue-500 mt-1">
                      Test drives successfully completed
                    </p>
                  </div>
                </div>

                {/* Status Breakdown */}
                <div className="space-y-4 mt-4">
                  <h3 className="font-medium text-blue-100">
                    Booking Status Breakdown
                  </h3>

                  {[
                    {
                      label: "Pending",
                      value: testDrives.pending,
                      color: "bg-yellow-400",
                    },
                    {
                      label: "Confirmed",
                      value: testDrives.confirmed,
                      color: "bg-green-400",
                    },
                    {
                      label: "Completed",
                      value: testDrives.completed,
                      color: "bg-blue-400",
                    },
                    {
                      label: "Cancelled",
                      value: testDrives.cancelled,
                      color: "bg-red-400",
                    },
                    {
                      label: "No Show",
                      value: testDrives.noShow,
                      color: "bg-gray-400",
                    },
                  ].map((item) => (
                    <div className="space-y-2" key={item.label}>
                      <div className="flex justify-between text-sm text-blue-200">
                        <span>{item.label}</span>
                        <span className="font-medium">
                          {item.value} (
                          {((item.value / testDrives.total) * 100).toFixed(1)}%)
                        </span>
                      </div>
                      <div className="w-full bg-blue-900 rounded-full h-2.5">
                        <div
                          className={`${item.color} h-2.5 rounded-full`}
                          style={{
                            width: `${(item.value / testDrives.total) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
