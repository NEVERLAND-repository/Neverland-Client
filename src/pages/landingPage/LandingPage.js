import React, { useEffect } from 'react';
import Features from '../../components/featuresComponent/Features';
import Footer from '../homePage/components/footerSection/Footer';
import HeroBanner from '../../components/heroComponent/HeroBanner';

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <HeroBanner />
      <Features />
      <Footer />
    </>
  );
}

export default LandingPage;
