// ============================================================
// 🎓 HAMMAD NAEEM - PORTFOLIO DATA FILE
// ============================================================
import { 
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaFigma, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaLinkedin, FaJava, FaInstagram
} from 'react-icons/fa';

import { 
  SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiFirebase, SiCplusplus, SiMysql, SiFlask, SiKalilinux, SiTryhackme, SiHackthebox
} from 'react-icons/si';
import { HiCode, HiBriefcase, HiAcademicCap, HiHeart, HiShieldCheck, HiBookOpen } from 'react-icons/hi';

// ============================================================
// 👤 PERSONAL INFORMATION
// ============================================================
export const personalInfo = {
  name: "Hammad Naeem",
  firstName: "Hammad",
  lastName: "Naeem",
  logoInitials: "HN",

  role: "Cyber Security Student",
  tagline: "Python Developer & Top 2% on TryHackMe",

  description:
    "Cyber Security student with hands-on experience in Python, AI-powered tools, and security monitoring systems. Passionate about ethical hacking, artificial intelligence, and building intelligent applications with real-world impact.",

  location: "Nawabshah, Pakistan",              // ✅ Location #1
  availabilityStatus: "Open for Internships",

  email: "hammadnaeem160@gmail.com",

  university: "QUEST University",
  degree: "BS Cyber Security",
  graduationYear: "2028",
};

// ============================================================
// 📸 IMAGES & FILES
// ============================================================
export const images = {
  profilePhoto: "/images/profile.jpg",
  aboutPhoto: "/images/square.jpeg",
  resumeFile: "/resume/Hammad_Naeem_Resume.pdf",
  tryhackmeBadge: "/images/tryhackme-badge.png",     // ← NEW
};

// ============================================================
// 🔗 SOCIAL MEDIA LINKS
// ============================================================
export const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/Hammad-xureshi",
    color: "#333",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/hammad-naeem-b5762a384/",
    color: "#0077B5",
  },
  {
    name: "TryHackMe",
    icon: SiTryhackme,
    url: "https://tryhackme.com/p/HammadNaeem",     // ← Apna username daalein
    color: "#212C42",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/hammad__qureshi110/#",     // ← Apna Instagram username daalein
    color: "#E4405F",
  },
];

// ============================================================
// 📊 ABOUT ME SECTION
// ============================================================
export const aboutMe = {
  title: "Cyber Security Enthusiast & Python Developer",

  paragraphs: [
    "I am a Cyber Security student at QUEST University, passionate about ethical hacking, red teaming, and building secure systems. My focus is on Python automation, AI-based tools, and real-time security monitoring systems.",
    
    "I have developed intelligent systems such as AI Document Studio and CyberWall Security Dashboard by combining Python, Machine Learning, and backend development. My work revolves around building practical, real-world solutions that enhance digital security.",
    
    "I am continuously exploring new areas like penetration testing, network analysis, security automation, and AI-driven threat detection through online courses and hands-on projects. My goal is to contribute to the future of cyber defense through innovative and intelligent tools.",
  ],

  quickInfo: [
    { label: "Name", value: "Hammad Naeem" },
    { label: "Email", value: "hammadnaeem160@gmail.com" },
    { label: "Location", value: "Nawabshah, Pakistan" },       // ✅ Location #2
    { label: "Status", value: "Open for Internships" },
  ],

  stats: [
    { icon: HiCode, value: "2+", label: "Projects Built" },
    { icon: HiAcademicCap, value: "2.9", label: "CGPA" },
    { icon: HiBookOpen, value: "8+", label: "Courses Learning" },
    { icon: HiShieldCheck, value: "1+", label: "Years in Cyber Sec" },
  ],
};

// ============================================================
// 🛠️ SKILLS SECTION
// ============================================================
export const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: FaPython, level: 90, color: "#3776AB" },
      { name: "C++", icon: SiCplusplus, level: 85, color: "#00599C" },
      { name: "Java", icon: FaJava, level: 70, color: "#ED8B00" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML5", icon: FaHtml5, level: 85, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, level: 75, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, level: 60, color: "#F7DF1E" },
      { name: "Flask", icon: SiFlask, level: 70, color: "#000000" },
    ],
  },
  {
    title: "Cyber Security & Tools",
    skills: [
      { name: "Kali Linux", icon: SiKalilinux, level: 70, color: "#557C94" },
      { name: "MySQL", icon: SiMysql, level: 70, color: "#4479A1" },
      { name: "Git", icon: FaGitAlt, level: 75, color: "#F05032" },
    ],
  },
];

export const otherSkills = [
  "Machine Learning",
  "Ethical Hacking",
  "Network Security",
  "Password Cracking",
  "Web Scraping",
  "Social Engineering",
  "Bug Bounty",
  "Malware Analysis",
  "Data Structures",
  "API Development",
  "Problem Solving",
  "Linux Commands",
];

