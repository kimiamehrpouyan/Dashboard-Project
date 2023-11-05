import React from "react";
import { Top, Date } from "../Styles/Dates.styled";

export default function Dates() {
  return (
    <>
      <Top>
        <span>Product Analytics</span>
        <Date>
          <div className="sendDate">
            <span>10-06-2021</span>
            <img src="assets/ArrowDown.png" alt="Arrow" />
          </div>
          <div className="receiveDate">
            <span>10-10-2021</span>
            <img src="assets/ArrowDown.png" alt="Arrow" />
          </div>
        </Date>
      </Top>
    </>
  );
}
