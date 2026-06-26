import { services } from "../data/service";

export default function Services() {
  return (
    <section id="services" className="py-4 px-4 bg-salon-background">
      <h2 className="text-2xl font-bold text-center text-salon-primary mb-8">
        บริการของเรา
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-3 lg:grid-cols-6 gap-4">
        {services.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-3 p-4">
            <div className="p-3 rounded-full bg-salon-accent/10">
              <Icon size={28} className="text-salon-accent" />
            </div>
            <span className="text-sm font-medium text-salon-secondary text-center">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
