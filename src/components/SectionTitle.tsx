import React from "react";
import { Container } from "@/components/Container";

interface SectionProps {
  title: string;
  items: {
    icon?: React.ReactNode;
    label: string;
  }[];
}

interface SectionTitleProps {
  sections: SectionProps[];
}

const sections = [
  {
    title: "Collaborators",
    items: [
      { icon: <span>🏫</span>, label: "Harvard" },
      { icon: <span>🎓</span>, label: "Stanford" },
      { icon: <span>📚</span>, label: "MIT" },
      { icon: <span>🚀</span>, label: "Y Combinator" },
    ],
  },
  {
    title: "Job Referrers / Recruiters",
    items: [
      { icon: <span>💻</span>, label: "NVIDIA" },
      { icon: <span>📊</span>, label: "Bain & Company" },
      { icon: <span>💼</span>, label: "Bessemer Venture Partners" },
    ],
  },
  {
    title: "Mentors",
    items: [
      { icon: <span>🧑‍💼</span>, label: "GP at IF Ventures" },
      { icon: <span>👩‍💻</span>, label: "VP at NVIDIA" },
      { icon: <span>📈</span>, label: "CEO at ABLSoft" },
    ],
  },
];

export const SectionTitle = () => {
  return (
    <Container className="flex w-full flex-col mt-8 space-y-12">
      <div className="grid grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <h3 className="ax-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {section.title}
            </h3>
            <div className="mt-4 space-y-4">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                >
                  {item.icon && (
                    <div className="flex-shrink-0">{item.icon}</div>
                  )}
                  <span className="text-base">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};