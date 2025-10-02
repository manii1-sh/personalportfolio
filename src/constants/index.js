import {
  git,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning Developer",
    icon: "https://img.icons8.com/color/96/artificial-intelligence.png",
  },
  {
    title: "Flutter Developer",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
];

const technologies = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Excel",
    icon: "https://img.icons8.com/color/96/microsoft-excel-2019.png",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Machine Learning Intern",
    company_name: "Aarkay Techno Consultants Pvt. Ltd.",
    icon: "https://img.icons8.com/color/96/artificial-intelligence.png",
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Present",
    points: [
      "Working on Vision-based projects using Python and advanced machine learning algorithms.",
      "Developing AI-based solutions and implementing computer vision techniques for real-world applications.",
      "Collaborating with cross-functional teams to deliver innovative technology solutions.",
      "Gaining hands-on experience in Python development, data analysis, and machine learning model deployment.",
    ],
  },
];



const projects = [
  {
    name: "Real-time Safety Helmet Detection",
    description:
      "A computer vision project that detects safety helmets in real-time using Python and OpenCV. Implements YOLO object detection algorithms to enhance workplace safety by monitoring helmet compliance in industrial environments.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "yolo",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&crop=center",
    source_code_link: "https://github.com/manii1-sh/real-time--safety-helmet-detection",
    live_website_link: "https://github.com/manii1-sh/real-time--safety-helmet-detection",
  },
  {
    name: "Voice Picking Warehouse System",
    description:
      "A Flutter mobile application for warehouse management with voice-controlled picking system. Features real-time inventory tracking, voice commands, and efficient warehouse operations management for improved productivity.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "voice-control",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop&crop=center",
    source_code_link: "https://github.com/manii1-sh/voicepicking-and-warehouse-system-app",
    live_website_link: "https://github.com/manii1-sh/voicepicking-and-warehouse-system-app",
  },
  {
    name: "Steel Metal Bar Detection",
    description:
      "An advanced computer vision system for detecting and analyzing steel metal bars using machine learning algorithms. Provides accurate measurements and quality assessment for industrial manufacturing processes.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "detection",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    source_code_link: "https://github.com/manii1-sh/steel-metal-bar-detetion",
    live_website_link: "https://github.com/manii1-sh/steel-metal-bar-detetion",
  },
];

export { services, technologies, experiences, projects };