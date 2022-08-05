import WhatStreamin from "./assets/projectmodal.gif";
import Dudl from "./assets/dudl_homepage.gif";
import ecomm from "./assets/ecomm.jpg";
import employeeTracker from "./assets/employee_tracker.jpg";

export const projects = [
    {
      title: "What's Streamin?'",
      subtitle: "HTML CSS JS",
      description:
        "A simple web application that randomly generates a movie or show to watch based on user input criteria.",
      image: WhatStreamin,
      link: "https://github.com/dennismacc/Stream_Availability",
    },
    {
      title: "DÜDL",
      subtitle: "HTML CSS JS Express Socket.io Handlebars", 
      description:
        "DÜDL is a multiplayer drawing and guessing game that can be played with friends anytime, anywhere!",
      image: Dudl,
      link: "https://github.com/dennismacc/DUDL-Game",
    },
    {
      title: "E-Commerce Backend",
      subtitle: "Express MySQL Sequelize",
      description: "Built out back end for an internet retail company that makes them a stronger competitor with other internet retail companies.",
      image: ecomm,
      link: "https://github.com/dennismacc/E-Commerce-Back-End",

    },
    {
      title: "Employee Tracker",
      subtitle: "Node.js Inquirer MySQL",
      description: "Command-line application that can be used to manage a company's employee database. It allows users to easily view and interact with information stored in databases, and manage the departments, roles, and employees in a company.",
      image: employeeTracker,
      link: "https://github.com/dennismacc/Employee-Tracker",
    }
  ];