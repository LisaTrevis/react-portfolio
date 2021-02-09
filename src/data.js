import React from "react";
import {
  FaListAlt,
  FaFolderOpen,
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaUserFriends,
  FaPaw,
} from "react-icons/fa";

import Nevdil from "./images/Nevdil.jpeg";
import Brian from "./images/Brian.jpeg";
import Tamara from "./images/Tamara.png";
import Melissa from "./images/Melissa.jpeg";
import Carmen from "./images/Carmen.png";

export const sublinks = [
  {
    page: "About me",
    links: [
      { label: "Skills", icon: <FaCode />, url: "/skills" },
      { label: "Education", icon: <FaGraduationCap />, url: "/education" },
      { label: "Work", icon: <FaBriefcase />, url: "/Work" },
      { label: "Recs", icon: <FaUserFriends />, url: "/recs" },
    ],
  },
  {
    page: "Projects",
    links: [
      { label: "Overview", icon: <FaListAlt />, url: "/Projects" },
      {
        label: "Home Bartender",
        icon: <FaFolderOpen />,
        url: "https://lisa-trevis-react-home-bartender.netlify.app",
        target: "_blank",
      },
      {
        label: "Delivery Decider",
        icon: <FaFolderOpen />,
        url: "https://lisa-trevis-react-basic-delivery-decider.netlify.app",
        target: "_blank",
      },
      {
        label: "Shopping List",
        icon: <FaFolderOpen />,
        url: "https://lisa-trevis-react-shopping-list.netlify.app",
        target: "_blank",
      },
      {
        label: "Tints & Shades",
        icon: <FaFolderOpen />,
        url: "https://lisa-trevis-react-tints-and-shades.netlify.app/",
        target: "_blank",
      },
      {
        label: "Checkout Cart Hooks",
        icon: <FaFolderOpen />,
        url: "https://lisa-trevis-react-checkout-cart-v1.netlify.app",
        target: "_blank",
      },
      {
        label: "Checkout Cart Redux",
        icon: <FaFolderOpen />,
        url: "https://lisa-trevis-react-checkout-cart-v2.netlify.app",
        target: "_blank",
      },
      {
        label: "Gas Pump",
        icon: <FaFolderOpen />,
        url: "https://lisa-trevis-react-gas-pump.netlify.app/",
        target: "_blank",
      },
    ],
  },
  {
    page: "Pets",
    links: [
      { label: "Daisy", icon: <FaPaw />, url: "/daisy" },
      { label: "Nessa", icon: <FaPaw />, url: "/nessa" },
    ],
  },
];

export const people = [
  {
    id: 1,
    name: "Nevdil",
    title: "Technical Writer",
    image: Nevdil,
    text:
      "I have had the pleasure of working with Lisa during my 6 months at CEB. Even though I didn't have much experience in the area, Lisa was impressively professional and patiently trained me with her constructive methods. She was always willing to offer her assistance. Lisa had an extensive perspective and motivating vision both personally and professionally. For these reasons, I recommend her and would be pleased to work with her again. ",
  },
  {
    id: 2,
    name: "Brian",
    title: "Full Stack Developer",
    image: Brian,
    text:
      "It's rare to come across someone like Lisa. She possesses both the technical and soft skills to be an asset to any software team and is just plain fun to work with. Lisa excels at discovering and implementing effective processes to increase efficiency. She is a quick learner as well as an experienced teacher who enjoys mentoring and sharing knowledge with others. Lisa looks beyond the technical aspects in her field with creative, innovative, and enthusiastic perspective.",
  },
  {
    id: 3,
    name: "Tamara",
    title: "Director of Compliance",
    image: Tamara,
    text:
      "It is a true pleasure to recommend Lisa Trevis as an exemplary account executive. Lisa could handle the most difficult situations with the same timely and thorough responses as she did in those myriad day-to-day requests for customized reports & provider outreach. I have found her to always be an advocate not only for her own organization, but also, for meeting the client needs tenaciously with an uncanny ability to balance those two tasks with ease. I had the good fortune to be with her at trade shows where she always been an exemplary model of professionalism mixed perfectly with a contagious positive attitude.",
  },
  {
    id: 4,
    name: "Melissa",
    title: "Content Attorney",
    image: Melissa,
    text:
      "I feel so lucky to have worked with Lisa. IT issues can be such a headache, but Lisa always managed to calm me down and help me get back to work. No matter what technical issues I encountered, she was always ready to help me solve the issue. Each time an issue arose, she took time to thoroughly analyze it and then patiently explained to me why it occurred and how it could be avoided in the future. She is an IT gem - kind, thoughtful, and very skilled at her job.",
  },
  {
    id: 5,
    name: "Carmen",
    title: "Project Manager",
    image: Carmen,
    text:
      "I had the pleasure of working with Lisa for two years at Continuing Education of the Bar. She's an excellent listener, solution oriented and her IT expertise is top notch. I always received great service from Lisa on requests big and small and definitely recommend her for future IT endeavors.",
  },
];

