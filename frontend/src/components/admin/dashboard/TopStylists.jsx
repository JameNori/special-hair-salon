import {
  topStylists,
  rankIcon,
  rankBarColor,
} from "../../../data/mockStylists";
const maxRevenue = Math.max(...topStylists.map((s) => s.revenue));

export default function TopStylists() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-salon-primary">ช่างทำรายได้สูงสุด</h2>
        <button className="text-sm text-salon-accent hover:underline">
          ดูทั้งหมด →
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {topStylists.map((stylist) => (
          <div key={stylist.rank} className="flex items-center gap-3">
            <span className="text-lg w-6 text-center">
              {rankIcon[stylist.rank]}
            </span>
            <div className="w-9 h-9 shrink-0 rounded-full overflow-hidden bg-salon-secondary/20">
              <img
                src={stylist.src}
                alt={stylist.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-salon-primary">
                  {stylist.name}
                </span>
                <span className="text-sm text-salon-primary">
                  ฿{stylist.revenue.toLocaleString()}
                </span>
              </div>
              <div className="w-full h-1.5 bg-salon-secondary/20 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${rankBarColor[stylist.rank]}`}
                  style={{ width: `${(stylist.revenue / maxRevenue) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
