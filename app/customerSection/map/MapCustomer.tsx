"use client";
import React from "react";
import Map from "@/app/dashboard/maps/Map";
import dynamic from "next/dynamic";
export default function MapCustomer() {
  const Map = dynamic(() => import("@/app/dashboard/maps/Map"), {
    ssr: false,
  });

  return (
    <div className="relative">
      <Map />
    </div>
  );
}