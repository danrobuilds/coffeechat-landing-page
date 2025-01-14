"use client";
import React from "react";
import Image from "next/image";

export function CollaboratorsStrip() {
  return (
    <div className="mt-10 flex flex-col space-y-2 items-center justify-center">
      <h3 className="text-lg font-semibold dark:text-white">
        Join professionals that are your potential...
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
        {/* Example placeholders – you can adjust images or logos */}
        <Image
          src="/logos/harvard-logo.png"
          alt="Harvard"
          width={60}
          height={60}
        />
        <Image
          src="/logos/stanford-logo.png"
          alt="Stanford"
          width={60}
          height={60}
        />
        <Image
          src="/logos/mit-logo.png"
          alt="MIT"
          width={60}
          height={60}
        />
        <Image
          src="/logos/ycombinator.png"
          alt="Y Combinator"
          width={60}
          height={60}
        />
        <Image
          src="/logos/nvidia.png"
          alt="Nvidia"
          width={60}
          height={60}
        />
        <Image
          src="/logos/bessemer.png"
          alt="Bessemer Partners"
          width={60}
          height={60}
        />
        <Image
          src="/logos/bain.png"
          alt="Bain & Company"
          width={60}
          height={60}
        />
      </div>
    </div>
  );
}