"use client";

import { useEffect, useState, useRef } from "react";
import AboutMe from "@/sections/aboutme/aboutme";
import Education from "@/sections/education/education";
import Others from "@/sections/others/others";
import Projects from "@/sections/projects/projects";
import Skills from "@/sections/skills/skills";
import { COLORS } from "@/components/commen/colors";
import ScreenShot from "@/sections/screenshotsection/screenshot";

const SECTIONS = [
  {
    id: "aboutme",
    label: "About Me",
    color: COLORS.aboutme.text,
    hover: COLORS.aboutme.hover,
  },
  {
    id: "education",
    label: "Education",
    color: COLORS.education.text,
    hover: COLORS.education.hover,
  },
  {
    id: "skills",
    label: "Skills",
    color: COLORS.skills.text,
    hover: COLORS.skills.hover,
  },
  {
    id: "projects",
    label: "Projects",
    color: COLORS.projects.text,
    hover: COLORS.projects.hover,
  },
    {
    id: "screenshot",
    label: "ScreenShot",
    color: COLORS.screenshot.text,
    hover: COLORS.screenshot.hover,
  },
  {
    id: "others",
    label: "Others",
    color: COLORS.others.text,
    hover: COLORS.others.hover,
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("aboutme");

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sectionElements = SECTIONS.map((s) => document.getElementById(s.id));

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.05, 
      }
    );

    sectionElements.forEach((el) => el && observer.current?.observe(el));

    return () => observer.current?.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative">
      <div className="fixed top-1/3 right-6 z-50 bg-white/30 backdrop-blur-lg rounded-xl shadow-2xl p-4 space-y-2 border border-white/40">
        {SECTIONS.map((section) => (
       <button
       key={section.id}
       onClick={() => scrollToSection(section.id)}
       className={`block w-full text-lg font-bold transition-all duration-300 ${
         activeSection === section.id ? `${section.color} scale-125` : "text-gray-700"
       }`}
     >
       {section.label}
     </button>
        ))}
      </div>
      <div id="aboutme">
        <AboutMe />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
        <div id="screenshot">
        <ScreenShot />
      </div>
      <div id="others">
        <Others />
      </div>
    </main>
  );
}
