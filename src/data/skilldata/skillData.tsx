import { JSX } from "react";
import { GiRaven } from "react-icons/gi";
import { SiFirebase, SiFlutter, SiGit, SiGithub, SiGitlab, SiJavascript, SiJirasoftware, SiMariadb, SiMysql, SiNextdotjs, SiPostgresql, SiPostman, SiReact, SiSlack, SiSpring, SiSpringboot, SiTailwindcss, SiTypescript } from "react-icons/si";


export interface skillItem {
  name: string;
  icon: JSX.Element;
}

export const frontendSkills: skillItem[] = [
  { name: "Flutter", icon: <SiFlutter className="text-sky-400" /> },
  { name: "React", icon: <SiReact className="text-cyan-300" /> },
  { name: "ReactNative", icon: <SiReact className="text-cyan-300" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
];

export const backendSkills = [
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "JPA", icon: <SiSpring className="text-green-300" /> },
  { name: "MyBatis",icon: <GiRaven className="text-black-400" />},
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-300" /> },
  { name: "MariaDB", icon: <SiMariadb className="text-blue-500" /> },
  { name: "Postgresql", icon: <SiPostgresql className="text-blue-500" /> },
];

export const tools = [
  { name: "Git", icon: <SiGit className="text-red-400" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "Jira", icon: <SiJirasoftware className="text-indigo-300" /> },
  { name: "Slack", icon: <SiSlack className="text-pink-300" /> },
  { name: "gitlab", icon: <SiGitlab className="text-orange-300" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
];