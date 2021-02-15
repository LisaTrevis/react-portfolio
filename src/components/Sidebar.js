import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "../data";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          {<FaTimes />}
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <a href={`/${page}`}>{page}</a>

                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { label, icon, url, target } = link;
                    return (
                      <a key={index} target={target} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
