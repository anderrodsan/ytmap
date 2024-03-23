import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import ChannelCard from "../cards/ChannelCard";
import AnimatedCard from "../framer-motion/AnimatedCard";
import AnimatedTitle from "../framer-motion/AnimatedTitle";
import AnimatedText from "../framer-motion/AnimatedText";
import { ChannelData } from "@/data/channels";
import { Card } from "../ui/card";
import Image from "next/image";

export default function Value() {
  const creators = [
    {
      title: "Maximize Visibility",
      description:
        "Ensure all your videos receive attention, combatting the issue of buried content within your channel.",
    },
    {
      title: "Improve Engagement",
      description:
        "Reach new audiences as users explore the map, discovering your content based on location, niche, and popularity.",
    },
  ];

  const viewers = [
    {
      title: "Discover New Content",
      description:
        "Easily find videos that might otherwise be lost in a cluttered channel, making exploration more rewarding.",
    },
    {
      title: "Seamless Navigation",
      description:
        "Enjoy a hassle-free browsing experience, encouraging interaction and exploration across a diverse range of videos.",
    },
  ];

  return (
    <div>
      <section className="relative py-20 w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 px-5 md:px-20 bg-green text-white">
        <div className="flex flex-col gap-5 items-center md:items-start w-full">
          <AnimatedTitle className="text-2xl md:text-4xl font-bold px-5 py-3 rounded-2xl bg-[#3fa2ad] text-white">
            Value for Creators
          </AnimatedTitle>
          {creators.map((item, index) => (
            <AnimatedCard
              key={index}
              index={index}
              className="hover:scale-[1.02] transition-all"
            >
              <Card className="p-5 bg-[#98d7de]">
                <p className="font-bold text-lg">{item.title}</p>
                <p className="max-w-[65ch]">{item.description}</p>
              </Card>
            </AnimatedCard>
          ))}
        </div>
        <div className="relative w-full h-[200px] md:h-full overflow-hidden rounded-2xl">
          <Image
            src={"/img/creator.jpg"}
            alt="Creators"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </section>

      <section className="pb-20 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 w-full px-5 md:px-20 bg-green text-white">
        <AnimatedText className=" hidden md:block relative w-full h-[200px] md:h-full overflow-hidden rounded-2xl">
          <Image
            src={"/img/mapview.png"}
            alt="Viewers"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </AnimatedText>
        <div className="flex flex-col gap-5 items-center md:items-start">
          <p className="text-2xl md:text-4xl font-bold px-5 py-2 rounded-2xl bg-[#3fa2ad]">
            Value for Audience
          </p>
          {viewers.map((item, index) => (
            <AnimatedCard
              key={index}
              index={index}
              className="hover:scale-[1.02] transition-all"
            >
              <Card className="p-5 bg-[#98d7de]">
                <p className="font-bold text-lg">{item.title}</p>
                <p className="max-w-[65ch]">{item.description}</p>
              </Card>
            </AnimatedCard>
          ))}
        </div>
        <AnimatedText className="md:hidden relative w-full h-[200px] md:h-full overflow-hidden rounded-2xl">
          <Image
            src={"/img/mapview.png"}
            alt="Viewers"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </AnimatedText>
      </section>
    </div>
  );
}
