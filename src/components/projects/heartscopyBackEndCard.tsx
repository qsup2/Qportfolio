"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function HeartscopyBackEndCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex">
      {/* 기존 카드 */}
      <motion.div
        className="bg-white/10 p-6 rounded-xl shadow-md text-white space-y-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center space-x-4 mb-10 mt-5">
          <motion.img
            src="/heartscopy.png"
            alt="Heartscopy Logo"
            className="w-16 h-16 object-cover scale-110 rounded"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1.1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <h3 className="text-2xl font-bold text-pink-500">Heartscopy</h3>
        </div>
        <ul className="text-base leading-relaxed list-disc pl-5 space-y-10">
          <li>
            <strong>사용 기술:</strong> Spring boot (백엔드),
          </li>
          <li>
            <strong>주요 기능:</strong>
            질문 등록, 삭제, 무한스크롤 조회, 랜덤 조회, 최신 등록 조회, 최다
            선택 조회, 선택, 삭제, mybatis 동일 질문 동일 사용자 통합 쿼리 반환,
          </li>
          <li>
            <strong>참여 인원:</strong> 1명 (백엔드 구성)
          </li>
          <li>
            <strong>담당 역할:</strong> 전반적인 앱 아키텍처 설계부터 퍼블리싱,
            배포까지 전 과정 수행
          </li>
          <li>
            <strong>성과 및 배운 점:</strong>
            SpringBoot 실력 향상, flutter와 연계 실력 향상, 백엔드와 프론트엔드
            연결 경험, 기존 앱 리팩토링, 서버 다변화,
          </li>
        </ul>

        <div className="w-full flex items-center justify-end space-x-6 mt-4">
          <a
            href="https://github.com/qsup2/heartscopy-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-800 hover:text-gray-100 transition"
          >
            <FaGithub size={30} />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </div>
      </motion.div>

      {/* 오른쪽 상세 설명 박스 */}
      <motion.div
        className="absolute top-0 left-[420px] w-[460px] bg-black/80 text-white rounded-xl p-8 shadow-2xl z-20"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 30 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isHovered ? "auto" : "none" }}
      >
        <h4 className="text-2xl font-bold text-pink-400 mb-6">상세 내용</h4>
        <p className="text-base text-gray-200 leading-loose whitespace-pre-line">
          백엔드 아키텍처 설계 및 구현
          <br />
          MyBatis를 이용한 효율적 쿼리 작성
          <br />
          firebase에서 발행한 토큰을 통한 보안기능 구현
          <br />
          무한스크롤 및 다양한 조회 API 구현
          <br />
          Flutter 프론트엔드와의 원활한 데이터 통신 경험
          <br />
          서비스 리팩토링 및 확장성 고려한 서버 구성
          <br />
          실서비스 배포 및 유지보수 경험
        </p>
      </motion.div>
    </div>
  );
}
