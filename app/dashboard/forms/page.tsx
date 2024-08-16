import React from "react";
import EmployeDetails from "./EmployeDetails";
import { Modal } from "@chakra-ui/react";
import ModalComponent from "@/app/components/Modal/ModalComponent";

export default function page() {
  return (
    <div className="pt-6 px-4">
      <div className="text-sm font-bold py-5 ml-4 text-gray-500">
        Dashboard / Employe
      </div>
      <EmployeDetails />
    </div>
  );
}
