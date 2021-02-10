import React from "react";
import { useGlobalContext } from "../context";

const Daisy = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div onMouseOver={closeSubmenu}>
      <h2>Daisy</h2>
    </div>
  );
};

export default Daisy;
