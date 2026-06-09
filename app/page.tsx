import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Amenities from "@/components/sections/Amenities/Amenities";
import Gallery from "@/components/sections/Gallery/Gallery";
import FAQ from "@/components/sections/FAQ/FAQ";
import ContactCTA from "@/components/sections/ContactCTA/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Amenities />
        <Gallery />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
