import React from "react";
import { useParams } from "react-router-dom";
import ServiceLeadDetails from "../Components/adhil/ServiceLeadDetails";
import Header from "../Components/adhil/Header";

export default function S31_ServiceLeadDetails() {
  const { id } = useParams(); // 👈 REAL PRODUCT LOGIC

  return (
    <div className="w-[100%] h-[100%] min-h-screen bg-gray-300">
      <Header title="LEAD DETAILS" showBack={true} theme="black" />

      <ServiceLeadDetails leadId={id} />
    </div>
  );
}

