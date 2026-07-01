import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Therapies from "../components/Therapies";
import Scrubs from "../components/Scrubs";
import SpecialComboOffers from "../components/SpecialComboOffers";
import Membership from "../components/Membership";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Therapies />
      <Scrubs />
      <SpecialComboOffers />
      <Membership />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  );
}
