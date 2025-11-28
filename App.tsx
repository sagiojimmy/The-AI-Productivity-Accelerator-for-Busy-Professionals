import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { Modules } from './components/Modules';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { OfferDetails } from './components/OfferDetails';
import { FAQ } from './components/FAQ';
import { Closing } from './components/Closing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-serif antialiased selection:bg-yellow-200">
      <div className="max-w-[800px] mx-auto px-6 py-12 md:py-20 space-y-16">
        <Hero />
        <PainPoints />
        <Solution />
        <Modules />
        <Pricing />
        <Testimonials />
        <OfferDetails />
        <FAQ />
        <Closing />
        <Footer />
      </div>
    </div>
  );
};

export default App;