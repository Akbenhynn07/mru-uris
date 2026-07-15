import { useState, useEffect, useCallback } from 'react';
import ConstellationBg from './components/ConstellationBg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Leadership from './components/Leadership';
import Coordinators from './components/Coordinators';
import OpenRoles from './components/OpenRoles';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ApplyModal from './components/ApplyModal';

export default function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const handleZoomStart = useCallback(() => {
    setAnimationStarted(true);
  }, []);

  const handleDone = useCallback(() => {
    setSplashDone(true);
  }, []);

  const handleOpenApply = useCallback(() => {
    setIsApplyOpen(true);
  }, []);

  const handleCloseApply = useCallback(() => {
    setIsApplyOpen(false);
  }, []);

  // Lock scroll while splash is showing
  useEffect(() => {
    if (!splashDone) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [splashDone]);

  return (
    <div className="relative min-h-screen bg-[#0a0a0d] text-white font-poppins overflow-x-hidden">
      {/* Splash overlay — sits above everything until dismissed */}
      {!splashDone && (
        <SplashScreen 
          onZoomStart={handleZoomStart} 
          onDone={handleDone} 
        />
      )}

      {/* Embedded application modal overlay */}
      <ApplyModal isOpen={isApplyOpen} onClose={handleCloseApply} />

      {/* Fixed constellation background */}
      <ConstellationBg />

      {/* Sticky navbar */}
      <Navbar onApply={handleOpenApply} />

      {/* Main content */}
      <main className="relative z-10">
        <Hero startAnimation={animationStarted} />
        <About />
        <Leadership />
        <Coordinators />
        <OpenRoles onApply={handleOpenApply} />
        <Timeline />
        <Footer onApply={handleOpenApply} />
      </main>
    </div>
  );
}

