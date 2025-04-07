"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  Save,
  Clock,
  Loader2,
  Users,
  Shield,
  UserX,
  CheckCircle,
  Search,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useFetch from "@/hooks/use-fetch";
import {
  getDealershipInfo,
  saveWorkingHours,
  getUsers,
  updateUserRole,
} from "@/actions/settings";

// Day names for display
const DAYS = [
  { value: "MONDAY", label: "Monday" },
  { value: "TUESDAY", label: "Tuesday" },
  { value: "WEDNESDAY", label: "Wednesday" },
  { value: "THURSDAY", label: "Thursday" },
  { value: "FRIDAY", label: "Friday" },
  { value: "SATURDAY", label: "Saturday" },
  { value: "SUNDAY", label: "Sunday" },
];

export const SettingsForm = () => {
  const [workingHours, setWorkingHours] = useState(
    DAYS.map((day) => ({
      dayOfWeek: day.value,
      openTime: "09:00",
      closeTime: "18:00",
      isOpen: day.value !== "SUNDAY",
    }))
  );

  const [userSearch, setUserSearch] = useState("");
  const [confirmAdminDialog, setConfirmAdminDialog] = useState(false);
  const [userToPromote, setUserToPromote] = useState(null);
  const [confirmRemoveDialog, setConfirmRemoveDialog] = useState(false);
  const [userToDemote, setUserToDemote] = useState(null);

  // Custom hooks for API calls
  const {
    loading: fetchingSettings,
    fn: fetchDealershipInfo,
    data: settingsData,
    error: settingsError,
  } = useFetch(getDealershipInfo);

  const {
    loading: savingHours,
    fn: saveHours,
    data: saveResult,
    error: saveError,
  } = useFetch(saveWorkingHours);

  const {
    loading: fetchingUsers,
    fn: fetchUsers,
    data: usersData,
    error: usersError,
  } = useFetch(getUsers);

  const {
    loading: updatingRole,
    fn: updateRole,
    data: updateRoleResult,
    error: updateRoleError,
  } = useFetch(updateUserRole);

  // Fetch settings and users on component mount
  useEffect(() => {
    fetchDealershipInfo();
    fetchUsers();
  }, []);

  // Set working hours when settings data is fetched
  useEffect(() => {
    if (settingsData?.success && settingsData.data) {
      const dealership = settingsData.data;

      // Map the working hours
      if (dealership.workingHours.length > 0) {
        const mappedHours = DAYS.map((day) => {
          // Find matching working hour
          const hourData = dealership.workingHours.find(
            (h) => h.dayOfWeek === day.value
          );

          if (hourData) {
            return {
              dayOfWeek: hourData.dayOfWeek,
              openTime: hourData.openTime,
              closeTime: hourData.closeTime,
              isOpen: hourData.isOpen,
            };
          }

          // Default values if no working hour is found
          return {
            dayOfWeek: day.value,
            openTime: "09:00",
            closeTime: "18:00",
            isOpen: day.value !== "SUNDAY",
          };
        });

        setWorkingHours(mappedHours);
      }
    }
  }, [settingsData]);

  // Handle errors
  useEffect(() => {
    if (settingsError) {
      toast.error("Failed to load dealership settings");
    }

    if (saveError) {
      toast.error(`Failed to save working hours: ${saveError.message}`);
    }

    if (usersError) {
      toast.error("Failed to load users");
    }

    if (updateRoleError) {
      toast.error(`Failed to update user role: ${updateRoleError.message}`);
    }
  }, [settingsError, saveError, usersError, updateRoleError]);

  // Handle successful operations
  useEffect(() => {
    if (saveResult?.success) {
      toast.success("Working hours saved successfully");
      fetchDealershipInfo();
    }

    if (updateRoleResult?.success) {
      toast.success("User role updated successfully");
      fetchUsers();
      setConfirmAdminDialog(false);
      setConfirmRemoveDialog(false);
    }
  }, [saveResult, updateRoleResult]);

  // Handle working hours change
  const handleWorkingHourChange = (index, field, value) => {
    const updatedHours = [...workingHours];
    updatedHours[index] = {
      ...updatedHours[index],
      [field]: value,
    };
    setWorkingHours(updatedHours);
  };

  // Save working hours
  const handleSaveHours = async () => {
    await saveHours(workingHours);
  };

  // Make user admin
  const handleMakeAdmin = async () => {
    if (!userToPromote) return;
    await updateRole(userToPromote.id, "ADMIN");
  };

  // Remove admin privileges
  const handleRemoveAdmin = async () => {
    if (!userToDemote) return;
    await updateRole(userToDemote.id, "USER");
  };

  // Filter users by search term
  const filteredUsers = usersData?.success
    ? usersData.data.filter(
        (user) =>
          user.name?.toLowerCase().includes(userSearch.toLowerCase()) ||
          user.email.toLowerCase().includes(userSearch.toLowerCase())
      )
    : [];

  return (
    <div className="space-y-6 dark bg-zinc-900 text-white p-6 rounded-xl shadow-xl">
      <Tabs defaultValue="hours">
        <TabsList className="bg-[#1e293b] text-white border border-[#334155] rounded-lg">
          <TabsTrigger
            value="hours"
            className="data-[state=active]:bg-blue-700 data-[state=active]:text-white dark:hover:bg-blue-800 px-4 py-2 rounded-md transition"
          >
            <Clock className="h-4 w-4 mr-2" />
            Working Hours
          </TabsTrigger>
          <TabsTrigger
            value="admins"
            className="data-[state=active]:bg-blue-700 data-[state=active]:text-white dark:hover:bg-blue-800 px-4 py-2 rounded-md transition"
          >
            <Shield className="h-4 w-4 mr-2" />
            Admin Users
          </TabsTrigger>
        </TabsList>

        {/* Working Hours Tab */}
        <TabsContent value="hours" className="space-y-6 mt-6">
          <Card className="bg-zinc-900 border border-[#334155]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                Working Hours
              </CardTitle>
              <CardDescription className="text-gray-400">
                Set your dealership's working hours for each day of the week.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {DAYS.map((day, index) => (
                  <div
                    key={day.value}
                    className="grid grid-cols-12 gap-4 items-center py-3 px-4 rounded-lg hover:bg-[#334155] transition"
                  >
                    <div className="col-span-3 md:col-span-2">
                      <div className="font-medium text-white">{day.label}</div>
                    </div>

                    <div className="col-span-9 md:col-span-2 flex items-center">
                      <Checkbox
                        id={`is-open-${day.value}`}
                        checked={workingHours[index]?.isOpen}
                        onCheckedChange={(checked) =>
                          handleWorkingHourChange(index, "isOpen", checked)
                        }
                      />
                      <Label
                        htmlFor={`is-open-${day.value}`}
                        className="ml-2 cursor-pointer text-white"
                      >
                        {workingHours[index]?.isOpen ? "Open" : "Closed"}
                      </Label>
                    </div>

                    {workingHours[index]?.isOpen ? (
                      <>
                        <div className="col-span-5 md:col-span-4">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-blue-400 mr-2" />
                            <Input
                              type="time"
                              value={workingHours[index]?.openTime}
                              onChange={(e) =>
                                handleWorkingHourChange(
                                  index,
                                  "openTime",
                                  e.target.value
                                )
                              }
                              className="text-sm bg-[#0f172a] border border-[#334155] text-white"
                            />
                          </div>
                        </div>
                        <div className="text-center col-span-1 text-white">
                          to
                        </div>
                        <div className="col-span-5 md:col-span-3">
                          <Input
                            type="time"
                            value={workingHours[index]?.closeTime}
                            onChange={(e) =>
                              handleWorkingHourChange(
                                index,
                                "closeTime",
                                e.target.value
                              )
                            }
                            className="text-sm bg-[#0f172a] border border-[#334155] text-white"
                          />
                        </div>
                      </>
                    ) : (
                      <div className="col-span-11 md:col-span-8 text-gray-400 italic text-sm">
                        Closed all day
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <Button
                  onClick={handleSaveHours}
                  disabled={savingHours}
                  className="blue-gradient hover:brightness-90 cursor-pointer text-white"
                >
                  {savingHours ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Save Working Hours
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Admin Users Tab */}
        <TabsContent value="admins" className="space-y-6 mt-6">
          <Card className="bg-zinc-900 border border-[#334155]">
            <CardHeader>
              <CardTitle className="text-white">Admin Users</CardTitle>
              <CardDescription className="text-gray-400">
                Manage users with admin privileges.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-blue-400" />
                <Input
                  type="search"
                  placeholder="Search users..."
                  className="pl-9 w-full bg-[#0f172a] border border-[#334155] text-white"
                  value={userSearch}
                  onChange={(e) => setUserSearch(e.target.value)}
                />
              </div>

              {fetchingUsers ? (
                <div className="py-12 flex justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                </div>
              ) : usersData?.success && filteredUsers.length > 0 ? (
                <div className="overflow-x-auto">
                  <Table className="text-white">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-white text-center">
                          User
                        </TableHead>
                        <TableHead className="text-white text-center">
                          Email
                        </TableHead>
                        <TableHead className="text-white text-center">
                          Role
                        </TableHead>
                        <TableHead className="text-white text-center">
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredUsers.map((user) => (
                        <TableRow key={user.id} className="text-center">
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
                                {user.imageUrl ? (
                                  <img
                                    src={user.imageUrl}
                                    alt={user.name || "User"}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <Users className="h-4 w-4 text-gray-400 mx-auto" />
                                )}
                              </div>
                              <span>{user.name || "Unnamed User"}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            {user.email}
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge
                              className={`${
                                user.role === "ADMIN"
                                  ? "bg-blue-700"
                                  : "bg-gray-600"
                              } text-white`}
                            >
                              {user.role}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-center">
                            {user.role === "ADMIN" ? (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-400 hover:text-red-300 border border-red-400 hover:border-red-300 bg-zinc-900 hover:bg-zinc-800 transition-colors duration-200 cursor-pointer"
                                onClick={() => {
                                  setUserToDemote(user);
                                  setConfirmRemoveDialog(true);
                                }}
                                disabled={updatingRole}
                              >
                                <UserX className="h-4 w-4 mr-2" />
                                Remove Admin
                              </Button>
                            ) : (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-blue-400 hover:text-blue-300 border border-blue-400 hover:border-blue-300 bg-zinc-900 hover:bg-zinc-800 transition-colors duration-200 cursor-pointer"
                                onClick={() => {
                                  setUserToPromote(user);
                                  setConfirmAdminDialog(true);
                                }}
                                disabled={updatingRole}
                              >
                                <Shield className="h-4 w-4 mr-2" />
                                Make Admin
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="py-12 text-center text-gray-400">
                  <Users className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white mb-1">
                    No users found
                  </h3>
                  <p>
                    {userSearch
                      ? "No users match your search criteria"
                      : "There are no users registered yet"}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Dialogs */}
          <Dialog
            open={confirmAdminDialog}
            onOpenChange={setConfirmAdminDialog}
          >
            <DialogContent className="bg-[#1e293b] text-white border border-[#334155]">
              <DialogHeader>
                <DialogTitle>Confirm Admin Privileges</DialogTitle>
                <DialogDescription className="text-gray-400">
                  Are you sure you want to give admin privileges to{" "}
                  {userToPromote?.name || userToPromote?.email}? Admin users can
                  manage all aspects of the dealership.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setConfirmAdminDialog(false)}
                  disabled={updatingRole}
                  className="border border-gray-500 text-gray-300"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleMakeAdmin}
                  disabled={updatingRole}
                  className="bg-blue-700 hover:bg-blue-800 text-white"
                >
                  {updatingRole ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Confirming...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Confirm
                    </>
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog
            open={confirmRemoveDialog}
            onOpenChange={setConfirmRemoveDialog}
          >
            <DialogContent className="bg-[#1e293b] text-white border border-[#334155]">
              <DialogHeader>
                <DialogTitle>Remove Admin Privileges</DialogTitle>
                <DialogDescription className="text-gray-400">
                  Are you sure you want to remove admin privileges from{" "}
                  {userToDemote?.name || userToDemote?.email}? They will no
                  longer be able to access the admin dashboard.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setConfirmRemoveDialog(false)}
                  disabled={updatingRole}
                  className="border border-gray-500 text-gray-300"
                >
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={handleRemoveAdmin}
                  disabled={updatingRole}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  {updatingRole ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Removing...
                    </>
                  ) : (
                    "Remove Admin"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </TabsContent>
      </Tabs>
    </div>
  );
};
