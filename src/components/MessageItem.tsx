"use client";
import React from "react";

interface MessageItemProps {
  name: string;
  title: string;
  text: string;
  delay?: number;
  themeGradientColor?: string;
}

export function MessageItem({ name, title, text, delay = 0, themeGradientColor }: MessageItemProps) {
  return (
    <div 
      className="w-56 p-3 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg backdrop-blur-sm
                 border border-gray-100 dark:border-gray-700
                 hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300
                 relative overflow-hidden group"
      style={{
        opacity: 1,
        transform: 'none'
      }}
    >
      {/* Futuristic accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 via-purple-400 to-pink-400 opacity-75" />
      
      {/* Content with modern spacing */}
      <div className="pl-3">
        <p className="text-sm font-semibold text-gray-800 dark:text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {name}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{title}</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{text}</p>
      </div>

      {/* Hover effect gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
} 