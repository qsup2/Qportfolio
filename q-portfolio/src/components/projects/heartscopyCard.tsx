"use client";

import { motion } from "framer-motion";
import { FaGithub, FaGooglePlay } from "react-icons/fa";

export default function HeartscopyCard() {
  return (
    <motion.div
      className="bg-white/10 p-6 rounded-xl shadow-md text-white space-y-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <div className="flex items-center space-x-4">
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
          <strong>사용 기술:</strong> Flutter (프론트엔드), Firebase (백엔드)
        </li>
        <li>
          <strong>주요 기능:</strong>
          구글 / 애플 로그인, 별명 및 소개글 작성, 공통 질문 등록/삭제, 회원
          매칭, 채팅, 차단 기능, 사진 등록/삭제, 검색
        </li>
        <li>
          <strong>참여 인원:</strong> 1명 (단독 기획 · 디자인 · 개발 · 배포)
        </li>
        <li>
          <strong>담당 역할:</strong> 전반적인 앱 아키텍처 설계부터 퍼블리싱,
          배포까지 전 과정 수행
        </li>
        <li>
          <strong>성과 및 배운 점:</strong>
          Flutter 숙련도 향상, 앱 설계 및 Firebase 연동 실습, Google Play / App
          Store 동시 배포 경험, 실서비스 유지보수 경험
        </li>
      </ul>

      <div className="w-full flex items-center justify-end space-x-6 mt-4">
        <a
          href="https://github.com/qsup2/heartscopy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-800 hover:text-gray-100 transition"
        >
          <FaGithub size={30} />
          <span className="text-sm font-medium">GitHub</span>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.heartscopy.heartscopy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition"
        >
          <FaGooglePlay size={30} />
          <span className="text-sm font-medium">Play Store</span>
        </a>
      </div>
    </motion.div>
  );
}
