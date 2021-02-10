import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Error = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="error-page section" onMouseOver={closeSubmenu}>
      <div className="error-container">
        <h1>Something went wrong!</h1>
        <Link to="/" className="btn btn-primary">
          Back to Welcome Page
        </Link>
      </div>
    </section>
  );
};

export default Error;
