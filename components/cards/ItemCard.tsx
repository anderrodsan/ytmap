"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Badge } from "../ui/badge";
import { Youtube } from "lucide-react";

export default function ItemCard({ item }: { item: any }) {
  const pathname = usePathname();

  const searchParams = useSearchParams()!;
  const id = searchParams.get("id");
  const router = useRouter();

  // create a query to select the id
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const cardRef = useRef<HTMLDivElement>(null);

  const scrollToCard = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    if (item.id === id) {
      scrollToCard();
    }
  }, [item.id, id, scrollToCard]);

  return (
    <div
      ref={cardRef} // Set the ref to the card element
      onClick={() => {
        router.push(
          `${pathname}?${createQueryString("id", item.id.toString())}`
        );
      }}
      className={`grid grid-cols-2 rounded-2xl dark:hover:bg-slate-900 transition-all cursor-pointer ${
        item.id == id
          ? "bg-[#087e8bd2] text-white hover:bg-green/70 dark:hover:bg-slate-700"
          : "hover:bg-slate-100"
      }`}
    >
      <Link
        className="relative cursor-pointer rounded-2xl overflow-hidden group"
        href={item.url}
        target="_blank"
      >
        <Image
          alt="Video Image"
          src={item.thumbnail}
          fill
          sizes="100vw"
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
        {/* Darken effect on hover */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white hidden group-hover:block">
          <Youtube size={50} />
        </div>
      </Link>
      <div className="flex flex-col items-start p-4">
        <Badge className="bg-[#087E8B]">Dia {item.id}</Badge>
        <p className="font-bold line-clamp-2">{item.title}</p>
        <div className="flex gap-1 whitespace-nowrap">
          {item.city && <p>{item.city}, </p>}
          {item.country}
        </div>
        <p className="text-sm">23 Dic 2023</p>
      </div>
    </div>
  );
}
