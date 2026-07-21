import { MoreVertical, Calendar } from "lucide-react";
import { appointments, statusStyle } from "../../../data/mockAppointments";

export default function AppointmentTable() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-salon-primary">นัดหมายวันนี้</h2>
        <button className="text-sm text-salon-accent hover:underline flex items-center gap-1">
          ดูทั้งหมด →
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-salon-secondary border-b border-salon-secondary/10">
              <th className="text-left py-2 font-medium">เวลา</th>
              <th className="text-left py-2 font-medium">ลูกค้า</th>
              <th className="text-left py-2 font-medium hidden md:table-cell">
                บริการ
              </th>
              <th className="text-left py-2 font-medium hidden md:table-cell">
                ช่าง
              </th>
              <th className="text-left py-2 font-medium">สถานะ</th>
              <th className="py-2" />
            </tr>
          </thead>
          <tbody>
            {appointments.map((apt) => (
              <tr
                key={apt.time}
                className="border-b border-salon-secondary/10 hover:bg-salon-background/50"
              >
                <td className="py-3 text-salon-accent font-medium">
                  {apt.time}
                </td>
                <td className="py-3 text-salon-primary">{apt.customer}</td>
                <td className="py-3 text-salon-secondary hidden md:table-cell">
                  {apt.service}
                </td>
                <td className="py-3 text-salon-secondary hidden md:table-cell">
                  {apt.stylist}
                </td>
                <td className="py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyle[apt.status]}`}
                  >
                    {apt.status}
                  </span>
                </td>
                <td className="py-3">
                  <button className="text-salon-secondary hover:text-salon-primary">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="w-full py-3 rounded-xl bg-salon-footer text-salon-footer-text text-sm font-medium flex items-center justify-center gap-2 hover:bg-salon-footer/90 transition-colors">
        <Calendar size={16} />
        เพิ่มนัดหมาย
      </button>
    </div>
  );
}
