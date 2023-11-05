import React from "react";
import {
  Information,
  TotalCards,
} from "../../Components/Styles/TotalCard.styled";

export default function TotalCard({
  iconImg,
  totalText,
  price,
  news,
  chartImg,
}) {
  return (
    <>
      <TotalCards>
        <Information className="information">
          <img src={iconImg} alt="Icon" />
          <div className="totalProducts">
            <span>{totalText}</span>
            <span>{price}</span>
          </div>
          <span>{news}</span>
        </Information>
        <div className="chart">
          <img src={chartImg} alt="Chart" />
        </div>
      </TotalCards>
    </>
  );
}
