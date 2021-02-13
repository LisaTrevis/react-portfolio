import React from "react";
import headShot from "../images/2021_Profile.jpg";
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
            solution driven problem solver, figure out a solution independently,
            flexibile, adaptable, good communicator, team player, leader AND
            follower, learner and mentor, strong work ethic, fun to work with,
            respectful of deadlines, innovative, multiple ways to solve
            problems, honest, flexbox
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
