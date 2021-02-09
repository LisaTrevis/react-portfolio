import React from "react";
import headShot from "../images/HeadShot.jpeg";
import { useGlobalContext } from "../context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-images">
          <img src={headShot} className="headshot-img" alt="head shot" />
        </article>
        <article className="hero-info">
          <h1>Welcome</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, nulla
            perferendis ullam enim, est libero incidunt pariatur neque culpa
            sapiente iusto esse quam, non odio similique tenetur illo repellat!
            Ipsum quia at saepe, facere voluptatibus incidunt cum sed inventore
            earum.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Hero;
