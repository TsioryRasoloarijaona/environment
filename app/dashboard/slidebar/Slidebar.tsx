"use client";
import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { IoIosStats } from "react-icons/io";
import { IoAppsSharp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { Center, Heading } from "@chakra-ui/react";
import { MdDashboardCustomize } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import Image from "next/image";
export default function Slidebar() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const menu = [
    {
      name: "Stats",
      icon: <IoIosStats className="text-xl font-bold" />,
      path: "/dashboard",
    },
    {
      name: "Customers",
      icon: <IoAppsSharp className="text-xl" />,
      path: "/dashboard/custumer",
    },
    {
      name: "Employe",
      icon: <GrUserWorker className="text-xl" />,
      path: "/dashboard/forms",
    },
    {
      name: "Map",
      icon: <FaMapLocationDot className="text-xl" />,
      path: "/dashboard/maps",
    },

    {
      name: "Lougout",
      icon: <GrLogout className="text-xl" />,
      path: "/",
    },
  ];

  return (
    <div className="w-full h-screen bg-gray-900">
      <div className="pt-20 mx-auto w-fit">
        <div>
          <Image src={"/logo.png"} width={200} height={200} alt="png" />
        </div>
      </div>
      <div className="mx-auto mt-9 space-y-5">
        {menu.map((el, index) => (
          <button
            className={`flex flex-row gap-3  ${
              active == index ? "bg-gray-200 text-black" : "text-gray-400"
            }  w-3/4 mx-auto px-4 py-3 rounded-md items-center justify-start font-semibold `}
            key={index}
            onClick={() => {
              router.push(el.path);
              setActive(index);
            }}
          >
            {el.icon}
            <p className="text-base"> {el.name} </p>
          </button>
        ))}
      </div>
    </div>
  );
}
