import React from 'react';
import Features from '../../components/featuresComponent/Features';
import Footer from '../../components/footerComponent/Footer';
import HeroBanner from '../../components/heroComponent/HeroBanner';

function LandingPage() {
  return (
    <>
      <HeroBanner />
      <Features />
      <Footer />
    </>
  );
}

export default LandingPage;
