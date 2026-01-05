import { Github, Linkedin, Mail, Twitter, Instagram, BarChart2 } from 'lucide-react';
import React from 'react';
import {
  SiPython, SiJavascript, SiCplusplus, SiReact, SiFastapi,
  SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiMysql,
  SiSqlite, SiFlask, SiCss3, SiHtml5, SiTailwindcss, SiDocker
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export const PERSONAL_INFO = {
  name: "Abid",
  location: "Surabaya, Indonesia",
  status: "Available",
};

export const NAVIGATION = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT_ME = {
  description: [
    "I'm a second-year Informatics student at Institut Teknologi Sepuluh Nopember with a strong passion in data Science, machine Learning, and artificial intelligence. Currently engaging in data science and research.",
    "My experience spans various project in web development and machine learning, where I've built full-stack applications and developed machine learning models to solve real-world problems.",
    "I'm actively involved in data science competitions, which continuously sharpen my problem-solving skills, analytical thinking, and research skills. Through these challenges, I apply concepts in optimization, visualization, and algorithm development."
  ],
  stats: {
    projectCount: "8+",
    awardCount: "3+"
  }
};

export const EDUCATION = [
  {
    institution: "Institut Teknologi Sepuluh Nopember",
    degree: "Bachelor of Informatics",
    year: "2024 - 2028",
    coursework: "Data Structure, Database System, Operating System, Artificial Intelligence Concept, Software Engineering Concept, Linear Algebra, Discrete Mathematics"
  }
];

export const SKILLS_CATEGORIES = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "C/C++", icon: <SiCplusplus /> },
      { name: "Java", icon: <FaJava /> },
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "Docker", icon: <SiDocker /> }
    ]
  },
  {
    title: "Machine Learning & Data Science",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "SQLite", icon: <SiSqlite /> },
    ]
  }
];

export const EXPERIENCE = [
  {
    role: "Steve (I need) Jobs",
    company: "",
    year: "2000 BM",
    place: "",
    description: ""
  }
];

export const VOLUNTEER = [
  {
    role: "Operational Team",
    company: "1000 Duta AI",
    year: "Okt 2025",
    place: "Surabaya, Indonesia",
    description: "Coordinated 600+ Duta AI participants to maintain an organized flow throughout the event, assisted Event Committee in preparing and managing event logistics. Also supported lecturers during material presentation.",
    impact: "Successfully facilitated the smooth execution of the event and ensuring participant satisfaction and effective knowledge dissemination."
  }
];

export const PROJECTS = [
  {
    title: "Air Quality Prediction System",
    tags : ["Classification", "Environmental Data"],
    description: "Full-stack web application designed to predict air quality based on various environmental and meteorological features.",
    techStack: ["Python", "Machine Learning", "React", "FastAPI", "Docker"],
    link: "",
    github: "https://github.com/abidalfrz/air-quality-prediction-webapp"
  },
  {
    title: "Electricity Cost Prediction System",
    tags : ["Regression", "Urban Environmental"],
    description: "Web application designed to predict electricity costs based on various infrastructure and environmental features.",
    techStack: ["Python", "Machine Learning", "Flask","HTML", "CSS", "JavaScript"],
    link: "",
    github: "https://github.com/abidalfrz/electricity-cost-prediction"
  },
  {
    title: "Expense Tracker Application",
    tags : ["RestAPI", "Web Development"],
    description: "A full-stack web application that allows users to track their expenses.",
    techStack: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
    link: "",
    github: "https://github.com/abidalfrz/flask-expense-tracker-webapp"
  },
  {
    title: "Mental Health Sentiment Analysis",
    tags : ["Classification", "NLP", "Transformer", "Sentiment Analysis"],
    description: "Natural Language Processing (NLP) project focused on classification of user-generated text into mental health status categories.",
    techStack: ["Python", "Machine Learning", "NLTK", "PyTorch"],
    link: "",
    github: "https://github.com/abidalfrz/mental-health-sentiment-analysis-classification-nlp"
  },
  {
    title: "Cyberbullying Tweet Detection",
    tags : ["Classification", "NLP", "Transformer", "Sentiment Analysis"],
    description: "Natural Language Processing (NLP) project focused on identifying and classifying different types of cyberbullying in tweets.",
    techStack: ["Python", "Machine Learning", "NLTK", "PyTorch", "TensorFlow"],
    link: "",
    github: "https://github.com/abidalfrz/cyberbullying-classification-multilingual-nlp"
  }

];

export const ACHIEVEMENTS = [
  {
    title: "Data Slayer 3.0",
    rank: "Finalist (Top 10)",
    type: "Machine Learning Competition",
    date: "Dec 2025",
    scale: "National"
  },
  {
    title: "Intelecta Cup",
    rank: "Finalist (Top 7)",
    type: "Data Mining Competition",
    date: "Nov 2025",
    scale: "National"
  },
  {
    title: "Airnology Dataquest 4.0",
    rank: "🥉 3rd Place",
    type: "Data Science Competition",
    date: "Sep 2025",
    scale: "National"
  },
  {
    title: "Data Clash",
    rank: "Finalist (Top 10)",
    type: "Machine Learning Competition",
    date: "May 2025",
    scale: "National"
  }
];

export const HERO_IMAGES = [
  {
    // source: public/
    src: "/img2.jpeg",
    alt: "Street Portrait"
  },
  {
    src: "/img4.jpeg",
    alt: "Community Event"
  },
  {
    src: "/img1.jpeg", 
    alt: "University Campus"
  },
  {
    src: "./img3.jpeg",
    alt: "Competition Award"
  }
];

export const SOCIAL_LINKS = [
  { platform: "GitHub",
    icon: <Github size={20} />,
    href: "https://github.com/abidalfrz" , 
    name: "@abidalfrz"},
  { 
    platform: "LinkedIn",
    icon: <Linkedin size={20} />, 
    href: "https://www.linkedin.com/in/muhammadabidbaihaqialfaridzi", 
    name: "Muhammad Abid Baihaqi Al Faridzi" },
  { 
    platform: "Email",
    icon: <Mail size={20} />, 
    href: "mailto:abidalfaridzi18@gmail.com", 
    name: "abidalfaridzi18@gmail.com" },
  { 
    platform: "Instagram",
    icon: <Instagram size={20} />, 
    href: "https://instagram.com/abidalfrzi", 
    name: "@abidalfrzi" },
];



