import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-salon-footer text-salon-footer-text">
      <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
        <img src="/logo-light.svg" alt="Special Hair Salon" className="h-12 lg:h-16 w-fit" />
          <p className="text-sm leading-relaxed">
            ใส่ใจทุกทรงผม ใส่ใจทุกคน ด้วยทีมช่างมืออาชีพและผลิตภัณฑ์คุณภาพ
            เพื่อเส้นผมที่สวยที่สุดของคุณ
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold">ติดต่อเรา</h3>
          <ul className="text-sm flex flex-col gap-2">
            <li>📞 02-123-4567</li>
            <li>💬 Line: @specialhairsalon</li>
            <li>
              📍 126 หมู่ที่ 3 ถนนสายเอเชีย ตำบลคลองสวนพลู อำเภอพระนครศรีอยุธยา
              จังหวัดพระนครศรีอยุธยา 13000
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold">เวลาเปิดทำการ</h3>
          <ul className="text-sm flex flex-col gap-2">
            <li className="flex gap-4">
              <span>จันทร์ – อาทิตย์</span>
              <span>10:00 – 20:00</span>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex flex-col gap-3">
        <h3 className="text-white font-bold">แผนที่</h3>
          <div className="rounded-xl overflow-hidden w-full h-40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d574.6221284195896!2d100.61082252761074!3d14.335724822361508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e275faffcebbfb%3A0xe91f72c7c80975c6!2z4Lit4Lii4Li44LiY4Lii4Liy4LiL4Li04LiV4Li14LmJ4Lie4Liy4Lij4LmM4LiE!5e0!3m2!1sth!2sth!4v1782121416070!5m2!1sth!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="lg:hidden">
        <h3 className="text-white font-bold">แผนที่</h3>
          <a
            href="https://maps.app.goo.gl/xeT5W9D9xFMVrQ8H9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-white transition-colors"
          >
            📍 ดูแผนที่ร้าน
          </a>
        </div>
      </div>

      <div className="border-t border-salon-footer-text/20 py-4 text-center text-xs">
        © 2026 Special Hair Salon. Designed with care.
      </div>
    </footer>
  );
}
