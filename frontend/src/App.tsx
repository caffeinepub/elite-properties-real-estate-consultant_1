import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services, { FeaturedCommercialCard } from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
