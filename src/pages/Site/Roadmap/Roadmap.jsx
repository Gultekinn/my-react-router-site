import React from "react";
import "../Roadmap/Roadmap.scss";
const Roadmap = () => {
  return (
    <div className="customss">
      <div className="road">
        <div className="road__text">
          <h1>Road Map</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            dianonumy eirmod tempor invidunt ut labore.
          </p>
        </div>
        <div className="road__common">
          <div className="road__card">
            <h3>January 2023</h3>
            <p>Exchange Bitcontent to Bitcoin</p>
          </div>
          <div className="road__card">
            <h3>March 2023</h3>
            <p>Exchange Bitcontent to Bitcoin</p>
          </div>

          <div className="road__card">
            <h3>Juny 2023</h3>
            <p>Exchange Bitcontent to Bitcoin</p>
          </div>

          <div className="road__card">
            <h3>Octomber 2023</h3>
            <p>Exchange Bitcontent to Bitcoin</p>
          </div>
          <div className="road__card">
            <h3>November2023</h3>
            <p>Exchange Bitcontent to Bitcoin</p>
          </div>
        </div>
      </div>

      <div className="roadmap">
        <div className="roadmap__img">
          <img
            src="https://preview.uideck.com/items/crypto/assets/img/xgrows-img.png.pagespeed.ic.yU8OxFjVMU.webp"
            alt=""
          />
        </div>
        <div className="roadmap__text">
          <h1>Great Effeciency Like Never Before</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            dianonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor
            invidunt ut labore.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            dianonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor
            invidunt ut labore.
          </p>
          <button>Download History</button>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
