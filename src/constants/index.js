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
    title: "Product & Service",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Artificial Intelligence",
    icon: web,
  },
  {
    title: "Virtual Reality & Augmented Reality",
    icon: mobile,
  },
  {
    title: "Virtual Assistants",
    icon: backend,
  },
  {
    title: "Robotic Simulation",
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
  {
    title: "Immersive Virtual and Augmented Reality Experiences: ",
    company_name: "AR & VR",
    icon: starbucks,
    iconBg: "#383E56",
    date: "AR & VR",
    points: [
      "We create captivating virtual worlds and augment real-world environments with digital elements, offering unparalleled experiences in entertainment, education, and training.",
      "Gaming and Entertainment: Create immersive gaming experiences, virtual concerts, and interactive storytelling.",
      "Education and Training: Develop interactive educational simulations, virtual field trips, and realistic training scenarios.",
      "Healthcare: Provide virtual therapy sessions, surgical simulations, and patient education tools.",
      "Real Estate: Offer virtual property tours and interior design visualizations.",
      "Architecture and Engineering: Design and visualize architectural projects in immersive 3D environments.",
    ],
  },
  {
    title: "Intelligent Virtual Assistants:",
    company_name: "Digital Agents",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Digital Agents",
    points: [
      "We develops virtual assistants capable of understanding and responding to natural language, providing information, completing tasks, and offering personalized experiences.",
      "Customer Service: Provide 24/7 customer support, answer inquiries, and resolve issues.",
      "Personal Assistants: Manage schedules, set reminders, and provide personalized recommendations.",
      "Language Translation: Facilitate real-time language translation and interpretation.",
      "Accessibility: Enhance accessibility for people with disabilities by providing voice-activated interfaces and visual aids."
    ],
  },
  {
    title: "Advanced AI-Driven Simulations and Training",
    company_name: "Simulations & Training",
    icon: shopify,
    iconBg: "#383E56",
    date: "Simulations & Training",
    points: [
      "VirtualAI uses AI to create realistic simulations for training purposes, such as robotic simulators, flight simulators, medical training, or military exercises.",
      "Healthcare: Train medical professionals in surgical techniques and patient care.",
      "Manufacturing: Simulate assembly line operations and quality control processes.",
      "Aviation: Simulate flight conditions and emergency procedures.",
      "Automotive: Test and develop autonomous vehicles in virtual environments.",
    ],
  },
  {
    title: "we are committed to drive innovation and deliver cutting-edge solutions",
    company_name: "Research & Innovation",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Research & Innovation",
    points: [
      "Advancing AI Research and Development: We invest in cutting-edge research to push the boundaries of AI, particularly in the fields of virtual and augmented reality.",
      "Developing Innovative AI-Powered Software and Applications: We create a diverse range of AI-powered software products tailored to specific industries and needs.",
      "Providing Expert AI Consulting and Services: We offer expert consulting services to help businesses harness the power of AI and virtual technologies, driving growth and efficiency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Chief Executive Officer (CEO) & AI/ML Expert & Software Engineer",
    name: "Yu Nong",
    designation: "CEO",
    company: "VirtualAI",
    image: "../../john.jpg",
  },
  {
    testimonial:
      "Expert in AI and ML, specialized in deep learning and reinforcement learning",
    name: "Jia-Qiang Sun",
    designation: "Data Engineer",
    company: "VirtualAI",
    image: "sun.jpg",
  },
  {
    testimonial:
      "Specialized in system design and cloud computing.",
    name: "Hua-Nan Wu",
    designation: "Software Engineer",
    company: "VirtualAI",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "Specialized in software development of AR and VR and mobile applications",
    name: "Kai Wang",
    designation: "Software Engineer",
    company: "VirtualAI",
    image: "wang.jpg",
  },
  {
    testimonial:
      "Specialized in Marketing & Finance",
    name: "Shu-Jun Zhao",
    designation: "Accountant",
    company: "VirtualAI",
    image: "zhao.jpg",
  },
  
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
