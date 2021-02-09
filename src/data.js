import React from "react";
import {
  FaFolderOpen,
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaUserFriends,
  FaPaw,
} from "react-icons/fa";

const sublinks = [
  {
    page: "About me",
    links: [
      { label: "Skills", icon: <FaCode />, url: "/skills" },
      { label: "Education", icon: <FaGraduationCap />, url: "/education" },
      { label: "Experience", icon: <FaBriefcase />, url: "/experience" },
      {
        label: "Recommendations",
        icon: <FaUserFriends />,
        url: "/recommendations",
      },
    ],
  },
  {
    page: "Projects",
    links: [
      { label: "Project 1", icon: <FaFolderOpen />, url: "/" },
      { label: "Project 2", icon: <FaFolderOpen />, url: "/" },
      { label: "Project 3", icon: <FaFolderOpen />, url: "/" },
      { label: "Project 4", icon: <FaFolderOpen />, url: "/" },
    ],
  },
  {
    page: "Pets",
    links: [
      { label: "Daisy", icon: <FaPaw />, url: "/" },
      { label: "Nessa", icon: <FaPaw />, url: "/" },
    ],
  },
];

export default sublinks;
