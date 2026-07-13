// Skill tooltip data — maps each skill to its project usage info
// Update this file whenever you add new projects!

export interface SkillInfo {
  emoji: string;
  name: string;
  usedIn: string[];       // project names
  usage: string;          // one-liner on how it's used
}

const skillsData: SkillInfo[] = [
  // ── Cyber Security ──────────────────────────────────────────
  {
    emoji: "🔒",
    name: "Cyber Security",
    usedIn: ["PassGuard", "NeonShield"],
    usage: "Core domain — both projects are built to detect and prevent cyber threats.",
  },
  {
    emoji: "🛡️",
    name: "Ethical Hacking",
    usedIn: ["PassGuard", "NeonShield"],
    usage: "Threat simulation mindset used to design phishing detection logic.",
  },
  {
    emoji: "🌐",
    name: "Network Security",
    usedIn: ["PassGuard", "NeonShield"],
    usage: "DNS record analysis & network-layer inspection for malicious domains.",
  },
  {
    emoji: "🔍",
    name: "Vulnerability Assessment",
    usedIn: ["PassGuard", "NeonShield"],
    usage: "URL risk scoring engine cross-references multiple threat intel sources.",
  },
  {
    emoji: "🧪",
    name: "Penetration Testing",
    usedIn: [],
    usage: "Actively learning — will be applied in upcoming red-team projects.",
  },
  {
    emoji: "🔐",
    name: "Web Security",
    usedIn: ["PassGuard", "NeonShield"],
    usage: "SSL certificate validation & Google Safe Browsing API integration.",
  },

  // ── Networking ───────────────────────────────────────────────
  {
    emoji: "🌍",
    name: "CCNA",
    usedIn: ["NeonShield"],
    usage: "Network fundamentals applied in DNS & routing analysis features.",
  },
  {
    emoji: "📡",
    name: "Computer Networking",
    usedIn: ["PassGuard", "NeonShield"],
    usage: "Understanding of how packets travel used to analyze domain traffic.",
  },
  {
    emoji: "🔌",
    name: "TCP/IP",
    usedIn: ["NeonShield"],
    usage: "Protocol knowledge used for network-level threat pattern analysis.",
  },
  {
    emoji: "📶",
    name: "Routing & Switching",
    usedIn: [],
    usage: "Foundational skill — will be applied in network monitoring projects.",
  },
  {
    emoji: "🖥️",
    name: "DNS",
    usedIn: ["PassGuard", "NeonShield"],
    usage: "DNS lookup & record inspection is a key detection layer in both projects.",
  },
  {
    emoji: "📨",
    name: "DHCP",
    usedIn: [],
    usage: "Foundational networking skill — planned for use in homelab projects.",
  },

  // ── Cloud ────────────────────────────────────────────────────
  {
    emoji: "🪣",
    name: "AWS S3",
    usedIn: [],
    usage: "Learning — planned for static file hosting & project asset storage.",
  },
  {
    emoji: "⚙️",
    name: "AWS EC2",
    usedIn: [],
    usage: "Learning — planned for deploying FastAPI backends on the cloud.",
  },
  {
    emoji: "🔑",
    name: "AWS IAM",
    usedIn: [],
    usage: "Learning — will manage access control for future cloud deployments.",
  },

  // ── Hardware & System Admin ───────────────────────────────────
  {
    emoji: "🖥️",
    name: "Computer Hardware",
    usedIn: [],
    usage: "Used in personal lab setup for cybersecurity practice environments.",
  },
  {
    emoji: "🔧",
    name: "Hardware Troubleshooting",
    usedIn: [],
    usage: "Hands-on experience in diagnosing and fixing system-level issues.",
  },
  {
    emoji: "💽",
    name: "OS Installation",
    usedIn: [],
    usage: "Regularly sets up Linux & Windows environments for security testing.",
  },
  {
    emoji: "🪟",
    name: "Windows Server (MCSA)",
    usedIn: [],
    usage: "Server administration skills — applicable in enterprise security projects.",
  },

  // ── Programming & Development ─────────────────────────────────
  {
    emoji: "🐍",
    name: "Python",
    usedIn: ["PassGuard", "NeonShield"],
    usage: "Primary backend language — all API logic, analysis engines & scripts.",
  },
  {
    emoji: "⚛️",
    name: "React",
    usedIn: ["NeonShield"],
    usage: "Built the real-time results dashboard & UI for NeonShield.",
  },
  {
    emoji: "🌐",
    name: "HTML5",
    usedIn: ["PassGuard"],
    usage: "Structured the full frontend interface of PassGuard.",
  },
  {
    emoji: "🎨",
    name: "CSS3",
    usedIn: ["PassGuard"],
    usage: "Styled the PassGuard UI with responsive, clean layouts.",
  },
  {
    emoji: "📜",
    name: "JavaScript",
    usedIn: ["PassGuard", "NeonShield"],
    usage: "Frontend interactivity, API calls & dynamic result rendering.",
  },
  {
    emoji: "🚀",
    name: "FastAPI",
    usedIn: ["PassGuard", "NeonShield"],
    usage: "Powers the backend REST API for URL analysis in both projects.",
  },
  {
    emoji: "🗄️",
    name: "SQL",
    usedIn: [],
    usage: "Planned for use in upcoming projects requiring data persistence.",
  },
  {
    emoji: "💻",
    name: "Git & GitHub",
    usedIn: ["PassGuard", "NeonShield"],
    usage: "Version control & open-source hosting for all projects.",
  },
];

export default skillsData;
