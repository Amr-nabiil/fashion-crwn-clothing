import React from 'react';
import './about-app.styles.scss'; // Import your SCSS file (assuming it's named AboutApp.scss)
import videoAbout from '../../video/videoabout.mp4'; // Update the path to your video

const AboutApp = () => {
  return (
    <section id="about-app" className="section-p1">
      <h1>Download Our <a href="#">App</a></h1>
      <div className="video">
        <video autoPlay muted loop src={videoAbout}></video>
      </div>
    </section>
  );
};

export default AboutApp;
