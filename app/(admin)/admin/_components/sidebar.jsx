"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Car, Calendar, Cog, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { SignOutButton } from "@clerk/nextjs";

// Navigation items
const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
  },
  {
    label: "Cars",
    icon: Car,
    href: "/admin/cars",
  },
  {
    label: "Test Drives",
    icon: Calendar,
    href: "/admin/test-drives",
  },
  {
    label: "Settings",
    icon: Cog,
    href: "/admin/settings",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="h-screen flex flex-col md:flex-row">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex h-full flex-col overflow-y-auto shadow-sm border-r border-gray-200 dark:border-gray-700 w-64">
          <div className="p-6">
            <Link href="/admin">
              <h1 className="text-xl font-bold text-gradient">
                Ignition Admin
              </h1>
            </Link>
          </div>
          <div className="flex flex-col w-full flex-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-x-2 text-sm font-medium pl-6 transition-all h-12",
                  pathname === route.href
                    ? "text-blue-700 dark:text-blue-400 bg-blue-100/50 dark:bg-blue-950 hover:bg-blue-200 dark:hover:bg-blue-900"
                    : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/50 dark:hover:bg-gray-800"
                )}
              >
                <route.icon className="h-5 w-5" />
                {route.label}
              </Link>
            ))}
          </div>
          <div className="p-6 pb-30 flex justify-center">
            <SignOutButton>
              <button className="flex items-center cursor-pointer gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900 transition-all shadow-sm">
                <LogOut className="h-5 w-5" />
                <span className="font-semibold">Log out</span>
              </button>
            </SignOutButton>
          </div>
        </div>

        {/* Mobile Bottom Tabs */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex justify-around items-center h-16">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex flex-col items-center justify-center text-xs font-medium transition-all flex-1 py-1",
                pathname === route.href
                  ? "text-blue-700 dark:text-blue-400"
                  : "text-slate-500 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
              )}
            >
              <route.icon
                className={cn(
                  "h-6 w-6 mb-1",
                  pathname === route.href
                    ? "text-blue-700 dark:text-blue-400"
                    : "text-slate-500 dark:text-slate-300"
                )}
              />
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
