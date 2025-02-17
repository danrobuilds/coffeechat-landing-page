import React from "react";
import { Container } from "@/components/Container";
import { UserIcon, UserGroupIcon, UserCircleIcon } from '@heroicons/react/24/outline';

interface SectionProps {
  title: string;
  items: {
    desc?: string;
  }[];
}

export const SectionTitle = () => {
  return (
    <Container className="flex w-full flex-col mt-4 mb-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {sections.map((section, idx) => (
          <div 
            key={idx} 
            className="relative p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 overflow-hidden group hover:shadow-2xl transition-all duration-300"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-purple-500/5 to-pink-500/5 dark:from-sky-500/10 dark:via-purple-500/10 dark:to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Glowing orb effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-sky-500/20 dark:bg-sky-500/30 rounded-full blur-3xl group-hover:bg-sky-400/30 transition-colors duration-500" />
            
            <div className="relative z-10">
              <h3 className="mb-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-500">
                {section.title}
              </h3>
              
              <div className="space-y-4">
                {section.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="flex items-center space-x-4 p-3 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-sky-500/10 to-purple-500/10 flex items-center justify-center">
                      {itemIdx === 0 ? (
                        <UserIcon className="w-6 h-6 text-gray-700 dark:text-gray-100" />
                      ) : itemIdx === 1 ? (
                        <UserGroupIcon className="w-6 h-6 text-gray-700 dark:text-gray-100" />
                      ) : (
                        <UserCircleIcon className="w-6 h-6 text-gray-700 dark:text-gray-100" />
                      )}
                    </div>
                    <div>
                      {item.desc && (
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {item.desc}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const sections = [
  {
    title: "Pioneers",
    items: [
      {desc: "AI Researchers Shaping Tomorrow"},
      {desc: "Startup Founders Breaking Boundaries"},
      {desc: "Tech Innovators Leading Change"}
    ],
  },
  {
    title: "Collaborators",
    items: [
      {desc: "Next-Gen Product Visionaries"},
      {desc: "Engineering Trailblazers"},
      {desc: "Creative Tech Architects"}
    ],
  },
  {
    title: "Job Referrers",
    items: [
      {desc: "Web3 Revolutionaries"},
      {desc: "AI Ethics Leaders"},
      {desc: "Future-Forward Builders"}
    ],
  },
];