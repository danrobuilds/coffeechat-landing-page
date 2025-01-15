"use client";
import React from "react";
import { MessageItem } from "@/components/MessagesItem"; // adjust import path as needed
import { useTheme } from "next-themes"; // if using theme for colors

export function MessagesSection() {
  const messages = [
    { 
      name: "Jeremy Dough", 
      title: "Intern @ BlockRock", 
      text: "Sure, I'd be happy to chat about applying this summer." 
    },
    { 
      name: "Jane Smith", 
      title: "Analyst @ BigBank", 
      text: "Great to connect! Let me know what you need." 
    },
    { 
      name: "John Appleseed", 
      title: "Software Eng. @ Google", 
      text: "Shoot me your resume – I’d be glad to refer you." 
    },
    {
      name: "Alice Johnson",
      title: "Designer @ Spotify",
      text: "I can give feedback on your portfolio any time."
    },
    {
        name: "Janet Shu",
        title: "Partner @ IF Ventures",
        text: "Can we chat about the fintech industry?"
      }
  ];

  const { theme } = useTheme();
  const themeGradientColor = theme === "dark" ? "#26262630" : "#D9D9D955";

  // Helper to get random positions within container bounds (in percentages or pixels)
  const getRandomMargins = () => ({
    marginLeft: `${Math.random() * 50}px`,  // adjust range as needed
    marginTop: `${Math.random() * 30}px`,   // adjust range as needed
  });

  return (
    <div className="relative mt-20">
      <div className="flex flex-wrap w-full h-auto gap-4">
        {messages.map((msg, i) => {
          const margins = getRandomMargins();
          return (
            <div
              key={i}
              className="relative"
              style={margins}
            >
              <MessageItem
                name={msg.name}
                title={msg.title}
                text={msg.text}
                themeGradientColor={themeGradientColor}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}