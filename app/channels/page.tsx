import ChannelCard from "@/components/cards/ChannelCard";
import SearchBar from "@/components/filtering/SearchBar";
import AnimatedCard from "@/components/framer-motion/AnimatedCard";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ChannelData } from "@/data/channels";
import { SlidersHorizontal } from "lucide-react";
import React from "react";

export default function Channels() {
  const channels = ChannelData;

  return (
    <div className="relative w-full pb-5 px-5 md:px-[60px] gradient1 flex flex-col">
      <div className="space-y-3 sticky top-0 bg-stone-50 py-5 pt-10 z-40">
        <p className="title">Discover Channels</p>
        <p className="text-sm md:text-base">
          Discover your favourite youtubers and explore their videos in our
          interactive map
        </p>
        <div className="flex-between gap-5 py-3">
          <div className="md:w-1/2">
            <SearchBar />
          </div>
          <Button
            variant={"secondary"}
            className="font-bold whitespace-nowrap flex-start gap-2"
          >
            <SlidersHorizontal size={16} /> Filter By
          </Button>
        </div>
      </div>

      <Separator />
      <ScrollArea className="flex-grow -mr-2 pr-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-3 px-2">
          {channels.map((item, index) => (
            <AnimatedCard
              key={index}
              index={index}
              className="hover:scale-[1.02] transition-all"
            >
              <ChannelCard item={item} className="bg-[#98d7de]" />
            </AnimatedCard>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
