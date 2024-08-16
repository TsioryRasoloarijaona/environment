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
import { MdDashboardCustomize, MdLogout } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
export default function Sidebar() {
    const router = useRouter();
    const [active, setActive] = useState(0);
    const menu = [
        {
            name: "Home",
            icon: <IoIosStats className="text-xl font-bold" />,
            path: "/employeeSection",
        },
        {
            name: "Logout",
            icon: <MdLogout className="text-xl" />,
            path: "/auth/login",
        }
    ];

    return (
        <div className="w-full h-screen bg-green-m">
            <div className="pt-20 mx-auto w-fit">
                <Heading
                    as="h3"
                    size="lg"
                    className="mx-auto flex items-center gap-2 "
                    color={"white"}
                >
                    <MdDashboardCustomize /> My Space
                </Heading>
            </div>
            <div className="mx-auto mt-12 space-y-5">
                {menu.map((el, index) => (
                    <button
                        className={`flex flex-row gap-3  ${active == index ? "bg-gray-200 text-black" : "text-gray-400"
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
