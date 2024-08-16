import React from "react";
import Profile from "./profile/Profile";
import Activities from "./activities/Activities";
import NewActivities from "./newActivities/NewActivities";

export default function page() {
  return (
    <div className="bg-gray-primary h-screen flex items-center">
      <div className="w-3/4 flex mx-auto gap-5 h-[95vh]">
        <div className="w-1/2 pb-4 space-y-4 h-full overflow-y-auto">
          <div>
            <NewActivities />
          </div>
          <div>
            <Profile />
          </div>
        </div>
        <div className="h-full space-y-2 overflow-y-auto w-full">
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
  );
}
