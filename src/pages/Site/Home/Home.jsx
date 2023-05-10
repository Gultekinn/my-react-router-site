import React from "react";
import "../Home/Home.scss";
const Home = () => {
  return (
    <div className="common">
      <div className="homes">
        <div className="homes__card__one">
          <h1>Trade and Invest on Crypto Using Our Platform</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            dianonumy eirmod tempor invidunt ut labore .
          </p>
          <button>Register Now</button>
        </div>

        <div className="homes__card__two">
          <img
            src="https://preview.uideck.com/items/crypto/assets/img/hero-img.svg"
            alt=""
          />
        </div>
      </div>

      <div className="text">
        <h1>Our Specialities</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy
          eirmod tempor invidunt ut labore .
        </p>
      </div>
      <div className="main">
        <div className="main__div1">
          <img
            src="https://preview.uideck.com/items/crypto/assets/img/feature-1.svg"
            alt=""
          />
          <h3>Buy Your Crypto</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            dianonumy eirmod tempor invidunt ut labore .
          </p>
        </div>
        <div className="main__div2">
          <img
            src="https://preview.uideck.com/items/crypto/assets/img/feature-2.svg"
            alt=""
          />
          <h3>Sell Instantly</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            dianonumy eirmod tempor invidunt ut labore .
          </p>
        </div>
        <div className="main__div3">
          <img
            src="https://preview.uideck.com/items/crypto/assets/img/feature-3.svg"
            alt=""
          />
          <h3>Invest for Longterm</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore .

</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
