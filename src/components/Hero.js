import React from "react";
import headShot from "../images/Headshot.png";
import { useGlobalContext } from "../context";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="section hero" onMouseOver={closeSubmenu}>
      <div className="section-title">
        <h1>Welcome</h1>
      </div>
      <div className="hero-center">
        <article className="hero-image">
          <img src={headShot} className="headshot-img" alt="head shot" />
        </article>
        <article className="hero-info">
          <p>
            Solution driven problem solver. Loves learning and teaching equally.
            Strong work ethic with an honest and friendly communication style.
            Creative and innovative team player. Flexible roup leader respectful
            of deadlines, flexible, and
          </p>
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
