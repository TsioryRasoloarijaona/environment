import React from "react";
import { Avatar, AvatarBadge, AvatarGroup, WrapItem } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

export default function HeadDash() {
  return (
    <div className="w-full py-3 bg-white flex justify-between px-4  items-center z-50">
      <div>
        <p className="text-gray-600 text-sm font-semibold border rounded-full border-gray-200 px-4 py-1 flex gap-3 items-center">
          <span>Dashboard</span> <IoIosArrowForward/> <span>Stats</span>
        </p>
      </div>
      <div>
        <WrapItem>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </WrapItem>
      </div>
    </div>
  );
}
