import { ArrowUp, ArrowDown, Minus } from "lucide-react";

export default function StatCard({
  icon: Icon,
  label,
  value,
  unit,
  trend,
  trendLabel,
  iconBg,
}) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-sm">
      <div className="flex items-center gap-3">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBg}`}
        >
          <Icon size={22} className="text-salon-accent" />
        </div>
        <span className="text-sm text-salon-secondary">{label}</span>
      </div>
      <div className="flex items-end gap-1">
        <span className="text-3xl font-bold text-salon-primary">{value}</span>
        {unit && (
          <span className="text-sm text-salon-secondary mb-1">{unit}</span>
        )}
      </div>
      <div className="flex items-center gap-1 text-xs">
        {trend > 0 && <ArrowUp size={12} className="text-green-500" />}
        {trend < 0 && <ArrowDown size={12} className="text-red-500" />}
        {trend === 0 && <Minus size={12} className="text-salon-secondary" />}
        <span
          className={
            trend > 0
              ? "text-green-500"
              : trend < 0
                ? "text-red-500"
                : "text-salon-secondary"
          }
        >
          {trendLabel}
        </span>
      </div>
    </div>
  );
}
