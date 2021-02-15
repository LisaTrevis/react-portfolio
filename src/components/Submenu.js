import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { links },
  } = useGlobalContext();

  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length === 9) {
      setColumns("col-3");
    }
    if (links.length === 4) {
      setColumns("col-2");
    }
  }, [location, links]);
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <ul className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url, target } = link;
          return (
            <li key={index}>
              <a href={url} target={target}>
                {icon}
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Submenu;
