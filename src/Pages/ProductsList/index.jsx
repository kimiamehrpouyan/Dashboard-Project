import React from "react";

import {
  Product,
  ProductHeader,
  ProductLists,
} from "../../Components/Styles/ProductList.styled";

export default function ProductsList() {
  return (
    <>
      <Product>
        <ProductHeader>
          <span>Top Selling Products</span>
          <span>See More</span>
        </ProductHeader>
        <ProductLists>
          <thead>
            <tr>
              <th className="theadText">
                <span>SN</span>
                <img src="assets/ArrowDown.png" alt="ArrowIcon" />
              </th>

              <th className="theadText">
                <span>Name</span>
                <img src="assets/ArrowDown.png" alt="ArrowIcon" />
              </th>

              <th className="theadText">
                <span>Price</span>
                <img src="assets/ArrowDown.png" alt="ArrowIcon" />
              </th>

              <th className="theadText">
                <span>Total Order</span>
                <img src="assets/ArrowDown.png" alt="ArrowIcon" />
              </th>

              <th className="theadText">
                <span>Total Sales</span>
                <img src="assets/ArrowDown.png" alt="ArrowIcon" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="assets/Position.png" alt="Position" />
              </td>
              <td className="imgText">
                <img src="assets/Rectangle90.png" alt="" />
                <span>Blutooth</span>
              </td>
              <td>$10</td>
              <td>34,660 Piece</td>
              <td>$3.46.660</td>
            </tr>
            <tr>
              <td>
                <img src="assets/Position.png" alt="Position" />
              </td>
              <td className="imgText">
                <div className="img">
                  <img src="assets/Rectangle91.png" alt="" />
                </div>
                <span>Airdot</span>
              </td>

              <td>$15</td>
              <td>20,000 Piece</td>
              <td>$3.00.000</td>
            </tr>
            <tr>
              <td>
                <img src="assets/Position.png" alt="Position" />
              </td>
              <td className="imgText">
                <div className="img">
                  <img src="assets/Rectangle92.png" alt="" />
                </div>
                <span>Shoes</span>
              </td>

              <td>$10</td>
              <td>15,000 Piece</td>
              <td>$1.50.000</td>
            </tr>
            <tr>
              <td>4</td>
              <td className="imgText">
                <div className="img">
                  <img src="assets/Rectangle93.png" alt="" />
                </div>{" "}
                <span>T-Shirt</span>
              </td>

              <td>$12</td>
              <td>10,000 Piece</td>
              <td>$1.20.000</td>
            </tr>
            <tr>
              <td>5</td>
              <td className="imgText">
                <div className="img">
                  <img src="assets/Rectangle94.png" alt="" />
                </div>{" "}
                <span>Watch</span>
              </td>

              <td>$12</td>
              <td>10,000 Piece</td>
              <td>$1.20.000</td>
            </tr>
            <tr>
              <td>5</td>
              <td className="imgText">
                <div className="img">
                  <img src="assets/Rectangle95.png" alt="" />
                </div>{" "}
                <span>Girls Top</span>
              </td>

              <td>$12</td>
              <td>10,000 Piece</td>
              <td>$1.20.000</td>
            </tr>
          </tbody>
        </ProductLists>
      </Product>
    </>
  );
}
