// Footer.js
import React from 'react';
import './footer.styles.scss';
// Import your images
import payAppImage from '../../img/pay-app.jpg';
import payPlayImage from '../../img/pay-play.jpg';
import payPayImage from '../../img/pay-pay.png';

const Footer = () => {
  return (
    <footer class="section-p1">
      <div class="col">
      <a href="#" id="" class="logo">Flair-Spot</a>
            <h4>Contact</h4>
            <p><strong>Address:</strong>Menoufia University</p>
            <p><strong>Phone:</strong>+994 51 324 14 95</p>
            <p><strong>Hours:</strong>10.00-18.00 Mon-Sat</p>
            <div class="follow">
                <h4>Follow us</h4>
                <div class="icon">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-pinterest-p"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
        </div>
        <div class="col">
            <h4>About </h4>
            <a href="#">About us</a>
            <a href="#">Contuct us</a>
            <a href="#" >Delivery Information</a>
            <a href="#" >Privacy Policy</a>
            <a href="#" >Terms & Conditions</a>
        </div>
        <div class="col install">
            <h4>Install App </h4>
            <p>From App Store or Google Play</p>
      <img src={payAppImage} className='row' alt="" />
      <img src={payPlayImage} className='row' alt="" />
      <p>Secured Payment Gateways</p>
      <img src={payPayImage} className='row'  alt="" />
        </div>
            <div class="copyright">
            <p>© 2023 Flair-Spot Clothing (Amr-Nabil). All Rights Reserved.</p>
        </div>

        

      </footer>
  );
};

export default Footer;
