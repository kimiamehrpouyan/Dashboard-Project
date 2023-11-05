import { styled } from "styled-components";

export const Top = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 40px 20px 20px 30px;
  span {
    font-size: 24px;
    font-weight: 700;
    color: "#010025";
  }
`;

export const Date = styled.div`
  display: flex;
  gap: 30px;
  .sendDate,
  .receiveDate {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 10px 10px;

    span {
      font-size: 14px;
      font-weight: 400;
      color: #030229;
    }
  }
`;
