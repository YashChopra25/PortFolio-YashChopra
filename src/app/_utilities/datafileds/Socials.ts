import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

export type Social = {
  label: string;
  handle: string;
  href: string;
  icon: IconType;
};

export const socials: Social[] = [
  { label: "GitHub", handle: "@YashChopra25", href: "https://github.com/YashChopra25", icon: FaGithub },
  { label: "LinkedIn", handle: "in/yashchopra25", href: "https://www.linkedin.com/in/yashchopra25/", icon: FaLinkedin },
  { label: "X", handle: "@YashChopra25", href: "https://twitter.com/YashChopra25", icon: RiTwitterXFill },
  { label: "LeetCode", handle: "YashChopra25", href: "https://leetcode.com/YashChopra25/", icon: SiLeetcode },
];

export const email = "dev.yashchopra@gmail.com";
