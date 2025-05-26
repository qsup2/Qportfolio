"use client";

import { othersData } from "@/data/othersdata/othersData";
import { COLORS } from "@/components/commen/colors";
import Section from "@/components/commen/section";
import OthersCard from "@/components/others/othersCard";

export default function Others() {
  return (
    <Section title="Others" backgroundColor={COLORS.others.bg}>
      <div className="max-w-4xl mx-auto px-6 py-16 text-white space-y-10">
        {othersData.map((item, index) => (
          <OthersCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  );
}
