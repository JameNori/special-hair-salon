import DateTimeDisplay from "../../components/admin/dashboard/DateTimeDisplay";
import StatCard from "../../components/admin/dashboard/StatCard";
import AppointmentTable from "../../components/admin/dashboard/AppointmentTable";
import RevenueChart from "../../components/admin/dashboard/RevenueChart";
import TopStylists from "../../components/admin/dashboard/TopStylists";
import QuickActions from "../../components/admin/dashboard/QuickActions";
import { stats } from "../../data/mockStats";
import { getGreeting } from "../../utils/greeting";

export default function AdminDashboard() {
  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-salon-primary">
            {getGreeting()}, ผู้ดูแลระบบ
          </h1>
          <p className="text-sm text-salon-secondary mt-1">
            ยินดีต้อนรับเข้าสู่ระบบจัดการร้าน Special Hair Salon
          </p>
        </div>
        <div className="hidden sm:block">
          <DateTimeDisplay />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AppointmentTable />
        <div className="flex flex-col gap-6">
          <RevenueChart />
          <TopStylists />
        </div>
      </div>
      <QuickActions />
    </div>
  );
}
