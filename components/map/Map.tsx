"use client";

import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Polyline,
} from "react-leaflet";
import { globeData } from "@/data/data";
import MarkerItem from "./Marker";
import CurrentMarker from "./CurrentMarker";
import { useEffect } from "react";

const Map = () => {
  const data = globeData;

  return (
    <MapContainer
      style={{
        height: "100%",
        width: "100%",
        zIndex: "10",
        position: "relative",
      }}
      center={[data[0].location[0] + 2, data[0].location[1]]}
      zoom={4}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((item, index) => (
        <div key={index}>
          <MarkerItem item={item} />
        </div>
      ))}
      <CurrentMarker />
    </MapContainer>
  );
};

export default Map;
