import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { SpecialOffers } from './components/SpecialOffers';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { TrustBadges } from './components/TrustBadges';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Benefits />
        {/* <Testimonials /> */}
        <SpecialOffers />
        <FAQ />
        <Contact />
        <TrustBadges />
      </main>
      <Footer />
    </div>
  );
}

export default App;