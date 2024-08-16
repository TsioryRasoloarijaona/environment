import { Avatar } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats = ({details} : {details : React.ReactNode}) => {
  return (
    <div className="w-full h-[250px] bg-white rounded-s-md">
      {details}
    </div>
  );
};

export default CardDataStats;
