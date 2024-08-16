import React from "react";
import Customer from "./Customer";
import CardDataStats from "./CardStats";
import Fav from "./customerComponents/Fav";
import BestTree from "./customerComponents/BestTree";

export default function page() {
  return (
    <>
      <div className="text-sm font-bold pt-5 ml-4 text-gray-500">
        Dashboard / Customers
      </div>
      <div className="grid grid-cols-4 px-4 pt-4 space-x-4">
        <div className="text-sm">
          <CardDataStats details={<Fav/>}/>
        </div>
        <div>
          <CardDataStats details={<BestTree/>}/>
        </div>
        <div>
          <CardDataStats details={<Fav/>}/>
        </div>
        <div>
          <CardDataStats details={<Fav/>}/>
        </div>
        
      </div>
      <div className=" pt-8 px-4">
        <div>
          <Customer />
        </div>
      </div>
    </>
  );
}
