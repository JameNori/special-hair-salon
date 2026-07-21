import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { data } from "../../../data/mockRevenue";

const total = data.reduce((sum, d) => sum + d.value, 0);

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-salon-primary">สรุปรายได้วันนี้</h2>
        <select className="text-xs border border-salon-secondary/30 rounded-lg px-2 py-1 text-salon-secondary outline-none">
          <option>วันนี้</option>
          <option>สัปดาห์นี้</option>
          <option>เดือนนี้</option>
        </select>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative w-40 h-40 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={65}
                paddingAngle={3}
                dataKey="value"
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`฿${value.toLocaleString()}`, ""]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs text-salon-secondary">ยอดรวม</span>
            <span className="text-sm font-bold text-salon-primary">
              ฿{total.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-fit">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-8"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-salon-secondary">
                  {item.name}
                </span>
              </div>
              <span className="text-xs font-medium text-salon-primary">
                ฿{item.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
      <button className="text-sm text-salon-accent hover:underline text-left">
        ดูรายงานทั้งหมด →
      </button>
    </div>
  );
}
