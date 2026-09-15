export type ExperienceItem = {
  position: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
  skills: string[];
};

export const ExperienceData: ExperienceItem[] = [
  {
    position: "Software Engineer",
    company: "Tech Ventures",
    location: "Remote",
    period: "Feb 2025 — Present",
    current: true,
    highlights: [
      "Built a trading platform for a client.",
      "Created and minted a Solana SPL token.",
    ],
    skills: ["Solana", "Ethereum", "Web3", "React", "Next.js", "Express", "Node.js", "DRF", "Python", "Flask", "Supabase"],
  },
  {
    position: "Software Engineer",
    company: "Black Coffer",
    location: "Remote",
    period: "Aug 2024 — Jan 2025",
    highlights: [
      "Developed a seamless UI for the client using React.js with the React Flow library.",
      "Implemented user authentication and authorization with NextAuth.js.",
      "Built a dynamic form builder using React.js and Tailwind CSS.",
      "Built a dynamic diagram builder supporting sequence, class, ER and many other diagram types.",
    ],
    skills: ["React", "Express", "Node.js", "GCP", "EC2", "MongoDB", "Elasticsearch", "AWS", "Neo4j", "Docker", "Jenkins", "GitHub", "GitLab", "Jira"],
  },
  {
    position: "Full Stack Developer Intern",
    company: "Qunit Technologies Pvt. Ltd",
    location: "Remote",
    period: "Jan 2024 — Jul 2024",
    highlights: [
      "Designed and developed responsive interfaces with Next.js and Tailwind CSS for a new online learning and teaching platform.",
      "Implemented serverless backend logic in Next.js API routes, using AWS Lambda for data processing and MongoDB Atlas for storage.",
      "Integrated authentication and authorization with NextAuth.js, providing secure login/logout and session management.",
      "Wrote Jest unit tests for frontend components and integration tests for API routes.",
      "Took part in Agile scrum meetings, code reviews and Git-based collaboration.",
    ],
    skills: ["Next.js", "NextAuth", "AWS", "MongoDB", "Jest"],
  },
  // {
  //   position: "MERN Developer",
  //   company: "Dokopi",
  //   location: "Remote",
  //   period: "May 2024 — Aug 2024",
  //   highlights: [
  //     "Developed and launched a marketplace for xerox stores, Dokopi, to serve the college campus community with separate panels for merchant partners, admins, and users.",
  //     "Implemented a user authentication system using NextAuth.js for authentication and authorization.",
  //     "Used Next.js for frontend and Express.js for backend development.",
  //     "Integrated agile payment price method for merchant and customer, calculating price at distinct quantities.",
  //   ],
  //   skills: ["React", "Express", "Node", "EC2", "MongoDB", "AWS", "Neo4j", "Docker", "GitHub Actions", "GitHub", "Jira"],
  // },
];
