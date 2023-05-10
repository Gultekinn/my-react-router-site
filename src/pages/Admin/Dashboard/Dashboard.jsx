import React from "react";
import "../Dashboard/Dashboard.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import AutoFixOffIcon from "@mui/icons-material/AutoFixOff";
import FolderIcon from "@mui/icons-material/Folder";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SearchIcon from "@mui/icons-material/Search";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import Coin from "./Coin";
const Dashboard = () => {
  return (
    <div>
      <Coin/>
      <div className="dashboard">
        <div className="dashboard__navbar1">
          <h4>
            <DashboardIcon />
            Dahboard
          </h4>
          <ul>
            <li>
              
              <SettingsIcon />
              Components
            </li>
            <li>
              <AutoFixOffIcon />
              Utilities
            </li>
            <li>
              <FolderIcon />
              Pages
            </li>
            <li>
              <AutoGraphIcon />
              Charts
            </li>
            <li>
              <BackupTableIcon />
              Tables
            </li>
          </ul>
          <div className="dashboard__navbar1__image">
            <img
              src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_rocket.svg"
              alt=""
            />
            <p>
              SB Admin Pro is packed with premium features, components, and more
            </p>
            <button>Upgrade</button>
          </div>
        </div>
        <div className="dashboard__navbar2">
          <input type="text" placeholder="searc for.." />
          <SearchIcon className="searchicn" />
          <div className="divicons">
            <PermPhoneMsgIcon /> <MarkEmailUnreadIcon />
          </div>
        </div>
        </div>


    

        {/* <div className="header__image">

           <img
            src="https://media.inviso.dk/2017-04-24/medium/Sk%C3%A6rmbillede%202017-04-24%20kl.%2011.25.53%20%281%29.png"
            alt=""
          />
          <img className="images" src="https://intercax.com/wp-content/uploads/2020/04/41.png" alt="" />
          <img className="imagess2" src="https://blog.yeeflow.com/wp-content/uploads/sites/2/2021/04/yeeflow-RAD-tools-1536x686.jpg" alt="" />
          </div>
         
        */}
     
    </div>
  );
};

export default Dashboard;
