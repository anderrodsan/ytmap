"use client";

import { IChannel } from "@/lib/types/types";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

type Props = {
  item: IChannel;
  className?: string;
};

const ChannelCard2: React.FC<Props> = ({ item, className }) => {
  // Format the number of videos to 1M or 1k
  const formatNumber = (num: number): string => {
    if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + "M";
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + "k";
    } else {
      return num.toString();
    }
  };

  return (
    <div className="p-3 space-y-5">
      <div className={`flex-start gap-3 ${className}`}>
        <Avatar className="h-12 w-12">
          <AvatarImage src={item.avatar} />
          <AvatarFallback>Y</AvatarFallback>
        </Avatar>
        <div className="opacity-85 w-full">
          <p className="font-bold text-lg">{item.title}</p>
          <p className="text-sm  opacity-80">
            {formatNumber(item.subs)} Subscriptores
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChannelCard2;
