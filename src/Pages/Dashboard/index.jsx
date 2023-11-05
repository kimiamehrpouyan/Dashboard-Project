import React from "react";
import AddProduct from "../AddProduct";
import { StyledDashboard } from "../../Components/Styles/Dashboard.styled";
import TotalCard from "../TotalCards";
import ProductsList from "../ProductsList";
import BarChart from "../BarChart";
import DoughnutChart from "../DoughnutChart";

export default function Dashboard() {
  return (
    <>
      <StyledDashboard>
        <div className="topComponents">
          <AddProduct />
        </div>

        <div className="bottomComponents">
          <div className="leftComponents">
            <div className="totalCards">
              <TotalCard
                iconImg={"assets/BoxIcon.png"}
                totalText={"Total Product"}
                price={"5,00,874"}
                news={"+1400 New Added"}
                chartImg={"assets/Vector4.png"}
              />
              <TotalCard
                iconImg={"assets/CartIcon.png"}
                totalText={"Total Sales"}
                price={"2,34,888"}
                news={"+1000 Sales Today"}
                chartImg={"assets/Vector6.png"}
              />
            </div>
            <div className="products">
              <ProductsList />
            </div>
          </div>

          <div className="rightComponents">
            <BarChart />
            <DoughnutChart />
          </div>
        </div>
      </StyledDashboard>
    </>
  );
}
