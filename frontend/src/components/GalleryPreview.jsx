import { useState } from "react";
import { mockImages } from "../data/gallery";

const tabs = ["ทั้งหมด", "ตัดผม", "ทำสีผม", "ดัดผม", "ยืดผม"];
const tabLabels = {
  ทั้งหมด: "ทั้งหมด",
  ตัดผม: "ตัดผม",
  ทำสีผม: "ทำสีผม",
  ดัดผม: "ดัดผม",
  ยืดผม: "ยืดผม",
};

export default function GalleryPreview() {
  const [activeTab, setActiveTab] = useState("ทั้งหมด");

  const filtered = mockImages.filter((img) =>
    activeTab === "ทั้งหมด" ? true : img.category === activeTab,
  );

  return (
    <section id="gallery" className="py-4 px-4 bg-salon-background">
      <h2 className="text-2xl font-bold text-center text-salon-primary mb-8">
        ผลงานของเรา
      </h2>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 flex-wrap mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors
                  ${
                    activeTab === tab
                      ? "bg-salon-accent text-salon-accent-foreground"
                      : "border border-salon-accent text-salon-accent hover:bg-salon-accent hover:text-salon-accent-foreground"
                  }`}
          >
            {tabLabels[tab]}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((img) => (
          <div
            key={img.id}
            className="aspect-square overflow-hidden rounded-xl"
          >
            <img
              src={img.src}
              alt={img.category}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
