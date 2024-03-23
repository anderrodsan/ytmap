"use client";

import { globeData } from "@/data/data";
import ItemCard from "../cards/ItemCard";
import { ScrollArea } from "../ui/scroll-area";
import { ArrowUpDown, ChevronLeft } from "lucide-react";
import { ChannelData } from "@/data/channels";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { useState } from "react";

export default function SideBar() {
  const [data, setData] = useState(globeData);

  const handleClick = () => {
    console.log("Before:", data);
    setData((prevData) => [...prevData].reverse());
    console.log("After:", data);
  };

  const item = ChannelData[0];

  return (
    <div className="w-1/3 h-full hidden lg:flex flex-col py-5">
      <div className="flex justify-between items-center pr-2">
        <div className="flex-1 flex-start py-3">
          <Link href={"/channels"}>
            <ChevronLeft />
          </Link>
          <Badge className="text-base flex-start gap-2">
            {item.title} <span className="text-sm">({item.videos} Videos)</span>{" "}
          </Badge>
          <p className="font-bold pl-3"></p>
        </div>
        <div
          className="cursor-pointer flex gap-2 items-center"
          onClick={handleClick}
        >
          <ArrowUpDown size={20} />
        </div>
      </div>

      <ScrollArea className="flex-1 flex flex-col pr-2">
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
