import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import Nessa_Closeup from "../images/Nessa_Closeup.jpg";
import Daisy_Lap from "../images/Daisy_Lap.jpg";

const Pets = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="section pet-container" onMouseOver={closeSubmenu}>
      <h2 className="section-title">Pets</h2>
      <div className="pet-center">
        <article className="pet-card">
          <div className="img-container">
            <img src={Nessa_Closeup} alt="Nessa" />
          </div>
          <div className="pet-info">
            <h3>Nessa is a fourteen year old Smooth Coated Collie.</h3>
            <Link to="/nessa">
              <button className="btn">Learn more</button>
            </Link>
          </div>
        </article>
        <article className="pet-card">
          <div className="img-container">
            <img src={Daisy_Lap} alt="" />
          </div>
          <div className="pet-info">
            <h3>Daisy is a two year old American Pit Bull Terrier.</h3>
            <Link to="/daisy">
              <button className="btn">Learn more</button>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Pets;
