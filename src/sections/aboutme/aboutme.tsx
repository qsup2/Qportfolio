"use client";
import { COLORS } from "@/components/commen/colors";
import Section from "../../components/commen/section";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <Section backgroundColor={COLORS.aboutme.bg}>
      <motion.div
        className="w-full min-h-[60vh] mt-40 text-white px-6 py-20 grid grid-cols-[80px_180px_1fr] gap-10 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-xl font-semibold tracking-widest rotate-[-90deg] origin-left whitespace-nowrap text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          FULLSTACK DEV
        </motion.h2>

        <div className="rounded-xl overflow-hidden border-4 border-white shadow-xl w-44 h-44 flex items-center justify-center">
          <motion.img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover scale-105"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1.05, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>

        <div className="space-y-6">
          <motion.p
            className="text-xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            주도면밀한 개발자
          </motion.p>

          <motion.p
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Jung Kyu Sup | 정규섭
          </motion.p>

          <motion.div
            className="bg-white/10 p-6 rounded-xl shadow-inner space-y-2 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h3 className="text-lg font-semibold">📞 연락처</h3>
            <p className="text-base">📧 이메일: qsup1128@gmail.com</p>
            <p className="text-base">📱 전화번호: 010-3382-5674</p>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}