import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Image,
  Users,
  UserCircle,
  CreditCard,
  BarChart2,
  Settings,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { useAuth } from "../../../hooks/useAuth";
import { useLogout } from "../../../hooks/useLogout";

const menuItems = [
  { label: "แดชบอร์ด", path: "/admin/dashboard", icon: LayoutDashboard },
  { label: "นัดหมาย", path: "/admin/appointments", icon: Calendar },
  { label: "ผลงาน", path: "/admin/gallery", icon: Image },
  { label: "ช่าง", path: "/admin/stylists", icon: Users },
  { label: "ลูกค้า", path: "/admin/customers", icon: UserCircle },
  { label: "การชำระเงิน", path: "/admin/payments", icon: CreditCard },
  { label: "รายงาน", path: "/admin/reports", icon: BarChart2 },
  { label: "ตั้งค่า", path: "/admin/settings", icon: Settings },
];

const roleLabels = {
  admin: "ผู้ดูแลระบบ",
  owner: "เจ้าของร้าน",
};

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, isLoading } = useAuth();
  const { logout } = useLogout();

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white/70  rounded-lg shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
      <aside
        className={`
        fixed top-0 left-0 h-screen w-60 bg-salon-background border-r border-salon-secondary/20
        flex flex-col z-40 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static
      `}
      >
        <div className="p-6 border-b border-salon-secondary/20 flex justify-center">
          <img
            src="/logo.svg"
            alt="Special Hair Salon"
            className="h-14 w-fit"
          />
        </div>

        <nav className="flex-1 py-4 overflow-y-auto">
          {menuItems.map(({ label, path, icon: Icon }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors
                  ${
                    isActive
                      ? "bg-salon-dark text-salon-dark-text font-medium"
                      : "text-salon-primary hover:bg-salon-secondary/10"
                  }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 p-4 border-t border-salon-secondary/20">
          {isLoading ? (
            <>
              <div className="w-8 h-8 shrink-0 rounded-full bg-salon-secondary/20 animate-pulse" />
              <div className="flex-1 flex flex-col gap-1">
                <div className="h-3 w-24 bg-salon-secondary/20 rounded animate-pulse" />
                <div className="h-2 w-16 bg-salon-secondary/20 rounded animate-pulse" />
              </div>
            </>
          ) : (
            <>
              <div className="w-8 h-8 shrink-0 rounded-full overflow-hidden bg-salon-secondary/20">
                <img
                  src={user?.profile_pic || "/default-avatar.png"}
                  alt="Admin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-salon-primary truncate">
                  {user?.name || "Admin"}
                </p>
                <p className="text-xs text-salon-secondary capitalize">
                  {roleLabels[user?.role] || user?.role || "ผู้ดูแลระบบ"}
                </p>
              </div>
              <button
                onClick={logout}
                className="text-sm text-salon-secondary hover:text-salon-secondary/80"
              >
                <LogOut size={18} />
              </button>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
