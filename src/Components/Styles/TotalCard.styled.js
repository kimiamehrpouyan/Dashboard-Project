import { styled } from "styled-components";

export const TotalCards = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px 0;
`;

export const Information = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;

  .totalProducts {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-right: 40px;

    & > :nth-child(1) {
      font-size: 14px;
      font-weight: 400;
      color: #030229;
    }
    & > :nth-child(2) {
      font-size: 24px;
      font-weight: 700;
      color: #030229;
    }
  }

  & > :nth-child(3) {
    font-size: 11px;
    font-weight: 600;
    color: #2b9943;
  }
`;