// ============================================================
// 💼 PROJECTS SECTION
// ============================================================
export const projects = [
  {
    id: 1,
    title: "AI Document Studio",
    description:
      "An intelligent document processing system powered by Google's Gemini AI. Supports semantic search, automated summarization, study-material generation, and bilingual (English + Roman Urdu) Q&A.",
    image: "/images/projects/ai-document-studio.png",
    tags: ["Python", "AI", "Gemini API", "Flask"],
    category: "fullstack",
    github: "https://github.com/Hammad-xureshi/doc-studio",
    live: "",
    featured: true,
  },
  {
    id: 2,
    title: "CyberWall — Security Monitoring System",
    description:
      "A complete cyber security monitoring system using Flask + ML (Isolation Forest) for anomaly detection, IP blacklisting, risk scoring, and real-time attack visualization dashboard.",
    image: "/images/projects/cyberwall.png",
    tags: ["Python", "Flask", "MySQL", "Machine Learning"],
    category: "fullstack",
    github: "https://github.com/Hammad-xureshi/OptiFlow",
    live: "",
    featured: true,
  },
  {
    id: 3,
    title: "Sales Analytics ERP System",
    description:
      "A full-stack Sales Analytics ERP system designed to manage sales data, customers, products, and real-time analytics. Includes authentication, dashboards, reports, and automated database initialization with a scalable backend.",
    image: "/images/projects/sales-analytics-erp.png",
    tags: ["Node.js", "Express.js", "PostgreSQL", "Docker", "React", "Vite", "Socket.IO"],
    category: "fullstack",
    github: "https://github.com/Hammad-xureshi/sales-analytics",
    live: "",
    featured: true,
  },
  {
    id: 4,
    title: "Surface X — Bash Recon & Bug Evidence Detection",
    description:
      "A professional-grade, terminal-based reconnaissance and vulnerability evidence framework built entirely in Bash. Designed for penetration testers and bug bounty hunters with fast parallel execution, stealth in-memory operations, and 60+ security patterns from real-world CTF challenges and bug bounties.",
    image: "/images/projects/Surface-X.png",
    tags: ["Bash", "Penetration Testing", "Reconnaissance", "Security Tools", "Linux"],
    category: "security",
    github: "https://github.com/Hammad-xureshi/SurfaceX",
    live: "",
    featured: true,
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "security", label: "Security" },
];

// ============================================================
// 📚 EDUCATION & LEARNING JOURNEY
// ============================================================
export const experiences = [
  {
    type: "education",
    title: "BS Cyber Security",
    company: "QUEST University",
    location: "Nawabshah, Pakistan",                    // ✅ Location #3
    period: "2024 - 2028",
    description:
      "Pursuing Bachelor's degree in Cyber Security with focus on ethical hacking, network security, Python programming, and AI-based security systems.",
    achievements: [
      "Current CGPA: 2.9",
      "Built AI Document Studio project using Gemini API",
      "Developed CyberWall Security Monitoring System",
      "Actively learning penetration testing & ethical hacking",
    ],
  },
  {
    type: "learning",
    title: "Self-Learning & Online Courses",
    company: "Udemy & Online Resources",
    location: "Remote",
    period: "2023 - Present",
    description:
      "Actively enhancing skills through online courses and hands-on projects in cyber security, ethical hacking, Python development, and machine learning.",
    achievements: [
      "8+ Udemy courses in completed",
      "Password cracking with John the Ripper & Hashcat",
      "Social Engineering & Bug Bounty fundamentals",
      "Python web scraping & data structures",
      "Malware analysis & Zero Trust Architecture",
    ],
  },
];

// ============================================================
// 📜 CERTIFICATIONS / COURSES IN PROGRESS
// ============================================================
export const certifications = [
  {
    name: "Complete Windows Password Cracking Course: Practical Guide",
    platform: "Udemy",
    status: "Certified",
    icon: "🔐",
  },
  {
    name: "Password Cracking & Cryptography: John the Ripper & Hashcat",
    platform: "Udemy",
    status: "Certified",
    icon: "🔑",
  },
  {
    name: "Ethically Hack Human Mind, Social Engineering Fundamentals",
    platform: "Udemy",
    status: "Certified",
    icon: "🧠",
  },
  {
    name: "Introduction to Bug Bounties - Main Web App Hacking",
    platform: "Udemy",
    status: "Certified",
    icon: "🐛",
  },
  {
    name: "Python Web Scraping Data Extraction with Beautiful Soup",
    platform: "Udemy",
    status: "Certified",
    icon: "🕷️",
  },
  {
    name: "Implement NET Zero Trust Architecture (ZTA) Step by Step",
    platform: "Udemy",
    status: "Certified",
    icon: "🛡️",
  },
  {
    name: "Data Structures and Algorithms in Python DSA Course",
    platform: "Udemy",
    status: "Certified",
    icon: "📊",
  },
  {
    name: "Practical Malware Analysis for Beginners",
    platform: "Udemy",
    status: "Certified",
    icon: "🦠",
  },
];

// ============================================================
// 💬 TESTIMONIALS - EMPTY
// ============================================================
export const testimonials = [];

// ============================================================
// 📧 CONTACT SECTION
// ============================================================
export const contactInfo = [
  {
    icon: "HiMail",
    label: "Email",
    value: "hammadnaeem160@gmail.com",
    href: "mailto:hammadnaeem160@gmail.com",
  },
  {
    icon: "HiPhone",
    label: "Phone",
    value: "+92-0328-3507169",
    href: "tel:+92-0328-3507169",
  },
  {
    icon: "HiLocationMarker",
    label: "Location",
    value: "Nawabshah, Pakistan",                      // ✅ Location #4
    href: "#",
  },
];

// ============================================================
// 🎨 NAVIGATION LINKS
// ============================================================
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// ============================================================
// 📄 SEO & META DATA
// ============================================================
export const seoData = {
  title: "Hammad Naeem | Cyber Security Student:Top 2% on tryhackme",
  description:
    "Portfolio of Hammad Naeem — Cyber Security student at QUEST University specializing in Python, AI-powered security tools, ethical hacking, and intelligent systems.",
  keywords: "hammad naeem, cyber security, python developer, quest university, ethical hacking, nawabshah, portfolio",
  author: "Hammad Naeem",
};