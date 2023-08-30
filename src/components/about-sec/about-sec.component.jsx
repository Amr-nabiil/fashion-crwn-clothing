import React from 'react';
import './about-sec.styles.scss'; // Import your SCSS file (assuming it's named AboutSection.scss)
import about6 from '../../img/about6.jpg'; // Update the path to your image

const AboutSection = () => {
  return (
    <section id="about-head" className="section-p1">
      <img src={about6} alt="" />
      <div>
        <h2>Who We Are?</h2>
        <p>
          Welcome to [Flair-Spot E-commerce Website] – your one-stop destination for all your shopping needs. We are passionate about providing our customers with a wide range of high-quality products at competitive prices.
        </p>
        <p>
          Our journey began with a simple idea: to create an online shopping platform that offers convenience, reliability, and exceptional customer service. Over the years, we have evolved into a trusted online marketplace that caters to the diverse needs and preferences of our valued customers.
        </p>
        <p>
          Discover the joy of shopping with us today!
        </p>
        <br /><br />
        <marquee
          background-color="#ccc"
          loop="-1"
          scrollamount="5"
          width="100%"
        >
          Thank you for choosing [Flair-Spot E-commerce Website] as your trusted shopping partner.
        </marquee>
      </div>
    </section>
  );
};

export default AboutSection;
