import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import ChannelCard from "../cards/ChannelCard";
import AnimatedCard from "../framer-motion/AnimatedCard";
import AnimatedTitle from "../framer-motion/AnimatedTitle";
import AnimatedText from "../framer-motion/AnimatedText";
import { ChannelData } from "@/data/channels";

export default function TopChannels() {
  return (
    <section className="relative pb-32 md:pb-60 py-20 flex flex-col items-center gap-5 px-5 md:px-20 bg-[#61b1ba]">
      <AnimatedTitle className="text-2xl md:text-4xl font-bold px-5 py-2 rounded-2xl bg-green text-white">
        Top Channels
      </AnimatedTitle>
      <AnimatedText className="text-base md:text-lg">
        Discover your favourite youtubers
      </AnimatedText>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2 z-40">
        {ChannelData.slice(0, 3).map((item, index) => (
          <AnimatedCard
            key={index}
            index={index}
            className="hover:scale-[1.02] transition-all z-40"
          >
            <ChannelCard item={item} className="bg-[#98d7de]" />
          </AnimatedCard>
        ))}
      </div>
      <AnimatedText>
        <Link href={"/channels"} className="z-40">
          <Button>View All</Button>
        </Link>
      </AnimatedText>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute z-0 -bottom-2 lg:-bottom-10 w-full"
      >
        <path
          fill="#087E8B"
          fill-opacity="1"
          d="M0,256L60,240C120,224,240,192,360,165.3C480,139,600,117,720,117.3C840,117,960,139,1080,128C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
