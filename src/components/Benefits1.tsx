import Image from "next/image";
import React from "react";
import { Container }  from "@/components/Container";
import { AnimatedBeamMultipleOutputDemo } from "@/components/AnimatedBeam";
import { RocketLaunchIcon, BoltIcon, ChartBarIcon } from '@heroicons/react/24/outline';


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
const Benefits1 = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  return (
      <Container className="flex flex-wrap mb-10 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 order-last lg:order-first`}>
          <div>
            <AnimatedBeamMultipleOutputDemo className="object-cover" />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
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

const benefitsData = {
  title: "What are you looking for?",
  desc: "AI analyzes professional profiles, nuanced experience, and mutual interests to help you network as efficiently as possible.",
  bullets: [
    {
      title: "Algorithm",
      desc: "Get connected with professionals who have exactly what you need—and need what you offer. Cut through the noise.",
      icon: <RocketLaunchIcon />
    },
    {
      title: "Intent Recognition",
      desc: "AI understands your networking goals and helps you discover high-value connections who have aligned interests.",
      icon: <BoltIcon />
    },
  ]
};

export { benefitsData, Benefits1 };
