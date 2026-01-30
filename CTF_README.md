# CTF Management Guide

Quick reference for managing CTF challenges in your portfolio.

## 📁 File Locations

- **CTF Data**: `src/data/portfolioData.js` (line 342+)
- **CTF Images**: `public/images/ctf/`
- **Components**: `src/components/CTF.jsx`, `CTFCard.jsx`, `CTFDetail.jsx`

## ➕ Adding a New CTF

### 1. Add to portfolioData.js

```javascript
export const ctfData = [
  // ... existing CTFs
  {
    id: 4,  // ← Increment from last ID
    title: "Your CTF Challenge Name",
    category: "Web Exploitation",  // See ctfCategories array
    difficulty: "Medium",  // Easy, Medium, Hard, Insane
    platform: "TryHackMe",  // TryHackMe, HackTheBox, CTFtime
    platformColor: "#212C42",
    completedDate: "2024-02-15",
    tags: ["SQLi", "XSS", "Authentication Bypass"],
    shortDescription: "One-line summary for card view",
    description: "Full detailed description for modal view...",
    images: [
      "/images/ctf/your-ctf-1.png",
      "/images/ctf/your-ctf-2.png"
    ],
    walkthroughEnabled: false,  // Set true when ready
    walkthrough: {
      steps: [],  // Fill when enabling walkthrough
      tools: [],
      learnings: []
    }
  }
]
```

### 2. Add Images

Place screenshots in `public/images/ctf/`:
- `your-ctf-1.png`
- `your-ctf-2.png`
- etc.

**Recommended:** 16:9 aspect ratio, 800x450px minimum

### 3. Test

```bash
npm run dev
```

Navigate to CTF section and verify card displays correctly.

## 🔓 Enabling Walkthroughs

### Step-by-Step

1. Open `src/data/portfolioData.js`
2. Find your CTF in `ctfData` array
3. Change `walkthroughEnabled: false` to `walkthroughEnabled: true`
4. Fill the walkthrough object:

```javascript
walkthrough: {
  steps: [
    {
      title: "Reconnaissance",
      description: "Scan target with nmap",
      code: "nmap -sV -sC target.com",
      output: "Found ports 22, 80, 443..." // optional
    },
    {
      title: "Exploitation",
      description: "Execute SQL injection",
      code: "sqlmap -u 'http://target.com/login' --dump"
    }
  ],
  tools: ["nmap", "sqlmap", "burpsuite"],
  learnings: [
    "Always check for input validation",
    "Use parameterized queries to prevent SQLi"
  ]
}
```

### Walkthrough Components

**Required:**
- `steps[]`: Array of step objects
  - `title`: Step name
  - `description`: What you're doing
  - `code`: Command or code snippet (optional)
  - `output`: Expected result (optional)

**Optional:**
- `tools[]`: Array of tool names
- `learnings[]`: Array of key takeaways

## 🎨 Difficulty Colors

Auto-applied based on difficulty:

| Difficulty | Color | Hex |
|------------|-------|-----|
| Easy | Green | #10b981 |
| Medium | Orange | #f59e0b |
| Hard | Red | #ef4444 |
| Insane | Purple | #8b5cf6 |

## 🏷️ Available Categories

From `ctfCategories`:
- Web Exploitation
- Privilege Escalation
- Exploitation
- Reverse Engineering
- Cryptography
- Forensics
- OSINT
- Binary Exploitation

## 🖼️ Image Guidelines

**Format:** PNG, JPG, or WebP  
**Size:** 800x450px (16:9) or larger  
**Content:** Terminal screenshots, challenge GUIs, results  
**Naming:** `challenge-name-1.png`, `challenge-name-2.png`

## 🔄 Platform Icons

Platform badges auto-detect:
- `TryHackMe` → TryHackMe icon
- `HackTheBox` → HackTheBox icon
- `CTFtime` → Flag icon

## ❌ Removing a CTF

1. Delete entry from `ctfData` array
2. Delete images from `public/images/ctf/`
3. Dev server hot-reloads automatically

## 🐛 Troubleshooting

### CTF Not Showing
- Check ID is unique
- Verify images exist in `public/images/ctf/`
- Check browser console for errors

### Walkthrough Not Appearing
- Ensure `walkthroughEnabled: true`
- Verify `steps` array not empty
- Check modal scrolled down

### Image Not Loading
- Verify path starts with `/images/ctf/`
- Check file exists in `public/images/ctf/`
- Fallback image loads automatically

## 📊 Quick Stats

Update stats in `CTF.jsx`:
```javascript
<div className="text-2xl font-bold text-gradient">
  {ctfData.length}  {/* Auto-counts CTFs */}
</div>
```

Manual stats (edit as needed):
```javascript
<div className="text-2xl font-bold text-gradient">Top 2%</div>
<div className="text-sm text-gray-400">TryHackMe Rank</div>
```

## 🚀 Best Practices

1. **Add CTFs chronologically** (newest first or last)
2. **Use consistent naming** for images
3. **Test before enabling walkthroughs** 
4. **Keep descriptions concise** in card view
5. **Add detailed info** in modal description
6. **Use realistic tags** (limit 5-7 per CTF)

---

*For detailed implementation info, see [walkthrough.md](file:///home/hammad/.gemini/antigravity/brain/647b2799-0e51-461d-89ec-53557700a449/walkthrough.md)*
