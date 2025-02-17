import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full p-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl shadow-2xl border border-gray-800/50">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-pink-500/10 opacity-50" />
            
            <div className="relative z-10">
              <p className="text-2xl leading-normal text-gray-200">
                &ldquo;The <Mark>AI-powered matching</Mark> is incredible. Found two co-founders and an angel investor in my first week.&rdquo;
              </p>
              <Avatar
                image={userOneImg}
                name="Alex Chen"
                title="Founder, AI Startup (YC W24)"
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full p-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl shadow-2xl border border-gray-800/50">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-pink-500/10 opacity-50" />
            
            <div className="relative z-10">
              <p className="text-2xl leading-normal text-gray-200">
                "Finally, a platform that understands <Mark>genuine connection</Mark>. This is networking reimagined."
              </p>
              <Avatar
                image={userTwoImg}
                name="Sarah Liu"
                title="ML Engineer at Anthropic"
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full p-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl shadow-2xl border border-gray-800/50">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-pink-500/10 opacity-50" />
            
            <div className="relative z-10">
              <p className="text-2xl leading-normal text-gray-200">
                "The future of <Mark>professional networking</Mark>. LinkedIn feels outdated in comparison."
              </p>
              <Avatar
                image={userThreeImg}
                name="David Park"
                title="Tech Lead at Stripe"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { children: React.ReactNode }) {
  return (
    <mark className="bg-gradient-to-r from-sky-500/20 to-purple-500/20 text-sky-400 rounded-md px-2 py-1">
      {props.children}
    </mark>
  );
}
