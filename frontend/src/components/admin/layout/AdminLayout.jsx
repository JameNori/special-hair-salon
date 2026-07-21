import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-salon-background">
      <AdminSidebar />
      <main className="flex-1 lg:ml-0 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
