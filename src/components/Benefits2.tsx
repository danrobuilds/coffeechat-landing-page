import Image from "next/image";
import React from "react";
import { Container }  from "@/components/Container";
import { MessagesSection } from "./MessagesSection";
import { UserGroupIcon, ArrowsRightLeftIcon, ClockIcon } from '@heroicons/react/24/outline';

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}

export const benefitsData = {
  title: "Make it happen.",
  desc: "Expanding your professional network is as easy as sending a text.",
  image: null,
  bullets: [
    {
      title: "Lightning Fast Outreach",
      desc: "Conduct outreach and schedule meetings all from within the app.",
      icon: <UserGroupIcon />
    },
    {
      title: "Leverage Extended Networks",
      desc: "Use AI to navigate through extended networks of your connections.",
      icon: <ArrowsRightLeftIcon />
    },
  ]
};

const Benefits2 = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  return (
    <Container className="flex flex-wrap mb-5 lg:gap-10 lg:flex-nowrap">
      <div className={`flex flex-wrap items-start w-full lg:w-1/2 ${
        data.imgPos === "right" ? "lg:justify-end" : ""
      }`}>
        <div>
          <div className="flex flex-col w-full mt-20">
            <h3 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {data.title}
            </h3>

            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              {data.desc}
            </p>
          </div>

          <div className="w-full mt-5">
            {data.bullets.map((item, index) => (
              <Benefit key={index} title={item.title} icon={item.icon}>
                {item.desc}
              </Benefit>
            ))}
          </div>
        </div>
      </div>

      <div className={`flex items-center justify-center w-full lg:w-1/2 min-h-[650px] ${
        props.imgPos === "right" ? "lg:order-first" : ""
      }`}>
        <div className="relative w-full h-full">
          <MessagesSection />
        </div>
      </div>
    </Container>
  );
};

function Benefit(props: any) {
  return (
    <div className="flex items-start mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 rounded-md w-11 h-11"
        style={{
          background: "linear-gradient(135deg, #0ea5e9 0%, #ef4444 100%)",
        }}>
        {React.cloneElement(props.icon, {
          className: "w-7 h-7 text-white",
        })}
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {props.title}
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {props.children}
        </p>
      </div>
    </div>
  );
}

export { Benefits2 };
