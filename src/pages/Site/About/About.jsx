import React from "react";
import "../About/About.scss"
const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about__div1">
          <img src="https://preview.uideck.com/items/crypto/assets/img/about-img.svg" alt="" />
        </div>
        <div className="about__div2">
          <h1>About Us</h1>
          <p>
            About Us Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed dianonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor
            invidunt ut labore. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            dianonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor
            invidunt ut labore.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
