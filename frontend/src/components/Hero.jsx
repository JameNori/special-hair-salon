import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section id="appointment">
      {/* Mobile layout */}
      <div className="md:hidden relative">
        <img
          src="/hero-image-portrait.png"
          alt="ทรงผมตัวอย่างจาก Special Hair Salon"
          className="w-full max-h-[750px] object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-salon-background/90 via-salon-background/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-start pt-10 px-6">
          <p className="text-sm text-salon-accent font-medium mb-2">
            ใส่ใจทุกทรงผม ใส่ใจทุกคน
          </p>
          <h1 className="text-3xl font-bold text-salon-primary mb-3 leading-tight">
            Special
            <br />
            Hair Salon
          </h1>
          <p className="text-sm text-salon-secondary mb-6">
            ตัด สไตล์ และดูแลเส้นผม โดยทีมช่างมืออาชีพ เพราะผมที่ดี
            เริ่มจากการดูแลที่เข้าใจคุณ
          </p>
          <div className="flex gap-3">
            <a href="#appointment">
              <Button className="bg-salon-accent text-salon-accent-foreground hover:bg-salon-accent/90">
                จองคิวเลย
              </Button>
            </a>
            <a href="#gallery">
              <Button
                variant="outline"
                className="border-salon-accent text-salon-accent hover:bg-salon-accent hover:text-salon-accent-foreground"
              >
                ดูผลงานของเรา
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop layout — full-bleed background */}
      <div className="hidden md:block relative h-[600px] overflow-hidden">
        <img
          src="/hero-image-landscape.png"
          alt="ทรงผมตัวอย่างจาก Special Hair Salon"
          className="w-full h-full object-cover object-top"
        />

        <div className="absolute inset-0 flex flex-col justify-center px-16 max-w-lg">
          <p className="text-sm text-salon-accent font-medium mb-2">
            ใส่ใจทุกทรงผม ใส่ใจทุกคน
          </p>
          <h1 className="text-5xl font-bold text-salon-primary mb-3 leading-tight">
            Special
            <br />
            Hair Salon
          </h1>
          <p className="text-base text-salon-secondary mb-6">
            ตัด สไตล์ และดูแลเส้นผม โดยทีมช่างมืออาชีพ เพราะผมที่ดี
            เริ่มจากการดูแลที่เข้าใจคุณ
          </p>
          <div className="flex gap-3">
            <a href="#appointment">
              <Button className="bg-salon-accent text-salon-accent-foreground hover:bg-salon-accent/90">
                จองคิวเลย
              </Button>
            </a>
            <a href="#gallery">
              <Button
                variant="outline"
                className="border-salon-accent text-salon-accent hover:bg-salon-accent hover:text-salon-accent-foreground"
              >
                ดูผลงานของเรา
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
