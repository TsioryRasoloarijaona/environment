import { Avatar } from "@chakra-ui/react";
import React from "react";
import {get} from '@/app/helper/fecth/get'

export default async function BestTree() {
    const region : [[string , number]] = await get('https://environment-pyv8.onrender.com/plants/least-active-location')
  return (
    <div>
      <div className="text-center pt-2">
        <Avatar
          src="https://media.istockphoto.com/id/1308342065/vector/folded-location-map-with-marker-city-map-with-pin-pointer-gps-navigation-map-with-city.jpg?s=612x612&w=0&k=20&c=E9DP4dIwSdwaveNwcYU2LzBeKuBoKLa7nsTxTWDHObw="
          size={"xl"}
        />
      </div>
      <div>
        <ul className="text-center pt-4 space-y-3 text-sm font-bold text-gray-500">
          <li className="text-sm font-bold t text-red-400">total : {region[0][1]} !</li>
          <li className="text-sm">{region[0][0]}</li>
         
        </ul>
      </div>
    </div>
  );
}
