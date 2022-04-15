import React from 'react';
import Features from '../../components/featuresComponent/Features';
import Footer from '../homePage/components/footerSection/Footer';
import HeroBanner from '../../components/heroComponent/HeroBanner';

const LandingPage = () => {
  return (
    <>
      <HeroBanner />
      <Features />
      <Footer />
    </>
  );
}

export default LandingPage;
