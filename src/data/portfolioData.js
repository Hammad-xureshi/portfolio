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

  location: "Nawabshah, Pakistan",
  availabilityStatus: "Open for Internships",

  email: "hammadnaeem160@gmail.com",
};

// ============================================================
// 📸 IMAGES & FILES
// ============================================================
export const images = {
  profilePhoto: "/images/profile.jpg",
  aboutPhoto: "/images/square.jpeg",
  resumeFile: "/resume/Hammad_Naeem_Resume.pdf",
  tryhackmeBadge: "/images/tryhackme-badge.png",
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
    url: "https://tryhackme.com/p/HammadNaeem",
    color: "#212C42",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/hammad__qureshi110/#",
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
    { label: "Location", value: "Nawabshah, Pakistan" },
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
    description: "An intelligent document processing system powered by Google's Gemini AI. Supports semantic search, automated summarization, study-material generation, and bilingual Q&A.",
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
    description: "A complete cyber security monitoring system using Flask + ML (Isolation Forest) for anomaly detection, IP blacklisting, risk scoring, and real-time attack visualization dashboard.",
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
    description: "A full-stack Sales Analytics ERP system designed to manage sales data, customers, products, and real-time analytics.",
    image: "/images/projects/sales-analytics-erp.png",
    tags: ["Node.js", "Express.js", "PostgreSQL", "Docker", "React"],
    category: "fullstack",
    github: "https://github.com/Hammad-xureshi/sales-analytics",
    live: "",
    featured: true,
  },
  {
    id: 4,
    title: "Surface X — Bash Recon & Bug Evidence Detection",
    description: "A professional-grade, terminal-based reconnaissance and vulnerability evidence framework built in Bash.",
    image: "/images/projects/Surface-X.png",
    tags: ["Bash", "Penetration Testing", "Reconnaissance", "Security Tools"],
    category: "security",
    github: "https://github.com/Hammad-xureshi/SurfaceX",
    live: "",
    featured: true,
  },
  {
    id: 5,
    title: "Smart Toll management System",
    description: "A complete offline Smart Toll Tax Management System built with Python, featuring automatic license plate recognition.",
    image: "/images/projects/toll.png",
    tags: ["Python", "OCR", "MariaDB"],
    category: "Computer Vision",
    github: "https://github.com/Hammad-xureshi/Smart-Toll-Management-System",
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
    location: "Nawabshah, Pakistan",
    period: "2024 - 2028",
    description: "Pursuing Bachelor's degree in Cyber Security with focus on ethical hacking, network security, Python programming, and AI-based security systems.",
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
    description: "Actively enhancing skills through online courses and hands-on projects in cyber security, ethical hacking, Python development, and machine learning.",
    achievements: [
      "8+ Udemy courses completed",
      "Password cracking with John the Ripper & Hashcat",
      "Social Engineering & Bug Bounty fundamentals",
      "Python web scraping & data structures",
      "Malware analysis & Zero Trust Architecture",
    ],
  },
];

// ============================================================
// 📜 CERTIFICATIONS / COURSES
// ============================================================
export const certifications = [
  { name: "Complete Windows Password Cracking Course", platform: "Udemy", status: "Certified", icon: "🔐" },
  { name: "Password Cracking & Cryptography: John the Ripper & Hashcat", platform: "Udemy", status: "Certified", icon: "🔑" },
  { name: "Ethically Hack Human Mind, Social Engineering Fundamentals", platform: "Udemy", status: "Certified", icon: "🧠" },
  { name: "Introduction to Bug Bounties - Main Web App Hacking", platform: "Udemy", status: "Certified", icon: "🐛" },
  { name: "Python Web Scraping Data Extraction with Beautiful Soup", platform: "Udemy", status: "Certified", icon: "🕷️" },
  { name: "Implement NET Zero Trust Architecture (ZTA) Step by Step", platform: "Udemy", status: "Certified", icon: "🛡️" },
  { name: "Data Structures and Algorithms in Python DSA Course", platform: "Udemy", status: "Certified", icon: "📊" },
  { name: "Practical Malware Analysis for Beginners", platform: "Udemy", status: "Certified", icon: "🦠" },
];

export const testimonials = [];

// ============================================================
// 📧 CONTACT SECTION
// ============================================================
export const contactInfo = [
  { icon: "HiMail", label: "Email", value: "hammadnaeem160@gmail.com", href: "mailto:hammadnaeem160@gmail.com" },
  { icon: "HiPhone", label: "Phone", value: "+92-0328-3507169", href: "tel:+92-0328-3507169" },
  { icon: "HiLocationMarker", label: "Location", value: "Nawabshah, Pakistan", href: "#" },
];

