import React from "react";
import { useGlobalContext } from "../context";

const Nessa = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div onMouseOver={closeSubmenu}>
      <h2>Nessa</h2>
    </div>
  );
};

export default Nessa;
