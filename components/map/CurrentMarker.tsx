"use client";

import { Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { Badge } from "../ui/badge";
import { useSearchParams } from "next/navigation";
import { globeData } from "@/data/data";

export default function CurrentMarker() {
  const searchParams = useSearchParams()!;
  const id = searchParams.get("id") || "1";

  const item = globeData.find((item) => item.id === id) || globeData[0];

  const map = useMap();
  const markerRef = useRef(null);
  const prevIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (prevIdRef.current !== id) {
      const [latitude, longitude] = item.location;
      map.flyTo([latitude, longitude], map.getZoom());
      prevIdRef.current = id;
      const marker = markerRef.current || null;
      if (marker) {
        marker.openPopup();
      }
    }
  }, [id, item, map]);

  //custom icon
  const Icon = L.divIcon({
    html: `<div class="w-6 h-6 bg-slate-800 text-white flex items-center justify-center rounded-full">${item.id}</div>`,
    iconAnchor: [12, 12], // Adjust the anchor point
    className: "leaflet-marker-icon", // Add className to remove unwanted styling
  });

  const videoId = item.url.split("=")[1];
  const img = "https://i1.ytimg.com/vi/" + videoId + "/hqdefault.jpg";

  return (
    <Marker
      position={[item.location[0], item.location[1]]}
      icon={Icon}
      ref={markerRef}
    >
      <Popup className="">
        <div className="flex flex-col justify-center items-center space-y-2 w-full py-2">
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
            <div className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white hidden group-hover:block">
              <Youtube size={50} />
            </div>
          </Link>
          <div className="flex flex-col items-start space-y-1">
            <Badge className="bg-green">Dia {item.id}</Badge>
            <div className="font-bold line-clamp-2">{item.title}</div>
            <div className="flex gap-1">
              {item.city && <div>{item.city}, </div>}
              {item.country}
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
