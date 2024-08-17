"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Footer from "../components/Footer/Footer";
import getDecodedId from "../hooks/getId";

const Profile = dynamic(() => import("./profile/Profile"), { ssr: false });
const NewActivities = dynamic(() => import("./newActivities/NewActivities"), { ssr: false });
const Activities = dynamic(() => import("./activities/Activities"), { ssr: false });
const MapCustomer = dynamic(() => import("./map/MapCustomer"), { ssr: false });
const Map = dynamic(() => import("@/app/dashboard/maps/Map"), { ssr: false });

export default function Page() {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const decodedId = getDecodedId(); 
      setId(decodedId);
    }
  }, []);

  return (
    <>
      <div className="bg-gray-primary h-screen flex items-center">
        <div className="w-3/4 flex mx-auto gap-5 h-[95vh]">
          <div className="w-1/2 pb-4 space-y-4 h-full overflow-y-auto">
            <div>
              <NewActivities />
            </div>
            <div>
              {id && <Profile id={id} />}
            </div>
          </div>
          <div className="h-full space-y-4 overflow-y-auto w-full">
            <div className="relative">
              <Map />
            </div>
            <div>
              <Activities />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
