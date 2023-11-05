import React from "react";
import Dates from "../../Components/Dates";
import {
  Buttons,
  ProductContainer,
} from "../../Components/Styles/AddProduct.styled";

export default function AddProduct() {
  return (
    <>
      <ProductContainer>
        <Dates />
        <Buttons>
          <div className="leftButtons">
            <button>Product</button>
            <button>Customer</button>
          </div>
          <div className="rightButton">
            <button>
              <img src="assets/Plus.png" alt="plus" />
              Add Product
            </button>
          </div>
        </Buttons>
      </ProductContainer>
    </>
  );
}
