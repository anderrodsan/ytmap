"use client";

import { IChannel } from "@/lib/types/types";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

type Props = {
  item: IChannel;
  className?: string;
};

const ChannelCard: React.FC<Props> = ({ item, className }) => {
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
    <Link href={"/map"} className="">
      <Card className={`p-5 flex gap-3 cursor-pointer z-40 ${className}`}>
        <Avatar>
          <AvatarImage src={item.avatar} />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className="w-full">
          <p className="font-bold text-lg">{item.title}</p>
          <p className="line-clamp-1">{item.description}</p>
          <div className="flex-start gap-2 text-slate-800 font-bold text-sm pt-1">
            <p>
              <span className="text-base">{formatNumber(item.subs)}</span> Subs
            </p>
            <p>
              <span className="text-base">{formatNumber(item.videos)}</span>{" "}
              Videos
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ChannelCard;
