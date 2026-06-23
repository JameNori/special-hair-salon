import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "หน้าหลัก", href: "#home" },
    { label: "ผลงาน", href: "#gallery" },
    { label: "ช่างของเรา", href: "#stylists" },
    { label: "บริการ", href: "#services" },
    { label: "จองคิว", href: "#appointment" },
  ];

  return (
    <nav className="border-b border-salon-secondary/30 bg-salon-background">
      <div className="flex justify-between items-center px-4 py-3 md:px-6 md:py-4">
        <span className="text-lg font-semibold text-salon-primary">
          Special Hair Salon
        </span>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6 text-sm text-salon-secondary">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-salon-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-salon-accent text-salon-accent-foreground hover:bg-salon-accent/90"
          >
            Login
          </Button>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-salon-primary"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm text-salon-secondary">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-salon-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button
            size="sm"
            className="w-full bg-salon-accent text-salon-accent-foreground hover:bg-salon-accent/90"
          >
            Login
          </Button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
