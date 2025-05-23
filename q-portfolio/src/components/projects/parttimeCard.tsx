"use client";

import { motion } from "framer-motion";
export default function ParttimeCard() {
  return (
    <motion.div
      className="bg-white/10 p-6 rounded-xl shadow-md text-white space-y-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <div className="flex items-center space-x-4">
        <h3 className="mt-8 text-2xl font-bold text-red-700 mb-13">KCindustrial</h3>
      </div>
      <ul className="text-base leading-relaxed list-disc pl-5 space-y-10">
        <li>
          <strong>사용 기술:</strong> NEXT.js typesript, antDisign 
        </li>
        <li>
          <strong>주요 기능:</strong>
          KC industrial 외주개발 및 납품
        </li>
        <li>
          <strong>지남 소프트</strong>
        </li>
        <li>
          <strong>담당 역할:</strong> 프론트앤드 개발
        </li>
        <li>
          <strong>성과 및 배운 점:</strong>
          NEXT.js typesript 숙련, Springboot기반 백엔드 개발과의 협업 경험
        </li>
      </ul>
    </motion.div>
  );
}
