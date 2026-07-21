import { Calendar, Users, Scissors, Image, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  { label: "เพิ่มนัดหมาย", icon: Calendar, path: "/admin/appointments/new" },
  { label: "เพิ่มลูกค้า", icon: UserCircle, path: "/admin/customers/new" },
  { label: "เพิ่มบริการ", icon: Scissors, path: "/admin/services/new" },
  { label: "เพิ่มผลงาน", icon: Image, path: "/admin/gallery/new" },
  { label: "เพิ่มช่าง", icon: Users, path: "/admin/stylists/new" },
];

export default function QuickActions() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-salon-primary">เมนูลัด</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {actions.map(({ label, icon: Icon, path }) => (
          <Link
            key={path}
            to={path}
            className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between gap-2 hover:bg-salon-secondary/5 transition-colors group"
          >
            <div className="flex items-center gap-2">
              <Icon size={18} className="text-salon-accent shrink-0" />
              <span className="text-sm text-salon-primary">{label}</span>
            </div>
            <span className="text-salon-secondary group-hover:text-salon-accent transition-colors">
              ›
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
