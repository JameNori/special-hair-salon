import { Calendar, Users, Scissors, Wallet } from "lucide-react";
export const stats = [
  {
    icon: Calendar,
    label: "นัดหมายวันนี้",
    value: 18,
    unit: "คิว",
    trend: 1,
    trendLabel: "3 คิว จากเมื่อวาน",
    iconBg: "bg-salon-accent/10",
  },
  {
    icon: Users,
    label: "ลูกค้าอยู่",
    value: 3,
    unit: "คน",
    trend: 0,
    trendLabel: "เท่ากับเมื่อวาน",
    iconBg: "bg-orange-100",
  },
  {
    icon: Scissors,
    label: "ช่างกำลังให้บริการ",
    value: 2,
    unit: "คน",
    trend: 1,
    trendLabel: "1 คน จากเมื่อวาน",
    iconBg: "bg-green-100",
  },
  {
    icon: Wallet,
    label: "รายได้วันนี้",
    value: "12,450",
    unit: "฿",
    trend: 1,
    trendLabel: "18% จากเมื่อวาน",
    iconBg: "bg-amber-100",
  },
];
