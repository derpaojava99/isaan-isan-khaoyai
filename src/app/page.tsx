import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import BookingBar from "@/components/BookingBar";
import About from "@/components/About";
import Villas from "@/components/Villas";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <BookingBar />
        <About />
        <Villas />
        <Facilities />
        <Gallery />
        <MapSection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
