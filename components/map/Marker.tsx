"use client";

import { Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { Badge } from "../ui/badge";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function MarkerItem({ item }: { item: any }) {
  const searchParams = useSearchParams()!;
  const id = searchParams.get("id") || "1";
  //numerical value of the id
  const numId = parseInt(id, 10);

  const newIcon = L.divIcon({
    html: `<div class="w-6 h-6 bg-slate-400 text-white flex items-center justify-center rounded-full">${item.id}</div>`,
    iconAnchor: [12, 12], // Adjust the anchor point
    className: "leaflet-marker-icon", // Add className to remove unwanted styling
  });

  const seenIcon = L.divIcon({
    html: `<div class="w-6 h-6 bg-slate-600 text-white flex items-center justify-center rounded-full">${item.id}</div>`,
    iconAnchor: [12, 12], // Adjust the anchor point
    className: "leaflet-marker-icon", // Add className to remove unwanted styling
  });

  const router = useRouter();
  const pathname = usePathname();

  // create a query to select the id
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div
      onClick={() => {
        router.push(
          `${pathname}?${createQueryString("id", item.id.toString())}`
        );
      }}
    >
      <Marker
        position={[item.location[0], item.location[1]]}
        icon={newIcon}
        eventHandlers={{
          click: () => {
            router.push(
              `${pathname}?${createQueryString("id", item.id.toString())}`
            );
          },
        }}
      >
        <Popup>
          <div className="flex flex-col items-center space-y-2 ">
            <Link
              className="relative col-span-3 cursor-pointer rounded-md overflow-hidden group w-full"
              href={item.url}
              target="_blank"
            >
              <Image
                alt="Video Image"
                src={item.thumbnail}
                width={100}
                height={100}
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
              {/* Darken effect on hover */}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white hidden group-hover:block">
                <Youtube size={50} />
              </div>
            </Link>
            <div className="flex flex-col items-start col-span-2 space-y-1">
              <Badge className="">Dia {item.id}</Badge>
              <div className="font-bold line-clamp-2">{item.title}</div>
              <div className="flex gap-1">
                {item.city && <div>{item.city}, </div>}
                {item.country}
              </div>
            </div>
          </div>
        </Popup>
      </Marker>
    </div>
  );
}
