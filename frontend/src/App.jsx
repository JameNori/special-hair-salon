import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import GalleryPreview from "./components/GalleryPreview";
import StylistsPreview from "./components/StylistsPreview";
import Footer from "./components/Footer";

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
