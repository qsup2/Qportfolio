"use client";

import { backendSkills, frontendSkills, tools } from "@/data/skilldata/skillData";
import { COLORS } from "@/components/commen/colors";
import Section from "@/components/commen/section";
import { motion } from "framer-motion";


export default function Skills() {
  return (
    <Section title="Skills" backgroundColor={COLORS.skills.bg}>
      <div className="max-w-5xl mx-auto px-6 py-16 text-white space-y-16">
        {[
          { title: "Frontend", items: frontendSkills },
          { title: "Backend", items: backendSkills },
          { title: "Tools & Collaboration", items: tools },
        ].map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {section.items.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center bg-white/10 p-4 rounded-xl shadow-md transition"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <div className="text-lg font-semibold">{skill.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
}