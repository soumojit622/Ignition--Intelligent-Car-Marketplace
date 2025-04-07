import { getDashboardData } from "@/actions/admin";
import { Dashboard } from "./_components/dashboard";

// ⬇️ Add this line to force dynamic rendering
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Dashboard | Ignition Admin",
  description: "Admin dashboard for Ignition car marketplace",
};

export default async function AdminDashboardPage() {
  // Fetch dashboard data
  const dashboardData = await getDashboardData();

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <Dashboard initialData={dashboardData} />
    </div>
  );
}
