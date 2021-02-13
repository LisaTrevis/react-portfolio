import React from "react";
import { useGlobalContext } from "../context";
import Daisy_Car from "../images/Daisy_Car.jpg";
import Daisy_Sun from "../images/Daisy_Sun.jpg";
import Daisy_Lap from "../images/Daisy_Lap.jpg";

const Daisy = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div className="section daisy-page" onMouseOver={closeSubmenu}>
      <div className="section-title">
        <h2>Daisy</h2>
      </div>
      <div className="daisy-img-container">
        <img src={Daisy_Car} alt="Daisy Car" />
        <img src={Daisy_Sun} alt="Daisy Sun" />
        <img src={Daisy_Lap} alt="Daisy Lap" />
      </div>
      <p>
        I adopted Daisy through{" "}
        <a href="https://www.oaklandanimalservices.org">
          Oakland Animal Services
        </a>{" "}
        in June of 2020. I had gone there to look at a pittie named Sheba, but
        she was a bit too energetic for my other dog, Nessa. I was on my way out
        when one of the shelter volunteers asked if I would consider fostering a
        different pittie who wasn't doing well in the shelter environment. She
        was a stray off the street so they had no background info on her. They
        couldn't tell me much about her other than she was terrified -
        especially of men - and would go into "pancake" position when taken out
        of her kennel.
      </p>
      <p>
        I'd never fostered before because I get attached to animals very
        quickly. I even cry when pets I know only through social media pass over
        the rainbow bridge, despite never having met them in real life. But I'm
        a sucker for an underdog, so I agreed.
      </p>
      <p>
        Well, five minutes into the car ride home, I looked into the back seat,
        saw that PAWdorable smile, and knew I wasn't giving her up. She became
        an official part of my pack a couple of weeks later.
      </p>
    </div>
  );
};

export default Daisy;
