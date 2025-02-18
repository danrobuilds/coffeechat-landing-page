import React from 'react';
import { RocketLaunchIcon, BoltIcon } from '@heroicons/react/24/outline';

interface BenefitBullet {
  title: string;
  desc: string;
  icon: React.ReactElement;
}

interface Benefit {
  title: string;
  desc: string;
  image: any;
  bullets: BenefitBullet[];
}

export const benefitOne: Benefit = {
  title: "What are you looking for?",
  desc: "AI analyzes professional profiles, nuanced experience, and mutual interests to help you network as efficiently as possible.",
  image: null,
  bullets: [
    {
      title: "Algorithm",
      desc: "Get connected with professionals who have exactly what you need—and need what you offer. Cut through the noise.",
      icon: React.createElement(RocketLaunchIcon)
    },
    {
      title: "Intent Recognition",
      desc: "AI understands your networking goals and helps you discover high-value connections who have aligned interests.",
      icon: React.createElement(BoltIcon)
    },
  ]
};

export const benefitTwo: Benefit = {
  title: "Make it happen.",
  desc: "Expanding your professional network is as easy as sending a text.",
  image: null,
  bullets: [
    {
      title: "Lightning Fast Outreach",
      desc: "Conduct outreach and schedule meetings all from within the app.",
      icon: React.createElement(RocketLaunchIcon)
    },
    {
      title: "Leverage Extended Networks",
      desc: "Use AI to navigate through extended networks of your connections.",
      icon: React.createElement(BoltIcon)
    },
  ]
}; 