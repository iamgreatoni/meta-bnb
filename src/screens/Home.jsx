import React from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Meta from '../components/Meta/Meta';
import Place from '../components/Place/Place';
import SocialCard from '../components/SocialCard/SocialCard';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <SocialCard />
      <Place />
      <Meta />
      <Footer />
    </>
  );
};

export default Home;
