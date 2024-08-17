"use client";
import React from "react";
import Profile from "./profile/Profile";
import NewActivities from "./newActivities/NewActivities";
import Activities from "./activities/Activities";
import MapCustomer from "./map/MapCustomer";
import Footer from "../components/Footer/Footer";
import getDecodedId from "../hooks/getId";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/app/dashboard/maps/Map"), {
    ssr: false,
  });

export default function page() {
  const id = getDecodedId();

  return (
    <>
      <div className="bg-gray-primary h-screen flex items-center">
        <div className="w-3/4 flex mx-auto gap-5 h-[95vh]">
          <div className="w-1/2 pb-4 space-y-4 h-full overflow-y-auto">
            <div>
              <NewActivities />
            </div>
            <div>
              <Profile id={id} />
            </div>
          </div>
          <div className="h-full space-y-4 overflow-y-auto w-full">
            <div className="relative">
              <Map />
            </div>
            <div className=" ">
              <Activities />
            </div>
            <div className=" ">
              <Activities />
            </div>
            <div className=" ">
              <Activities />
            </div>
            <div className="">
              <Activities />
            </div>
            <div className="">
              <Activities />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
