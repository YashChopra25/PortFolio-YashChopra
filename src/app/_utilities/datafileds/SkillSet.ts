export type SkillItem = {
  name: string;
  icon?: string; // We'll use this to map to react-icons or lucide icons
};

export type SkillCategory = {
  category: string;
  skills: SkillItem[];
};

export const skillSet: SkillCategory[] = [
  {
    category: "Web3 & Blockchain",
    skills: [
      { name: "Solidity" },
      { name: "Ethers.js" },
      { name: "Wagmi" },
      { name: "Solana (SPL Tokens)" },
      { name: "Web3.js" },
      { name: "Hardhat" },
    ],
  },
  {
    category: "Front-end Development",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Framer Motion" },
    ],
  },
  {
    category: "Back-end Development",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Next.js (API Routes)" },
      { name: "Python" },
      { name: "Flask" },
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Supabase" },
      { name: "AWS (Lambda, EC2, S3)" },
      { name: "GCP" },
    ],
  },
  {
    category: "Tools & Libraries",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "NextAuth" },
      { name: "React Hook Form" },
      { name: "Shadcn UI" },
      { name: "RESTful APIs" },
    ],
  },
];
