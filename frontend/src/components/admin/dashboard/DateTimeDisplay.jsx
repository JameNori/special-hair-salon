import { Calendar } from "lucide-react";
import { useCurrentTime } from "../../../hooks/useCurrentTime";

export default function DateTimeDisplay() {
  const { date, time } = useCurrentTime();

  return (
    <div>
      <div className="flex items-center gap-1.5">
        <Calendar size={14} className="text-salon-secondary shrink-0" />
        <p className="text-sm font-medium text-salon-primary">{date}</p>
      </div>
      <p className="text-xs text-salon-secondary pl-[22px]">{time}</p>
    </div>
  );
}
