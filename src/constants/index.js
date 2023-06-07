import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  TTU,
  ITHC,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "C Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Computer Science",
    company_name: "Minor in Mathematics",
    icon: TTU,
    iconBg: "#383E56",
    date: "August 2020 - May 2024",
    points: ["Texas Tech University", "Bachelors of Science"],
  },
  {
    title: "Student Analyst",
    company_name: "Texas Tech IT Help Central",
    icon: ITHC,
    iconBg: "#383E56",
    date: "October 2021 - September 2022",
    points: [
      "Aid Students and Staff with technical issues in a timely manner",
      "Implement the skills of problem-solving as well as time-based research",
    ],
  },
  {
    title: "Student Supervisor",
    company_name: "Texas Tech IT Help Central",
    icon: ITHC,
    iconBg: "#383E56",
    date: "September 2022 - Present",
    points: [
      "Oversee the performance of employees",
      "Answer any questions that may be had",
    ],
  },

  {
    title: "Quality/Trainer",
    company_name: "Texas Tech IT Help Central",
    icon: ITHC,
    iconBg: "#383E56",
    date: "September 2022 - Present",
    points: [
      "Train the next wave of Service Desk Student Assistants",
      "Monitor the quality of work produced by employees",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movie Booking System",
    description:
      "Web-based platform that allows users to search and buy movie tickets from various movie theaters.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/dgardene/Movie-Booking-System",
  },
  {
    name: "Cellular Life Simulator",
    description:
      "A terminal based parallel programming application that simulates the first 100 steps of cellular life from an input matrix of any size",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/dgardene/Cellular-Life-Simulator",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
