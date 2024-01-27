import React from "react";
import "../styles/HomePage.css";
import BriefcaseImage from "../Assets/Briefcase.png";
import StatBoard from "../Assets/StatBoard.png";
import Shutdown from "../Assets/Shutdown.png";
import sun from "../Assets/sun.png";
import Rectangle from "../Assets/Rectangle 10.png";
import GraphData from "../components/GraphData";
import PieChart from "../components/PieChart";
import TableData from "../components/TableData";
import ProfilePage from "../components/ProfilePage";
import CircledMenu from "../Assets/Circled Menu.png";
import Help from "../Assets/Help.png";
import Puzzle from "../Assets/Puzzle.png";
import Support from "../Assets/Support.png";

const HomePage = () => {
  return (
    <div className="Home-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <img src={BriefcaseImage} alt="briefcase" className="sidebar-image" />
          <img src={StatBoard} alt="stat-board" className="statboard" />
        </div>

        <div className="sidebar-links">
          <div>
            <img src={CircledMenu} alt="image1" />
            <a href="#Link1" data-text="Link 1">
              Link 1
            </a>
          </div>

          <div>
            <img src={Help} alt="image2" />
            <a href="#Link2" data-text="Link 2">
              Link 2
            </a>
          </div>

          <div>
            <img src={Puzzle} alt="image3" />
            <a href="#Link3" data-text="Link 3">
              Link 3
            </a>
          </div>

          <div>
            <img src={Support} alt="image4" />
            <a href="#Link4" data-text="Link 4">
              Link 4
            </a>
          </div>

        </div>

        <div className="sidebar-bottom">
          <a href="#Login" className="login-link">
            <img src={Shutdown} alt="login-btn" className="login-image" />
            Login
          </a>
        </div>
      </div>

      <div className="total-section">
        <div className="content-section">
          <div className="content-section1">
            <h3>Good Morning ! </h3>
            <img src={sun} alt="sun" />
          </div>

          <div className="content-section2">
            <div className="content-section-content">
              <h4>John Doe</h4>
              <p>johndoe@123</p>
            </div>

            <div className="content-img">
              <img src={Rectangle} alt="" />
            </div>
          </div>
        </div>
        <div className="graph-area">
          <div className="graph-container">
            <GraphData />
          </div>
          <div className="pie-chart">
            <PieChart />
          </div>
        </div>

        <div className="table-main-container">
          <div className="Table-home">
            <TableData />
          </div>

          <div className="profile">
            <ProfilePage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
