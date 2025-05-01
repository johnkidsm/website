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
  vrshootz,
  pcshootz,
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
    title: "Robotic Simulation",
    icon: backend,
  },
  {
    title: "Games",
    icon: creator,
  },
];

const technologies = [
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
      "We develop advanced virtual assistants capable of understanding and responding to natural language, providing information, completing tasks, and offering personalized experiences.",
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
      "We use AI to create realistic simulations for training purposes, such as robotic simulators, flight simulators, medical training, or military exercises.",
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
    company: "VirtualAI China & International",
    image: "../../john.jpg",
  },
  {
    testimonial:
      "Expert in AI and ML, specialized in deep learning and reinforcement learning",
    name: "Jia-Qiang Sun",
    designation: "Data Engineer",
    company: "VirtualAI China & International",
    image: "sun.jpg",
  },
  {
    testimonial:
      "Expert in AI and ML, specialized in LLMs & model fine-tuning.",
    name: "Hai-Tao Zhang",
    designation: "Data Engineer",
    company: "VirtualAI China & International",
    image: "Hai-Tao Zhang.jpg",
  },
  {
    testimonial:
      "Specialized in system design and cloud computing.",
    name: "Hua-Nan Wu",
    designation: "Software Engineer",
    company: "VirtualAI China & International",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "Specialized in software development of AR and VR and mobile applications",
    name: "Kai Wang",
    designation: "Software Engineer",
    company: "VirtualAI China & International",
    image: "wang.jpg",
  },
  {
    testimonial:
      "Specialized in Marketing & Finance",
    name: "Shu-Jun Zhao",
    designation: "Accountant",
    company: "VirtualAI China & International",
    image: "zhao.jpg",
  },
  
];

const projects = [
  {
    name: "VR Shoot Zombies I Preview (Tested on Oculus Quest Headsets)",
    description:
      "Gear Up for Survival! 🧟 Face the Horde in 'Shoot Zombies I Preview' VR! Prepare for intense action in the upcoming VR game, 'Shoot Zombies I Preview'! 🕹️ Choose your graphic quality and arm yourself with a pistol&nbsp; or assault rifle&nbsp; to take on relentless waves of the undead. 💀 Strategically eliminate every zombie to progress through each wave of Act I. And when the fight gets tough, keep an eye out for first aid to recover your health and stay in the action! 🩹 Can you reach the tunnel entrance before time runs out in Act II? ⏳ 'Kill Zombies I Preview' delivers an immersive and thrilling VR experience. Are you ready to face the zombie apocalypse? 🔥",
    tags: [
      {
        name: "Virtual Reality",
        color: "blue-text-gradient",
      },
      {
        name: "Game",
        color: "green-text-gradient",
      },
      {
        name: "Unreal Engine 5",
        color: "pink-text-gradient",
      },
    ],
    image: "vrshootz.png",
    source_code_link: "https://kt1v0b-wr.myshopify.com/products/vr-shoot-zombies-i-preview-tested-on-oculus-quest-headsets",
  },
  {
    name: "FPS Shoot Zombies I Preview (PC Version)",
    description:
      "FPS zombie game with first two chapters available at the moment for this preview version.&nbsp; No installation of the game required. Get ready for an intense and realistic zombie survival experience. This preview showcases a taste of the full version, featuring an advanced weapon system that includes: Assault Rifle: Offers versatile combat with semi-auto, full-auto, and burst fire modes. But beware! The zombies in this game are relentless. Built with intelligent AI, they can navigate complex environments, actively chase you down, and attack with varied and terrifying behaviors. Have fun to survive!",
    tags: [
      {
        name: "FPS",
        color: "blue-text-gradient",
      },
      {
        name: "Game",
        color: "green-text-gradient",
      },
      {
        name: "Unreal Engine 5",
        color: "pink-text-gradient",
      },
    ],
    image: "pcshootz.png",
    source_code_link: "https://kt1v0b-wr.myshopify.com/products/fps-shoot-zombies-i-preview",
  },
];

export { services, technologies, experiences, testimonials, projects };
