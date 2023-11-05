import React from "react";
import { InfoCard } from "../../Components/Styles/DashboardInfoCard.styled";

export default function index({ img, number, text }) {
  return (
    <>
      <InfoCard style={{ cursor: "pointer" }}>
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="text">
          <span>{number}</span>
          <span>{text}</span>
        </div>
      </InfoCard>
    </>
  );
}
