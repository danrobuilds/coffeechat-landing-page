"use client";
import React from "react";
import { MessageItem } from "./MessageItem";
import { useTheme } from "next-themes";

export function MessagesSection() {
  const messages = [
    { 
      name: "Jeremy Dough", 
      title: "Intern @ BlockRock", 
      text: "Sure, I'd be happy to chat about applying this summer.",
      offset: 0
    },
    { 
      name: "Jane Smith", 
      title: "Analyst @ BigBank", 
      text: "Great to connect! Let me know what you need.",
      offset: 15
    },
    { 
      name: "John Appleseed", 
      title: "Software Eng. @ Google", 
      text: "Shoot me your resume – I'd be glad to refer you.",
      offset: 25
    },
    {
      name: "Alice Johnson",
      title: "Designer @ Spotify",
      text: "I can give feedback on your portfolio any time.",
      offset: 8
    },
    {
      name: "Janet Shu",
      title: "Partner @ IF Ventures",
      text: "Can we chat about the fintech industry?",
      offset: 20
    }
  ];

  const { theme } = useTheme();
  const themeGradientColor = theme === "dark" ? "#26262630" : "#D9D9D955";

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <div className="absolute inset-0 flex flex-wrap gap-3 p-4 justify-center items-start pt-16">
        {messages.map((msg, i) => (
          <div
            key={i}
            className="relative transform transition-all duration-500"
            style={{
              transform: `translateY(${msg.offset}px)`,
            }}
          >
            <MessageItem
              name={msg.name}
              title={msg.title}
              text={msg.text}
              themeGradientColor={themeGradientColor}
              delay={i * 100}
            />
          </div>
        ))}
      </div>
      {/* AI-centric gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white dark:to-gray-900 opacity-40 pointer-events-none" />
    </div>
  );
}