const stylists = [
  {
    id: 1,
    name: "คุณเกศ",
    role: "ช่างผู้จัดการ",
    specialty: "ทำสี, ยืดผม",
    src: "/mock-stylist-1.png",
  },
  {
    id: 2,
    name: "คุณต้น",
    role: "ช่างผู้จัดการ",
    specialty: "ตัดผมชาย, ทำสี",
    src: "/mock-stylist-2.png",
  },
  {
    id: 3,
    name: "คุณม็อก",
    role: "ช่างตัดผม",
    specialty: "ตัดผมชาย, ดัดผม",
    src: "/mock-stylist-3.png",
  },
  {
    id: 4,
    name: "คุณจิ๊บ",
    role: "ช่างทำสี",
    specialty: "ทำสีผม, ทรีทเม้นท์",
    src: "/mock-stylist-4.png",
  },
];

export default function StylistsPreview() {
  return (
    <section className="py-4 px-4 bg-salon-background">
      <h2 className="text-2xl font-bold text-center text-salon-primary mb-8">
        ช่างของเรา
      </h2>

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
