import React from "react";
import "../Team/Team.scss";

const Team = () => {
  return (
    <div className="teamss">
      <div className="team">
        <h1>Meet Our Team</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy
          eirmod tempor invidunt. Cryptocash
        </p>
      </div>
      <div className="team__common">
        <div className="team__card">
          <div className="team__card__image">
            <img
              src="https://preview.uideck.com/items/crypto/assets/img/xteam-1.png.pagespeed.ic.lO6xCQyrtP.webp"
              alt=""
            />
            <div className="team__card__image__text">
              <h4>Mishel Don</h4>
              <p>CEO</p>
            </div>
          </div>
        </div>

        <div className="team__card">
          <div className="team__card__image">
            <img
              src="https://preview.uideck.com/items/crypto/assets/img/xteam-4.png.pagespeed.ic.rcd1cVfNnF.webp"
              alt=""
            />
            <div className="team__card__image__text">
              <h4>Mishel Don</h4>
              <p>CEO</p>
            </div>
          </div>
        </div>
        <div className="team__card">
          <div className="team__card__image">
            <img
              src="https://preview.uideck.com/items/crypto/assets/img/xteam-3.png.pagespeed.ic.Bnok3RBTPD.webp"
              alt=""
            />
            <div className="team__card__image__text">
              <h4>Mishel Don</h4>
              <p>CEO</p>
            </div>
          </div>
        </div>
        <div className="team__card">
          <div className="team__card__image">
            <img
              src="https://preview.uideck.com/items/crypto/assets/img/xteam-2.png.pagespeed.ic.siPq8dm3Ec.webp"
              alt=""
            />
            <div className="team__card__image__text">
              <h4>Mishel Don</h4>
              <p>CEO</p>
            </div>
          </div>
        </div>
      </div>

  <div className="team__wacth">
<div className="team__wacth__part1">
  <img src="https://preview.uideck.com/items/crypto/assets/img/countdown-img.svg" alt="" />
</div>
<div className="team__part2">

  <h1>Smart and Secure Way to Invest in Crypto
</h1>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.

</p>
<button>Buy Token Now</button>
</div>
</div>

    </div>
  );
};

export default Team;
