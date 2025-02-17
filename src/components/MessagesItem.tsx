"use client";
import React, { useRef, useState, useEffect } from "react";
import { MagicCard } from "@/components/MagicCard";

interface MessageItemProps {
  name: string;
  title: string;
  text: string;
  themeGradientColor?: string; // Optional prop for theme-based gradient color
//   avatar: string;
}

export function MessageItem({ name, title, text, themeGradientColor }: MessageItemProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Copy ref.current to a variable inside the effect
    const element = ref.current;
    
    if (element) {
      // Use the copied variable here
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          element.classList.add('animate-fade-in');
        }
      });

      observer.observe(element);

      // Use the copied variable in cleanup
      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transform transition-all duration-700 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
        {/* <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="absolute top-0 left-0 w-10 h-10 rounded-full object-cover border-2 border-white"
        /> */}
        
      <MagicCard
        className="cursor-pointer p-4 w-64 shadow-xl text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800"
        gradientColor={themeGradientColor || "#ffffff30"}
      >
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{title}</p>
        <p className="mt-2 text-sm">{text}</p>
      </MagicCard>
    </div>
  );
}