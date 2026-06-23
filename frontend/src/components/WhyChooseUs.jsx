import { User, Scissors, Calendar, Droplets } from "lucide-react";

const features = [
  {
    icon: User,
    title: "ช่างมืออาชีพ",
    description: "ทีมช่างมากประสบการณ์ ใส่ใจทุกรายละเอียด",
  },
  {
    icon: Scissors,
    title: "ผลงานคุณภาพ",
    description: "มากกว่า 1,000 เคส ด้วยผลงานที่คุณไว้วางใจ",
  },
  {
    icon: Calendar,
    title: "จองคิวง่าย",
    description: "จองออนไลน์ได้ 24 ชม. สะดวก รวดเร็ว",
  },
  {
    icon: Droplets,
    title: "ผลิตภัณฑ์พรีเมียม",
    description: "คัดสรรผลิตภัณฑ์คุณภาพ เพื่อเส้นผมที่ดีที่สุด",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-salon-background border-t border-salon-secondary/20 px-4 py-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`flex flex-col lg:flex-row items-start lg:items-center gap-5 p-6
                ${index < 2 ? "border-b border-salon-secondary/20 lg:border-b-0" : ""}
                ${index % 2 === 0 ? "border-r border-salon-secondary/20" : ""}
                ${index !== features.length - 1 ? "lg:border-r lg:border-salon-secondary/20" : "lg:border-r-0"}
              `}
          >
            <feature.icon
              size={32}
              className="text-salon-accent shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-semibold text-salon-primary mb-1">
                {feature.title}
              </p>
              <p className="text-xs text-salon-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
