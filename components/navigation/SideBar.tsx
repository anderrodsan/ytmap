"use client";

import { globeData } from "@/data/data";
import ItemCard from "../cards/ItemCard";
import { ScrollArea } from "../ui/scroll-area";
import { useEffect, useState } from "react";
import { ChannelData } from "@/data/channels";
import ChannelCard2 from "../cards/ChannelCard2";
import { IChannel } from "@/lib/types/types";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { promises as fs } from "fs";

export default function SideBar({
  channel,
  data,
  className,
}: {
  channel: IChannel;
  data: any;
  className?: string;
}) {
  //get the series from /data/channel file names
  const [series, setSeries] = useState<string[]>([]);

  useEffect(() => {
    const fetchSeries = async () => {
      const response = await fetch(`/api/series/${channel.id}`);
      const data = await response.json();
      console.log("series", data);
      setSeries(data);
    };
    fetchSeries();
  }, [channel.id]);

  return (
    <div className={className}>
      <ChannelCard2 item={channel} className="" />
      <div className="px-3 pb-3">
        <Select value="vuelta2">
          <SelectTrigger className="w-full rounded-2xl bg-slate-50 font-medium">
            <SelectValue placeholder="Series" />
          </SelectTrigger>
          <SelectContent className="rounded-2xl">
            <SelectGroup>
              {channel.series.map((item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <ScrollArea className="flex-1 md:flex flex-col pr-2">
        <div className="space-y-2">
          {data.map(
            (
              item,
              index // Iterate over the data array
            ) => (
              <div key={index}>
                <ItemCard item={item} />
              </div>
            )
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
