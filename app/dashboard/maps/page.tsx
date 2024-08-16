"use client";
import React from "react";
import Map from "./Map";
import dynamic from "next/dynamic";
export default function page() {
  const Map = dynamic(() => import("./Map"), {
    ssr: false,
  });

  return (
    <div className="relative">
      <Map />
    </div>
  );
}
