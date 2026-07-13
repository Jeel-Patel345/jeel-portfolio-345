// Centralized project data — used by both the summary cards and the detail page

export interface Project {
  id: string;
  icon: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  techStack: string[];
  github: string;
  liveDemo: string;
  status: string;
}

const projects: Project[] = [
  {
    id: "passguard",
    icon: "🛡️",
    name: "PassGuard",
    tagline: "AI-Powered Phishing Detection Tool",
    description:
      "AI-powered phishing detection tool that analyzes suspicious URLs using WHOIS, DNS Lookup, SSL Certificate validation, VirusTotal API and Google Safe Browsing.",
    longDescription:
      "PassGuard is a comprehensive cybersecurity tool designed to protect users from phishing attacks. It performs deep multi-layered analysis of any URL by cross-referencing multiple threat intelligence sources in real time. The tool provides an intuitive risk score and detailed breakdown so users can make informed decisions before clicking suspicious links.",
    features: [
      "Real-time URL risk scoring with threat intelligence",
      "WHOIS lookup — domain age, registrar & owner info",
      "DNS analysis — checks DNS records for anomalies",
      "SSL Certificate validation — verifies authenticity & expiry",
      "VirusTotal API integration for malware detection",
      "Google Safe Browsing API cross-reference",
      "Clean, responsive web interface",
      "Detailed breakdown report for each scanned URL",
    ],
    techStack: ["Python", "FastAPI", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Jeel-Patel345/passguard",
    liveDemo: "https://passguard-jeel-12.vercel.app/",
    status: "Live",
  },
  {
    id: "neonshield",
    icon: "🔐",
    name: "NeonShield",
    tagline: "AI-Powered Phishing URL & Domain Analyzer",
    description:
      "AI-powered Phishing URL & Domain Analyzer that detects malicious websites using WHOIS, DNS, SSL Certificate analysis, VirusTotal, and Google Safe Browsing APIs.",
    longDescription:
      "NeonShield is an advanced domain and URL analysis platform built with a modern React frontend and a powerful FastAPI backend. It leverages multiple industry-standard APIs to provide comprehensive threat intelligence. The system flags malicious domains, analyzes their digital footprint, and presents results through a sleek, real-time dashboard — making it a go-to tool for security analysts and curious users alike.",
    features: [
      "Multi-API threat intelligence aggregation",
      "WHOIS domain registration deep analysis",
      "DNS record inspection (A, MX, NS, TXT)",
      "SSL certificate chain validation",
      "VirusTotal scan integration with vendor breakdown",
      "Google Safe Browsing lookup",
      "React-powered real-time results dashboard",
      "Exportable analysis reports",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "React",
      "JavaScript",
      "WHOIS",
      "DNS",
      "SSL",
      "VirusTotal",
    ],
    github: "https://github.com/Jeel-Patel345/phishing-analyzer",
    liveDemo: "https://phishing-analyzer-three.vercel.app",
    status: "Live",
  },
];

export default projects;
