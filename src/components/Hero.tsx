"use client";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/Container";
import renderImg from "../../public/img/render.png";
import { PopupWidget } from "@/components/PopupWidget"; // <--- import your new modal
import { WordRotate } from "@/components/wordrotate"; 


export const Hero = () => {
  // State for toggling the modal
  const [modalOpen, setModalOpen] = useState(false);

  const rotatingWords = [
    "mentors",
    "collaborators",
    "referrals",
    "support"
  ];

  return (
    <>
      {/* Your Main Hero Section */}
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Connect with{" "} 
              <WordRotate 
                words={rotatingWords} 
                className="inline-block text-red-500"
                duration={2500}
              />{" "}
              <br />
              10x faster with AI.
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              {/* Coffeechat is the first AI-powered networking platform that intelligently matches professionals with mutual needs, making networking more efficient than ever before. */}
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-4 text-lg font-medium text-center text-white bg-sky-500 rounded-md hover:bg-sky-600 transition-colors"
              >
                Get Early Access
              </button>
            </div>
          </div>
        </div>

        {/* Right side illustration */}
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div>
            <Image
              src={renderImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>

      {/* Additional Content */}
      {/* <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Join professionals that will be...
          </div>
        </div>
      </Container> */}

      {/* Popup Widget Modal (centered) */}
      <PopupWidget open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};