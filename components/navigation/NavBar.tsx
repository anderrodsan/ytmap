"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

export default function NavBar() {
  const { setTheme } = useTheme();
  setTheme("light");

  return (
    <div className="sticky bg-stone-50 top-0 w-full border-b flex justify-between gap-3 items-center py-4 px-5 md:px-[60px] z-50">
      <Link href={"/"} className="flex-start gap-3 cursor-pointer">
        <div className="w-10 h-10">
          <Image
            src={"/icons/video.png"}
            alt="Logo"
            height={100}
            width={100}
            style={{ objectFit: "contain" }}
          />
        </div>

        <p className="text-xl font-bold text-green">YTMap</p>
      </Link>
      <div className="hidden md:flex items-center gap-5">
        <Link href={"/channels"}>
          <Button variant={"ghost"} className="text-base">
            Channels
          </Button>
        </Link>
        <Link href={"/channels"} className="pl-10">
          <Button className="text-base">Be featured</Button>
        </Link>
      </div>

      <div className="md:hidden">
        <Menu />
      </div>
    </div>
  );
}
