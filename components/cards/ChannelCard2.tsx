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
    <Link href={"/map"}>
      <div className={`p-5 flex gap-3 ${className}`}>
        <Avatar>
          <AvatarImage src={item.avatar} />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className="w-full">
          <p className="font-bold text-lg">{item.title}</p>
          <div className="flex-start gap-2 font-semibold text-sm pt-1 opacity-85">
            <p>
              <span className="text-base">{formatNumber(item.subs)}</span> Subs
            </p>
            <p>
              <span className="text-base">{formatNumber(item.videos)}</span>{" "}
              Videos
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChannelCard2;
