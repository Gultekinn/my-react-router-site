import React from "react";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer__card1">
          <img
            src="https://preview.uideck.com/items/crypto/assets/img/logo.svg"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            dianonumy eirmod tempor invidunt ut labore.
          </p>
          <div className="iconss">
            <div className="icon1">
              <FacebookIcon />
            </div>
            <div className="icon1">
              <TwitterIcon />
            </div>
            <div className="icon1">
              <LinkedInIcon />
            </div>
            <div className="icon1">
              <InstagramIcon />
            </div>
          </div>
        </div>

        <div className="footer__card2">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer__card3">
          <h3>About</h3>
          <ul>
            <li>Documentation</li>
            <li>IOS&Android aps</li>
            <li>Privacy Policy</li>
            <li>Support form</li>
            <li>Terms condition</li>
          </ul>
        </div>

        <div className="footer__card4">
          <h3>Resource</h3>
          <ul>
            <li>Company No: C5B345</li>
            <li>CSINE GROUP LTD.</li>
            <li>Address: M-321 Volunt Ave,</li>
            <li>Staten Islandm, NY 201526</li>
          </ul>
        </div>
      
      </div>   
      <div className="hr">      <h4>Designed and Developed By UIdeck</h4>
</div>

    </div>
  );
};

export default Footer;
