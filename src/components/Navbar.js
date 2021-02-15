import React from "react";
import { FaBars, FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <div className="nav-logo">
              <img src={Logo} alt="logo" />
            </div>
          </Link>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/about">
              <button className="link-btn" onMouseOver={displaySubmenu}>
                About
              </button>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <button
                className="link-btn"
                onFocus={displaySubmenu}
                onMouseOver={displaySubmenu}
              >
                Projects
              </button>
            </Link>
          </li>
          <li>
            <Link to="/pets">
              <button
                className="link-btn"
                onFocus={displaySubmenu}
                onMouseOver={displaySubmenu}
              >
                Pets
              </button>
            </Link>
          </li>
        </ul>
        <ul className="social-container">
          <li className="social-item">
            <a
              className="social-link"
              href="https://www.linkedin.com/in/lisatrevis/"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="social-item">
            <a className="social-link" href="https://github.com/LisaTrevis">
              <FaGithub />
            </a>
          </li>
          <li className="social-item">
            <a className="social-link" href="https://codepen.io/LisaTrevis/">
              <FaCodepen />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
