"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

interface OthersCardProps {
  title: string;
  description: string;
}

export default function OthersCard({
  title,
  description,
}: OthersCardProps) {
  return (
    <motion.div
      className="bg-white/10 p-6 rounded-xl shadow"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-base leading-relaxed">{description}</p>
    </motion.div>
  );
}