import { styled } from "styled-components";

export const ProductContainer = styled.div`
  width: 85vw;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Buttons = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 10px;

  .leftButtons button,
  .rightButton button {
    font-family: "Nunito Sans", sans-serif;
    font-size: 14;
    font-weight: 700;
    color: #ffffff;
    background-color: #605bff;
    border-radius: 10px;
    padding: 12px 25px;
    border: none;
  }
  .leftButtons > :nth-child(2) {
    background-color: #ffffff;
    color: #030229;
  }
  .rightButton button img {
    margin-right: 10px;
  }
`;
