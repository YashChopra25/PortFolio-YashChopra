export type SkillItem = {
  name: string;
  /** Path under the devicon CDN; skills without one render initials */
  icon?: string;
  /** Monochrome icon that needs inverting on dark backgrounds */
  mono?: boolean;
};

export type SkillCategory = {
  category: string;
  skills: SkillItem[];
};

export const skillSet: SkillCategory[] = [
  {
    category: "Web3 & Blockchain",
    skills: [
      { name: "Solidity", icon: "solidity/solidity-original.svg", mono: true },
      { name: "Rust", icon: "rust/rust-original.svg", mono: true },
      { name: "Anchor" },
      { name: "Foundry" },
      { name: "Solana (SPL)" },
      { name: "Ethers.js" },
      { name: "Wagmi" },
      { name: "Web3.js" },
      { name: "Hardhat" },
      { name: "IPFS" },
    ],
  },
  {
    category: "Front-end",
    skills: [
      { name: "React", icon: "react/react-original.svg" },
      { name: "Next.js", icon: "nextjs/nextjs-original.svg", mono: true },
      { name: "TypeScript", icon: "typescript/typescript-original.svg" },
      { name: "TailwindCSS", icon: "tailwindcss/tailwindcss-original.svg" },
      { name: "Framer Motion", icon: "framermotion/framermotion-original.svg", mono: true },
      { name: "HTML5", icon: "html5/html5-original.svg" },
      { name: "CSS3", icon: "css3/css3-original.svg" },
    ],
  },
  {
    category: "Back-end",
    skills: [
      { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
      { name: "Express", icon: "express/express-original.svg", mono: true },
      { name: "Next.js API", icon: "nextjs/nextjs-original.svg", mono: true },
      { name: "Python", icon: "python/python-original.svg" },
      { name: "Flask", icon: "flask/flask-original.svg", mono: true },
      { name: "Django REST", icon: "djangorest/djangorest-original.svg" },
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "mysql/mysql-original.svg" },
      { name: "Supabase", icon: "supabase/supabase-original.svg" },
      { name: "AWS", icon: "amazonwebservices/amazonwebservices-plain-wordmark.svg", mono: true },
      { name: "GCP", icon: "googlecloud/googlecloud-original.svg" },
    ],
  },
  {
    category: "DevOps & Tooling",
    skills: [
      { name: "Git", icon: "git/git-original.svg" },
      { name: "GitHub", icon: "github/github-original.svg", mono: true },
      { name: "Docker", icon: "docker/docker-original.svg" },
      { name: "GitHub Actions", icon: "githubactions/githubactions-original.svg" },
      { name: "Jenkins", icon: "jenkins/jenkins-original.svg" },
      { name: "Vercel", icon: "vercel/vercel-original.svg", mono: true },
    ],
  },
  {
    category: "Libraries & Patterns",
    skills: [
      { name: "Redux Toolkit", icon: "redux/redux-original.svg" },
      { name: "Socket.IO", icon: "socketio/socketio-original.svg", mono: true },
      { name: "NextAuth" },
      { name: "React Hook Form" },
      { name: "Shadcn UI" },
      { name: "REST APIs" },
    ],
  },
];
