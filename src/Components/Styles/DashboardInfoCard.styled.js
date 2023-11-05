import styled from "styled-components";

export const InfoCard = styled.div`
  padding: 20px 10px;
  width: 268px;
  height: 116px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  margin: 10px auto;
  position: absolute;
  top: 20%;
  left: 30%;

  .img {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;
    width: 80%;
  }
`;
