"use client";

import { COLORS } from "@/components/commen/colors";
import Section from "@/components/commen/section";
import { motion } from "framer-motion";
import Image from "next/image";

const screenshotImages = [
  "/images/screenshot1.png",
  "/images/screenshot2.png",
  "/images/screenshot3.png",
  "/images/screenshot4.png",
  "/images/screenshot5.png",
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ScreenShot() {
  return (
    <Section title="ScreenShot" backgroundColor={COLORS.screenshot.bg}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {screenshotImages.map((src, index) => (
            <motion.div key={index} variants={itemVariants} className="rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src={src}
                alt={`screenshot-${index + 1}`}
                width={300}
                height={600}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}