import React from "react";
import { BarCharts, Bars, Line } from "../../Components/Styles/BarChart.styled";

export default function BarChart() {
  return (
    <BarCharts>
      <span>Product Add by Month</span>
      <Bars>
        <Line>
          <span>Jan</span>
          <img src="assets/progress1.png" alt="progress" />
          <span>23,400</span>
        </Line>
        <Line>
          <span>Feb</span>
          <img src="assets/progress2.png" alt="progress" />
          <span>15,000</span>
        </Line>
        <Line>
          <span>Mar</span>
          <img src="assets/progress3.png" alt="progress" />
          <span>30,000</span>
        </Line>
        <Line>
          <span>Apr</span>
          <img src="assets/progress4.png" alt="progress" />
          <span>22,000</span>
        </Line>
        <Line>
          <span>May</span>
          <img src="assets/progress5.png" alt="progress" />
          <span>10,000</span>
        </Line>
        <Line>
          <span>Jun</span>
          <img src="assets/progress6.png" alt="progress" />
          <span>23,400</span>
        </Line>
        <Line>
          <span>Jul</span>
          <img src="assets/progress7.png" alt="progress" />
          <span>5,000</span>
        </Line>
      </Bars>
    </BarCharts>
  );
}
