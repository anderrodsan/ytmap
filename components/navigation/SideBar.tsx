"use client";

import { globeData } from "@/data/data";
import ItemCard from "../cards/ItemCard";
import { ScrollArea } from "../ui/scroll-area";
import { useState } from "react";
import { ChannelData } from "@/data/channels";
import ChannelCard2 from "../cards/ChannelCard2";

export default function SideBar({ className }: { className?: string }) {
  const [data, setData] = useState(globeData);

  const handleClick = () => {
    console.log("Before:", data);
    setData((prevData) => [...prevData].reverse());
    console.log("After:", data);
  };

  const item = ChannelData[0];

  return (
    <div className={className}>
      <ChannelCard2 item={item} className="bg-green/30  rounded-t-2xl" />
      <p className="hidden md:block font-bold text-lg py-3">List of Videos</p>

      <ScrollArea className="hidden md:flex-1 md:flex flex-col pr-2">
        <div className="space-y-5">
          {data.map((item, index) => (
            <div key={index}>
              <ItemCard item={item} />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
