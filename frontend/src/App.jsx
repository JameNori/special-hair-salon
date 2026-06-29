import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Services from "./components/sections/Services";
import GalleryPreview from "./components/sections/GalleryPreview";
import StylistsPreview from "./components/sections/StylistsPreview";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <GalleryPreview />
      <StylistsPreview />
      <Footer />
    </div>
  );
}

export default App;
