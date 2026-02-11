import React from "react";

const AboutUs = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="Travel"
            className="img1"
          />

          <img
            src="./assets/sideimage.jfif"
            alt="about-image"
            className="img2"
          ></img>
        </div>

        <div className="about-content">
          <h2>About GlobeYatra</h2>
          <p>
            GlobeYatra is a trusted world tourism platform dedicated to creating
            unforgettable travel experiences. We specialize in luxury,
            adventure, and cultural tours across India and international
            destinations.
          </p>

          <p>
            Our mission is to provide affordable, comfortable and well-planned
            travel packages with complete customer satisfaction.
          </p>

          <div className="about-highlights">
            <div>
              <h3>500+</h3>
              <span>Happy Travelers</span>
            </div>

            <div>
              <h3>120+</h3>
              <span>Destinations</span>
            </div>

            <div>
              <h3>5 Years</h3>
              <span>Experience</span>
            </div>
          </div>

          <button className="about-btn">Explore More</button>
        </div>
      </div>
    </section>

  );
};

export default AboutUs;
