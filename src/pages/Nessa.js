import React from "react";
import { useGlobalContext } from "../context";
import Nessa_Closeup from "../images/Nessa_Closeup.jpg";
import Nessa_Blankets from "../images/Nessa_Blankets.jpg";
import Nessa_Flowers from "../images/Nessa_Flowers.jpg";

const Nessa = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div className="section nessa-page" onMouseOver={closeSubmenu}>
      <div className="section-title">
        <h2>Nessa</h2>
      </div>
      <div className="nessa-img-container">
        <img src={Nessa_Closeup} alt="Nessa Closeup" />
        <img src={Nessa_Blankets} alt="Nessa Blankets" />
        <img src={Nessa_Flowers} alt="Nessa Flowers" />
      </div>
      <p>
        I adopted Nessa through{" "}
        <a href="https://www.mwcr.org" rel="noreferrer" target="_blank">
          Minnesota Wisconsin Collie Rescue
        </a>{" "}
        in July of 2011. She had spent her first few years of life in a kennel
        as part of a puppy mill operation. When the man running the mill decided
        to close it down, MWCR stepped up and found homes for all of the dogs.
      </p>
      <p>
        Because of her background, it took Nessa quite a few years to learn how
        to be a dog, but everyone who meets her falls in love with her thanks to
        her kind, sweet, and gentle personality.
      </p>
      <p>
        In her younger days, Nessa loved to chase away any crows who were brave
        enough to visit our yard. Nowadays, she spends most of her time napping
        with only a warning bark for those cheeky crows.
      </p>
    </div>
  );
};

export default Nessa;
