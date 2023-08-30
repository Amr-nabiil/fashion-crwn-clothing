import React from 'react';

import Directory from '../../components/directory/directory.component';
import Feature from '../../components/features/feature.component';
import Footer from '../../components/footer/footer.component'; 
import Banner from '../../components/banners/banner.component';
import HeroSection from '../../components/banners/hero-sec.component';
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <HeroSection />
    <Feature />
    <Directory  />
    <Banner />
    <Footer /> {/* Include the Footer component */}
  </div>
);



export default HomePage;