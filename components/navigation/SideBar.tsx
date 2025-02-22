"use client";

import { globeData } from "@/data/data";
import ItemCard from "../cards/ItemCard";
import { ScrollArea } from "../ui/scroll-area";
import { useState } from "react";
import { ChannelData } from "@/data/channels";
import ChannelCard2 from "../cards/ChannelCard2";
import { IChannel } from "@/lib/types/types";

export default function SideBar({
  channel,
  className,
}: {
  channel: IChannel;
  className?: string;
}) {
  const [data, setData] = useState(globeData);

  const handleClick = () => {
    console.log("Before:", data);
    setData((prevData) => [...prevData].reverse());
    console.log("After:", data);
  };

  return (
    <div className={className}>
      <ChannelCard2
        item={channel}
        className="bg-green text-white rounded-2xl"
      />
      <p className="hidden md:block font-bold text-lg py-3">List of Videos</p>

      <ScrollArea className="flex-1 md:flex flex-col pr-2">
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
