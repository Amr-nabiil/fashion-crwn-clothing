import React from 'react';
import AboutHeader from '../../components/pageheader/about-header.component';
import AboutSection from '../../components/about-sec/about-sec.component';
import AboutApp from '../../components/about-app/about-app.component';
import Footer from '../../components/footer/footer.component'; 
import './about-us.styles.scss';

const AboutPage = () => (
  <div className='aboutpage'>
    
    <AboutHeader />
    <AboutSection />
    <AboutApp />
   
    <Footer /> {/* Include the Footer component */}
  </div>
);



export default AboutPage;