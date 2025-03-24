"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Badge } from "../ui/badge";
import { Play, Youtube } from "lucide-react";

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
      className={`flex rounded-2xl transition-all cursor-pointer p-2 w-full  ${
        item.id == id ? "bg-slate-300" : "hover:bg-slate-200"
      }`}
    >
      <Link
        className="relative cursor-pointer w-full w-[160px] h-[90px]"
        href={item.url}
        target="_blank"
      >
        <Image
          alt="Video Image"
          src={item.thumbnail}
          fill
          sizes="100vw"
          className="object-cover rounded-2xl"
        />
        {/* Darken effect on hover */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white hidden group-hover:block">
          <Play size={48} />
        </div>
      </Link>
      <div className="flex-1 flex flex-col items-start px-3 max-w-60">
        <Badge className="bg-slate-500">Dia {item.id}</Badge>
        <p className="font-semibold text-sm line-clamp-2">{item.title}</p>
        <div className="flex gap-1 whitespace-nowrap text-sm">
          {item.city && <p>{item.city}, </p>}
          {item.country}
        </div>
      </div>
    </div>
  );
}
