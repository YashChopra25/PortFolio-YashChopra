import type { StaticImageData } from "next/image";
import HoodPadImage from "@/../public/hoodpad_project.jpg";
import VaultWillImage from "@/../public/inheritance_protocol_project.jpg";
import ChainViewImage from "@/../public/Chain_view.jpeg";
import YatirlyImage from "@/../public/Batify_Project.png";
import YatifyImage from "@/../public/Yatify_Project.png";
import DraggingImage from "@/../public/Dragging.png";
import PortfolioImage from "@/../public/PortFolio_project.png";
import YoutubeImage from "@/../public/youtube_project.png";
import FirebaseImage from "@/../public/firebase_project.png";
import BlogImage from "@/../public/blog_posting.png";

export type ProjectCategory = "Web3" | "Full Stack";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights?: string[];
  image: StaticImageData;
  liveUrl?: string;
  githubUrl: string;
  tech: string[];
  category: ProjectCategory;
  featured?: boolean;
  badge?: string;
};

export const projects: Project[] = [
  {
    slug: "hoodpad",
    title: "HoodPad",
    tagline: "Non-custodial memecoin launchpad on Robinhood Chain",
    description:
      "Launch an ERC-20 in one transaction, trade it on a bonding curve from block one, and graduate it into a Uniswap V2 pool with burned LP. Built for Robinhood Chain (Arbitrum Orbit) with no backend or indexer — the contracts are the database.",
    highlights: [
      "One-transaction ERC-20 launches with on-chain metadata, images and links",
      "Constant-product bonding curve with virtual ETH reserves that graduates to Uniswap V2",
      "Optional anti-bot, anti-whale, transfer-tax and ownership-renounce protections",
      "Foundry + OpenZeppelin contracts with 58+ tests, batched JSON-RPC reads and EIP-6963 wallet discovery",
    ],
    image: HoodPadImage,
    liveUrl: "https://hoodpad-a-robinhood-meme-launchpad.vercel.app/",
    githubUrl: "https://github.com/YashChopra25/HoodPad---A-Robinhood-meme-launchpad",
    tech: ["Solidity", "Foundry", "OpenZeppelin", "Uniswap V2", "Next.js", "TypeScript", "EIP-6963"],
    category: "Web3",
    featured: true,
    badge: "New",
  },
  {
    slug: "vaultwill",
    title: "VaultWill",
    tagline: "Inheritance protocol on Solana — silence is the trigger",
    description:
      "A decentralized dead-man's-switch will. Seal documents, keys and final messages on IPFS, name your heirs and appoint custodians. Go quiet for long enough and, once a custodian quorum confirms, the program hands over exactly what you sealed to exactly who you named.",
    highlights: [
      "Encrypted files on IPFS with content hashes recorded on-chain",
      "Weighted beneficiary allocations across multiple heirs",
      "M-of-N custodian quorum — no single party can trigger a release",
      "Inactivity timer the owner resets by checking in; fully non-custodial with no admin keys",
    ],
    image: VaultWillImage,
    liveUrl: "https://inheritance-protocol-rahp.vercel.app/",
    githubUrl: "https://github.com/YashChopra25/inheritance_protocol",
    tech: ["Rust", "Anchor", "Solana", "IPFS", "Next.js", "TypeScript"],
    category: "Web3",
    featured: true,
    badge: "New",
  },
  {
    slug: "chainview",
    title: "ChainView",
    tagline: "Real-time Solana analytics dashboard",
    description:
      "A Web3 analytics platform that surfaces real-time blockchain data — track transactions, monitor wallet activity and analyse network trends through a responsive, data-rich interface.",
    image: ChainViewImage,
    liveUrl: "https://chain-view-web3.vercel.app/",
    githubUrl: "https://github.com/YashChopra25/ChainView-Web3",
    tech: ["Solana", "Web3.js", "Metaplex", "Anza Wallet Adapter", "Next.js", "TailwindCSS"],
    category: "Web3",
  },
  {
    slug: "yatirly",
    title: "Yatirly",
    tagline: "URL shortener & QR code generator",
    description:
      "Shorten long links into clean, shareable URLs and instantly generate scannable QR codes for them. A React frontend over an Express + Prisma API, written end-to-end in TypeScript.",
    image: YatirlyImage,
    liveUrl: "https://yatirly.vercel.app/",
    githubUrl: "https://github.com/YashChopra25/Yatirly",
    tech: ["React", "Express", "Prisma", "TypeScript"],
    category: "Full Stack",
  },
  {
    slug: "yatify",
    title: "Yatify",
    tagline: "Real-time collaboration & chat",
    description:
      "A MERN real-time collaboration app using Socket.IO for instant messaging, Kafka and RabbitMQ for event-driven asynchronous workflows, and Docker for consistent, scalable deployments.",
    image: YatifyImage,
    githubUrl: "https://github.com/YashChopra25/yatify",
    tech: ["React", "Express", "MongoDB", "Socket.IO", "Kafka", "RabbitMQ"],
    category: "Full Stack",
  },
  {
    slug: "dragging",
    title: "Dragging",
    tagline: "Drag-and-drop task board",
    description:
      "A kanban-style task manager with smooth drag-and-drop via react-beautiful-dnd, accessible Radix UI primitives, Redux Toolkit state and JWT-based authentication.",
    image: DraggingImage,
    liveUrl: "https://todos-credential.vercel.app/",
    githubUrl: "https://github.com/YashChopra25/TodosCredential",
    tech: ["Next.js", "Express", "Redux Toolkit", "react-beautiful-dnd", "React Hook Form", "TailwindCSS"],
    category: "Full Stack",
  },
  {
    slug: "portfolio",
    title: "This Portfolio",
    tagline: "The site you're looking at",
    description:
      "A futuristic Next.js portfolio with an aurora grid backdrop, a circular View Transitions theme switch, framer-motion reveals and a Nodemailer-powered contact form.",
    image: PortfolioImage,
    liveUrl: "https://yashchopraportfolio.vercel.app/",
    githubUrl: "https://github.com/YashChopra25/PortFolio-YashChopra",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Nodemailer"],
    category: "Full Stack",
  },
  {
    slug: "youtube-clone",
    title: "YouTube Clone",
    tagline: "Video browsing & playback",
    description:
      "Recreates YouTube's core experience — category feeds, channel pages, search and in-app playback with React Player — styled with Tailwind CSS.",
    image: YoutubeImage,
    liveUrl: "https://youtubeclone-devyash.vercel.app/",
    githubUrl: "https://github.com/YashChopra25/Youtube_Clone",
    tech: ["React", "React Router", "Axios", "TailwindCSS"],
    category: "Full Stack",
  },
  {
    slug: "firebase-todo",
    title: "Firebase Todo",
    tagline: "Real-time task manager",
    description:
      "A Next.js todo app with Firebase authentication and real-time data sync, so tasks update instantly across sessions.",
    image: FirebaseImage,
    liveUrl: "https://firebaseappbyyash.vercel.app",
    githubUrl: "https://github.com/YashChopra25/Todo_list_using_Firebase",
    tech: ["Next.js", "Firebase", "TailwindCSS"],
    category: "Full Stack",
  },
  {
    slug: "blog-app",
    title: "Blog Posting App",
    tagline: "Write, manage & publish",
    description:
      "A blogging platform for creating, editing and sharing posts, with Appwrite handling auth, database and storage, Redux Toolkit for state and React Hook Form for editing flows.",
    image: BlogImage,
    liveUrl: "https://blogpostingproject-devyash.vercel.app/",
    githubUrl: "https://github.com/YashChopra25/blogpostingproject",
    tech: ["React", "Appwrite", "Redux Toolkit", "React Hook Form"],
    category: "Full Stack",
  },
];
