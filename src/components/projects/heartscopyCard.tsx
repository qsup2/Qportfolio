"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaGooglePlay } from "react-icons/fa";

export default function HeartscopyCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex">
      {/* ✅ 기존 카드 */}
      <motion.div
        className="bg-white/10 p-6 rounded-xl shadow-md text-white space-y-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
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
              <strong>사용 기술:</strong> Flutter (프론트엔드), Firebase
              (백엔드)
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
              <strong>담당 역할:</strong> 전반적인 앱 아키텍처 설계부터
              퍼블리싱, 배포까지 전 과정 수행
            </li>
            <li>
              <strong>성과 및 배운 점:</strong>
              Flutter 숙련도 향상, 앱 설계 및 Firebase 연동 실습, Google Play /
              App Store 동시 배포 경험, 실서비스 유지보수 경험
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
        </div>
      </motion.div>

      <motion.div
        className="absolute top-0 left-[440px] w-[460px] bg-black/80 text-white rounded-xl p-8 shadow-2xl z-20"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 30 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isHovered ? "auto" : "none" }}
      >
        <h4 className="text-2xl font-bold text-pink-400 mb-6">상세 내용</h4>
        <p className="text-base text-gray-200 leading-loose whitespace-pre-line">
          개발 목적및 과정
          <br />
          GetX를 이용한 상태관리 서버간 통신 횟수 절약
          <br />
          앱스토어 배포를 위한 apple login기능을 구현
          <br />
          앱스토어 배포를 위한 회원 탈퇴기능 모든데이터 삭제기능 구현
          <br />
          picker 라이브러리를 이용한 사진 업로드기능 구현
          <br />
          반복되는 코드 위젯으로 만들어서 시스템 부담을 최소화
          <br />
          효율적 폴더 구조를 만들어 유지보수에 최적화
          <br />
          Flutter Android 빌드 환경에서 Gradle 플러그인 적용·호환성(Flutter Gradle Plugin, Kotlin 버전 매핑)과 keystore 설정 문제 해결을 통해 안정적인 AAB 서명 및 배포 파이프라인을 구축
          <br />
          CI/CD 자동화를 고려한 캐시 무효화·재시도 로직(Exponential Backoff) 도입으로 서버 다운·네트워크 장애에도 견고한 앱 실행 환경을 확보
          <br />
          -------------------------------------------------------------------------
          <br />
          비슷한 생각을 가진 사람들을 어떻게 연결될 수 있을까에 대한 해답
          <br />
          사용자가 직접 벨런스게임 생성 가능
          <br />
          밸런스 게임을 통해 각자만의 생각을 데이터베이스에 등록
          <br />
          서버에서 같은 질문에 같은 대답을 한 사용자들을 종합
          <br />
          많이 일치하는 순서대로 사용자 화면에 보여짐
          <br />
          다른 사용자의 닉네임과 자기소개 사진피드를 프로필로 확인후
          <br />
          쳇팅 기능을 통해 대화를 시작함
          <br />
          앱스토어 등록을 위해 사용자 차단 신고, 게시물 신고 기능을 firebase를
          통해 구현함
          <br />
          페이지 로드 속도를 준수하게 하기 위해서 widget별 리렌더링을 요한
          부분만 하도록함

        </p>
      </motion.div>
    </div>
  );
}
