"use client";

import { COLORS } from "@/components/commen/colors";
import Section from "@/components/commen/section";
import HeartscopyBackEndCard from "@/components/projects/heartscopyBackEndCard";

import HeartscopyCard from "@/components/projects/heartscopyCard";
import ParttimeCard from "@/components/projects/parttimeCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Section title="Projects" backgroundColor={COLORS.projects.bg}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <HeartscopyCard></HeartscopyCard>
          <ParttimeCard></ParttimeCard>
          <HeartscopyBackEndCard></HeartscopyBackEndCard>
          {/* <BackendCard></BackendCard> */}
        </motion.div>
      </div>
    </Section>
  );
}
