import { styled } from "styled-components";

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-left: 30px;
`;

export const ProductHeader = styled.div`
  display: flex;
  gap: 500px;

  & > :nth-child(1) {
    font-size: 18px;
    font-weight: 700;
    color: black;
  }
  & > :nth-child(2) {
    font-size: 12px;
    font-weight: 600;
    color: #605bff;
  }
`;

export const ProductLists = styled.table`
  thead,
  tbody {
    font-size: 12px;
    font-weight: 400;
  }

  thead tr {
    width: 700px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    & > :nth-child(2) {
      margin-right: 30px;
    }

    .theadText span {
      font-size: 12px;
      font-weight: 400;
      color: #000;
    }
  }
  tbody {
    & > :nth-child(odd) {
      background-color: rgba(164, 162, 255, 0.05);
      border-radius: 2px;
    }
    & > :nth-child(1) > :nth-child(3) {
      margin-left: 10px;
    }

    & > :nth-child(1) > :nth-child(2) > :nth-child(1) {
      background: rgba(255, 214, 107, 0.15);
    }
    & > :nth-child(2) > :nth-child(2) > :nth-child(1) {
      background: rgba(164, 162, 255, 0.15);
    }
    & > :nth-child(3) > :nth-child(2) > :nth-child(1) {
      background: rgba(183, 45, 42, 0.15);
    }
    & > :nth-child(4) > :nth-child(2) > :nth-child(1) {
      background: rgba(42, 40, 87, 0.15);
    }
    & > :nth-child(5) > :nth-child(2) > :nth-child(1) {
      background: rgba(54, 126, 254, 0.15);
    }
    & > :nth-child(6) > :nth-child(2) > :nth-child(1) {
      background: rgba(35, 34, 39, 0.15);
    }
    tr {
      width: 600px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 20%;
      padding: 10px;

      & > :nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      td > :nth-child(2) {
        font-weight: 600;
        color: #0068dd;
        width: 50px;
        display: flex;
        gap: 0px;
        justify-content: center;
        align-items: center;
      }
      & > :last-child {
        font-size: 12px;
        font-weight: 600;
        color: #2b9943;
      }

      td {
        .img {
          width: 37px;
          height: 37px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;
