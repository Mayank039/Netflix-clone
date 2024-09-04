import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import herro_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="hero">
          <img src={herro_banner} alt="" className="banner-img" />
          <div className="hero-caption">
            <img src={hero_title} alt="" className="caption-img" />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters,
            </p>
            <div className="hero-btns">
              <button className="btn"><img src={play_icon} alt=""/>Play</button>
              <button className="btn dark-btn"><img src={info_icon} alt=""/>More Info</button>
            </div>
            <TitleCards/>
          </div>
        </div>
        <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only On Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Topics For You"} category={"now_playing"}/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
