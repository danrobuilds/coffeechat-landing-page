"use client";
import Image from "next/image";
import { Container } from "@/components/Container";
import renderImg from "../../public/img/render.png";
import { WordRotate } from "@/components/wordrotate";

export const Hero = () => {
  const rotatingWords = [
    "mentors",
    "collaborators",
    "referrers",
  ];

  return (
    <Container className="flex flex-wrap items-center justify-center">
      <div className="flex flex-col items-center text-center w-full lg:w-5/12 md:mb-8 lg:mb-0">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-textDark lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white font-spartan">
            Connect with
            <br />
            <WordRotate 
              words={rotatingWords} 
              className="inline-block text-primary"
              duration={2500}
            />{" "}
            <br />
            10x faster with AI.
          </h1>
          <p className="py-5 text-xl leading-normal text-textLight lg:text-xl xl:text-2xl dark:text-gray-300">
            {/* Optional: Add a short description back here if needed */}
          </p>

          <div className="flex justify-center mt-4">
            <a
              href="https://apps.apple.com/us/app/coffeechat-ai-networking/id6742692440"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity font-spartan"
            >
              Download on iPhone <span className="ml-2 text-xl">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full lg:w-7/12">
        <div className="max-w-[350px] md:max-w-[400px] lg:max-w-[300px] xl:max-w-[350px]">
          <Image
            src={renderImg}
            width="350"
            height="350"
            className="object-contain w-full h-auto"
            alt="App Screenshot"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </div>
    </Container>
  );
};