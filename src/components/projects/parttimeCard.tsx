"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ParttimeCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-row-reverse">
      <motion.div
        className="bg-white/10 p-6 rounded-xl shadow-md text-white space-y-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center space-x-4">
          <h3 className="mt-8 text-2xl font-bold text-red-700 mb-13">
            KCindustrial
          </h3>
        </div>
        <ul className="text-base leading-relaxed list-disc pl-5 space-y-10">
          <li>
            <strong>지남 소프트 단기 프리랜서</strong>
          </li>
          <li>
            <strong>사용 기술:</strong> NEXT.js  TypeScript , antDisign
          </li>
          <li>
            <strong>개발 기간:</strong> 2개월 (개발, 유지보수)
          </li>
          <li>
            <strong>주요 기능:</strong>
            KC industrial 외주개발 및 납품
          </li>

          <li>
            <strong>총 인원:</strong> 6인
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
      <motion.div
        className="absolute top-0 right-[420px] w-[460px] bg-black/80 text-white rounded-xl p-8 shadow-2xl z-20"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -30 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isHovered ? "auto" : "none" }}
      >
        <h4 className="text-2xl font-bold text-red-400 mb-6">상세 내용</h4>
        <p className="text-base text-gray-200 leading-loose whitespace-pre-line">
          실제 기업을 대상으로 한 외주 프론트 개발 경험
          <br />
          요구사항 분석부터 UI 구성까지 진행
          <br />
          SpringBoot 백엔드와 API 명세 맞춰 협업
          <br />
          컴포넌트 재사용과 타입 안정성 확보에 집중
          <br />
          Ant Design을 활용한 효율적인 UI 구현 경험
          <br />
          실제 납품 프로젝트에서 프론트의 책임과 품질 관리 중요성을 학습
        </p>
      </motion.div>
    </div>
  );
}
