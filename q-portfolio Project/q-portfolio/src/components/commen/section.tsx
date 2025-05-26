import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  backgroundColor?: string;
  children?: ReactNode;
}

export default function Section({
  title,
  backgroundColor = "bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900",
  children,
}: SectionProps) {
  return (
    <section className={`${backgroundColor} py-24 relative overflow-hidden`}>
      {/* 배경 효과 */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500 via-purple-600 to-transparent animate-pulse blur-2xl" />

      <div className="relative max-w-5xl mx-auto px-4 bg-white/5 backdrop-blur-md rounded-xl shadow-2xl ring-1 ring-white/10">
        {title && (
          <h1 className="text-4xl font-extrabold text-white text-center py-12 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
            {title}
          </h1>
        )}
        <div className="pb-12">{children}</div>
      </div>
    </section>
  );
}
