import { stylists } from "../data/stylists";
import SectionHeading from "@/components/ui/SectionHeading";

export default function StylistsPreview() {
  return (
    <section id="stylists" className="py-4 px-4 bg-salon-background">
      <SectionHeading>ช่างของเรา</SectionHeading>

      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stylists.map((stylist) => (
          <div
            key={stylist.id}
            className="flex flex-col items-center gap-3 text-center"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden bg-salon-secondary/20">
              <img
                src={stylist.src}
                alt={stylist.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-bold text-salon-primary">
                {stylist.name}
              </span>
              <span className="text-sm text-salon-secondary">
                {stylist.role}
              </span>
              <span className="text-xs text-salon-secondary/70">
                เชี่ยวชาญ: {stylist.specialty}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
