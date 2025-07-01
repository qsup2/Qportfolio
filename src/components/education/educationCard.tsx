"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface EducationCardProps {
  children: ReactNode;
  className?: string;
}

export default function EducationCard({ children, className = "" }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
      className={`bg-white/10 p-6 rounded-lg shadow ${className}`}
    >
      {children}
    </motion.div>
  );
}