import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import CTABand from "./components/CTABand";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Industries />
      <Testimonials />
      <CTABand />
      <Contact />
      <Footer />
    </>
  );
}
