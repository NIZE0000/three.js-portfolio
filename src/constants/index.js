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
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  theescape,
  vrank
} from '../assets';

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
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  //   {
  //   title: "Internship",
  //   company_name: "",
  //   // icon: null,
  //   iconBg: "#383E56",
  //   date: "Oct 2023 - Feb 2024",
  //   points: [],
  // },
  {
    title: "Part-time Programing",
    // company_name: "Donuts-BKK",
    icon: null,
    iconBg: "#383E56",
    date: "Jun 2023 - Present",
    points: [
      "Backend server-side development using the Go programming language.",
      "Build APIs, manage databases, and optimize performance.",
      "Collaborate with the team to ensure secure and functional web applications.",
      "Creating efficient backend systems using the Go programming language."
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
    name: "VRANK",
    description:
      "Vtuber Ranking with modern design. built in Next.js + TypeScript + Tailwind CSS Back-end all use golang Gin + Cron deploy with docker",
    tags: [
      {
        name: "nextjs",
        color: "black-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: vrank,
    source_code_link: "https://github.com/NIZE0000/modern-vrank",
  },
  {
    name: "TheEscape",
    description:
      "Learning Classic Opengl.",
    tags: [
      {
        name: "OpenGL",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "orange-text-gradient",
      },
    ],
    image: theescape,
    source_code_link: "https://github.com/NIZE0000/TheEscape",
  },
];

export { services, technologies, experiences, testimonials, projects };