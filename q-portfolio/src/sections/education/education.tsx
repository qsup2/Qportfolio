"use client";

import { lectures } from "@/data/educationdata/educationData";
import { COLORS } from "@/components/commen/colors";
import Section from "@/components/commen/section";
import EducationCard from "@/components/education/educationCard";


export default function Education() {
  return (
    <Section title="Education" backgroundColor={COLORS.education.bg}>
      <div className="max-w-4xl mx-auto text-white px-4 py-12 space-y-10">
        {/* 학력 */}
        <EducationCard>
          <h3 className="text-xl font-bold mb-2">🎓 학력</h3>
          <p className="text-lg">충남대학교 생물환경화학과 중퇴</p>
        </EducationCard>

        {/* 외국어 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EducationCard>
            <h3 className="text-xl font-bold mb-2">🌐 영어</h3>
            <p className="text-lg">기초 회화 가능, 개발 관련 문서 해석 가능</p>
            <p className="text-lg">토익 880점</p>
          </EducationCard>
          <EducationCard>
            <h3 className="text-xl font-bold mb-2">🈂️ 일본어</h3>
            <p className="text-lg">회화 가능</p>
          </EducationCard>
        </div>

        {/* 기타 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EducationCard>
            <h3 className="text-xl font-bold mb-2">🚗 운전 경력</h3>
            <p className="text-lg">1종 보통</p>
            <p className="text-lg">10년 이상 (무사고)</p>
          </EducationCard>
          <EducationCard>
            <h3 className="text-xl font-bold mb-2">🚭 비흡연자</h3>
            <p className="text-lg">건강한 생활을 추구합니다</p>
          </EducationCard>
        </div>

        {/* 강의 */}
        <EducationCard>
          <h3 className="text-xl font-bold mb-2">📚 수강한 강의</h3>
          {lectures.map((lecture, index) => (
            <div
              key={index}
              className="bg-white/10 text-white p-4 rounded-lg shadow text-base font-medium"
            >
              {lecture}
            </div>
          ))}
        </EducationCard>
      </div>
    </Section>
  );
}
