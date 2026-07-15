import ConstellationBg from './components/ConstellationBg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Leadership from './components/Leadership';
import Coordinators from './components/Coordinators';
import OpenRoles from './components/OpenRoles';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0d] text-white font-poppins overflow-x-hidden">
      {/* Fixed constellation background */}
      <ConstellationBg />

      {/* Sticky navbar */}
      <Navbar />

      {/* Main content — all sections above the background */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Leadership />
        <Coordinators />
        <OpenRoles />
        <Timeline />
        <Footer />
      </main>
    </div>
  );
}