export const courses = [
  {
    id: 1,
    school: "LinkedIn",
    classes: [
      "Installing Apache",
      "MySQL",
      "PHP",
      "Graphic Design",
      "Logo Design Tips and Tricks",
      "InDesign: Typography Part 1",
      "Installing and Running WordPress",
      "MAMP",
      "Installing and Running WordPress: Shared Hosting",
      "Creating a First Website in Dreamweaver CC 2017",
      "HTML5: Structure, Syntax, and Semantics",
      "Illustrator for Web Design: Core Concepts",
      "InDesign Quick Start",
      "Learning Canva",
      "Learning the Adobe Creative Cloud",
      "Photoshop CC 2017 Essential Training: The Basics",
      "UX Foundations: Prototyping",
      "jQuery Essential Training",
      "SEO Foundations",
      "React Testing & Debugging w/ Jest",
      "AngularJS",
    ],
  },
  {
    id: 2,
    school: "Codify Academy",
    classes: [
      "Web Application Engineering",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Bootstrap",
      "jQuery",
      "GitHub",
      "CSS Animation",
      "Framework Basics (Vue.js, React, AngularJS)",
      "APIs",
      "AJAX",
      "JSON",
    ],
  },
  {
    id: 3,
    school: "Udemy",
    classes: [
      "Vue",
      "Angular",
      "PHP",
      "Advanced JavaScript",
      "React with Redux & Hooks",
      "SVG",
      "D3.js",
      "ES6",
      "Python",
      "Django",
    ],
  },
  {
    id: 4,
    school: "Hack Reactor",
    classes: ["An intense 4 week prep course with a focus on JavaScript"],
  },
  {
    id: 5,
    school: "Codecademy",
    classes: ["HTML", "CSS", "JavaScript", "AngularJS", "ReactJS"],
  },
  {
    id: 6,
    school: "Normandale",
    classes: ["AA Degree", "Physics", "Math", "Engineering"],
  },
  {
    id: 7,
    school: "Index Computers",
    classes: [
      "Access",
      "Excel (including Pivot Tables)",
      "Power Point",
      "Word",
      "Outlook",
      "Quickbooks",
    ],
  },
];

export const jobs = [
  {
    id: 1,
    title: "Programmer Analyst",
    company: "CEB",
    dates: "June 2018 - Dec 2020",
    duties: [
      "Planned and managed database content transition to new platforms / applications with multiple technical and non-technical teams.",
      "Designed internal application using Figma. Modified externally sourced content to match internal content using HTML & CSS.",
      "Created Python scripts which scraped websites and modified data to match required internal format.",
      "Trained non-technical attorney users on a suite of new applications (Litmos, Panopto, SalesForce, SmartSheet, Contentful, and Intercom). Created internal documentation and user guides. Provided friendly ongoing IT support.",
      "Managed content pipeline from uploads through publication to website.",
    ],
  },
  {
    id: 2,
    title: "Instructor",
    company: "Codify Academy",
    dates: "April 2017 - Sept 2018",
    duties: [
      "Taught Front End Web Development to students new to programming via a 16 week in-person course.",
      "Topics covered included HTML5, CSS3, JavaScript, jQuery, Bootstrap, APIs, JSON, AJAX, and frameworks like VUE, React, and Angular.",
      "My cohorts consistently had the highest graduation rate of any instructor there.",
    ],
  },
  {
    id: 3,
    title: "Manager, National Accounts",
    company: "MultiPlan, Inc.",
    dates: "Sept 2011 - Sept 2014",
    duties: [
      "Managed and grew revenue on multi-million dollar national accounts.",
      "Increased revenue streams by up-selling and cross-selling products and market segments.",
      "Managed implementation of new Clients and ongoing relationships between internal teams and Client teams for all technical, financial, and service issues.",
    ],
  },
  {
    id: 4,
    title: "National Sales Manager",
    company: "IHP, Inc.",
    dates: "Oct 2008 - Aug 2011",
    duties: [
      "Negotiated multi-million dollar contracts from initial contact to final signature.",
      "Exceeded double digit revenue goals every year.",
      "Managed all aspects of the Client Accounts including financial, technical, and client relations.",
      "Served as SalesForce Administrator.",
    ],
  },
];

export default sublinks;
