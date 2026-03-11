import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services, { FeaturedCommercialCard } from "./components/Services";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCommercialCard />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