// ============================================================
// 🎯 CTF CHALLENGES SECTION - ADD YOUR CHALLENGES HERE
// ============================================================
/* 
   📝 KESA USE KAREIN:
   1. Challenge photo public/images/ctf/ folder mein rakhain
   2. Niche diye gaye format mein data add karein
   3. 'image' field mein photo ka naam likhein
   
   📋 FORMAT:
   {
     id: unique_id,
     title: "Challenge ka naam",
     category: "Category jaise: Web, Priv Esc, Crypto, etc",
     difficulty: "Easy | Medium | Hard | Insane",
     platform: "TryHackMe | HackTheBox | CTFtime",
     tags: ["tag1", "tag2", "tag3"],
     image: "/images/ctf/photo-ka-naam.png",
     completedDate: "YYYY-MM-DD",
     description: "Challenge ka kafita",
     walkthroughEnabled: true, // Agar aap walkthrough dikhana chahte hain
     walkthrough: {
       steps: [{ title: "Step ka naam", description: "Step ka kafita", code: "Commands" }],
       tools: ["Tools jo use kiye"],
       learnings: ["Kya sikhaya"]
     }
   }
*/

export const ctfData = [
  // ===== EXAMPLE - Is ko hata kar apna challenge daalain =====
  {
    id: 1,
    title: "QUEST CTF 2026 Team: NINE-ELEVEN",
    category: "Web Exploitation, SQL Injection,OSNIT",
    difficulty: "Easy",
    platform: "CTFtime",
    tags: ["SQL Injection", "Web", "OWASP"],
    images: [
      "/images/ctf/ctf4.jpeg",
      "/images/ctf/ctf2.jpeg",
      "/images/ctf/ctf.jpeg",
      "/images/ctf/ctf3.jpeg",
      "/images/ctf/ctf5.jpeg",
      "/images/ctf/ctf6.jpeg"
    ],
    completedDate: "2026-01-29",
    description: "learning throughout this journey.Securing 2nd position in an inter-universities CTF competition has motivated us to further strengthen our skills and actively participate in future cybersecurity challenges.",
    walkthroughEnabled: false,
    walkthrough: {
      steps: [
        {
          title: "Step 1: Recon",
          description: "Kya kiya",
          code: "nmap -sV 10.10.10.10",
        }
      ],
      tools: ["nmap", "gobuster"],
      learnings: ["Lesson 1", "Lesson 2"]
    }
  },
  // ===== APNA ACTUAL CHALLENGE DAALAIN =====
  // Uncomment karein aur edit karein:
  /*
  {
    id: 2,
    title: "Basic Pentesting",
    category: "Privilege Escalation",
    difficulty: "Easy",
    platform: "TryHackMe",
    tags: ["SMB", "SSH", "Priv Esc"],
    image: "/images/ctf/basic-pentesting.png",
    completedDate: "2024-01-15",
    description: "Learn the basics of privilege escalation through SMB enumeration and SSH access.",
    walkthroughEnabled: true,
    walkthrough: {
      steps: [
        {
          title: "Enumeration",
          description: "Used enum4linux to enumerate SMB shares",
          code: "enum4linux -a 10.10.10.10",
        }
      ],
      tools: ["enum4linux", "hydra", "ssh"],
      learnings: ["SMB enumeration basics", "Password brute-forcing"]
    }
  },
  */
];

export const ctfPlatforms = [
  { id: "all", label: "All Platforms", icon: "HiViewGrid" },
  { id: "TryHackMe", label: "TryHackMe", icon: "SiTryhackme", color: "#212C42" },
  { id: "HackTheBox", label: "HackTheBox", icon: "SiHackthebox", color: "#9FEF00" },
  { id: "CTFtime", label: "CTFtime", icon: "HiFlag", color: "#FF6B6B" },
];

export const ctfDifficulties = [
  { id: "all", label: "All Levels" },
  { id: "Easy", label: "Easy", color: "#10b981" },
  { id: "Medium", label: "Medium", color: "#f59e0b" },
  { id: "Hard", label: "Hard", color: "#ef4444" },
  { id: "Insane", label: "Insane", color: "#8b5cf6" },
];

export const ctfCategories = [
  "Web Exploitation",
  "Privilege Escalation",
  "Binary Exploitation",
  "Reverse Engineering",
  "Cryptography",
  "Forensics",
  "OSINT",
  "Network Security",
];

// ============================================================
// 🎨 NAVIGATION LINKS
// ============================================================
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "CTF", href: "#ctf" },
  { name: "Journey", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// ============================================================
// 📄 SEO & META DATA
// ============================================================
export const seoData = {
  title: "Hammad Naeem | Cyber Security Student",
  description: "Portfolio of Hammad Naeem — Cyber Security student at QUEST University specializing in Python, AI-powered security tools, ethical hacking, and intelligent systems.",
  keywords: "hammad naeem, cyber security, python developer, quest university, ethical hacking, nawabshah, portfolio",
  author: "Hammad Naeem",
};

