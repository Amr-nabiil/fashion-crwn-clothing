import React from 'react';
import './feature.styles.scss';

import f1 from '../../img/f1.png';
import f2 from '../../img/f2.png';
import f3 from '../../img/f3.png';
import f4 from '../../img/f4.png';
import f5 from '../../img/f5.png';
import f6 from '../../img/f6.png';

const features = [
  { imgSrc: f1, title: 'Free Shipping' },
  { imgSrc: f2, title: 'Online Order' },
  { imgSrc: f3, title: 'Save Money' },
  { imgSrc: f4, title: 'Promotions' },
  { imgSrc: f5, title: 'Happy Sell' },
  { imgSrc: f6, title: 'F24/7 Support' },
];

const Feature = () => {
  return (
    <section id="feature" className="section-p1">
      {features.map((feature, index) => (
        <div className="fe-box" key={index}>
          <img src={feature.imgSrc} alt={feature.title} />
          <h6>{feature.title}</h6>
        </div>
      ))}
    </section>
  );
};

export default Feature;
