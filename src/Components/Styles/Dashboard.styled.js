import { styled } from "styled-components";

export const StyledDashboard = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;

  .bottomComponents {
    display: flex;

    .leftComponents {
      .totalCards {
        display: flex;
        gap: 20px;
        margin: 80px 10px 30px 30px;
      }
    }
    .rightComponents {
      position: absolute;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 50px;
    }
  }
`;
