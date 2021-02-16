import React from "react";
import headShot from "../images/Headshot.png";
import { useGlobalContext } from "../context";
import { FaInstagram, FaTwitter, FaAngleRight } from "react-icons/fa";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="section hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-image">
          <img src={headShot} className="headshot-img" alt="head shot" />
        </article>
        <article className="hero-info">
          <div className="hero-tagline">
            <FaAngleRight className="hero-icon" />
            <h2>
              Web <span>Developer</span>
            </h2>
          </div>
          <div className="hero-tagline">
            <FaAngleRight className="hero-icon" />
            <h2>
              Problem <span>Solver</span>
            </h2>
          </div>
          <div className="hero-tagline">
            <FaAngleRight className="hero-icon" />
            <h2>
              Creative <span>Designer</span>
            </h2>
          </div>
        </article>
      </div>
      <div className="footer">
        <p>Copyright &#169; 2021 Lisa Trevis. All rights reserved.</p>
        <div className="pixel">
          <p>Logo pixel art by Glenn Brooks</p>
          <a href="https://www.instagram.com/terderrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://twitter.com/terderrer">
            <FaTwitter className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
