// ============================================================
// 🎯 CTF CHALLENGES SECTION - ADD YOUR CHALLENGES HERE
// ============================================================
/* 
   📝 KESA USE KAREIN:
   1. Challenge photos public/images/ctf/ folder mein rakhain
   2. Niche diye gaye format mein data add karein
   
   📋 FORMAT (Multiple Images):
   {
     id: unique_id,
     title: "Challenge ka naam",
     category: "Category jaise: Web, Priv Esc, Crypto, etc",
     difficulty: "Easy | Medium | Hard | Insane",
     platform: "TryHackMe | HackTheBox | CTFtime",
     tags: ["tag1", "tag2", "tag3"],
     images: ["/images/ctf/photo1.png", "/images/ctf/photo2.png", ...], // Multiple images
     completedDate: "YYYY-MM-DD",
     description: "Challenge ka kafita",
     walkthroughEnabled: true,
     walkthrough: {
       steps: [{ title: "Step ka naam", description: "Step ka kafita", code: "Commands" }],
       tools: ["Tools jo use kiye"],
       learnings: ["Kya sikhaya"]
     }
   }
*/

export const ctfData = [
  // ===== EXAMPLE WITH MULTIPLE IMAGES =====
  {
    id: 1,
    title: "Your Challenge Title",
    category: "Web Exploitation",
    difficulty: "Easy",
    platform: "TryHackMe",
    tags: ["SQL Injection", "Web", "OWASP"],
    images: ["/images/ctf/photo1.png", "/images/ctf/photo2.png", "/images/ctf/photo3.png"],
    completedDate: "2024-01-15",
    description: "Is challenge mein aapne kya sikhya aur kaise kiya.",
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
    title: "Kenobi - SUID Privilege Escalation",
    category: "Privilege Escalation",
    difficulty: "Easy",
    platform: "TryHackMe",
    tags: ["Samba", "ProFTPD", "SUID"],
    images: ["/images/ctf/kenobi-1.png", "/images/ctf/kenobi-2.png", "/images/ctf/kenobi-3.png"],
    completedDate: "2024-01-20",
    description: "Exploiting misconfigured Samba shares and leveraging SUID binaries for privilege escalation.",
    walkthroughEnabled: true,
    walkthrough: {
      steps: [
        {
          title: "Reconnaissance",
          description: "Start with nmap scan",
          code: "nmap -sV 10.10.10.10",
        }
      ],
      tools: ["nmap", "smbclient", "ssh"],
      learnings: ["SMB enumeration", "SUID exploitation"]
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

