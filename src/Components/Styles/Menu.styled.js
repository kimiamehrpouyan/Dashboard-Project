import { styled } from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 15%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15% 15% 0 20%;
  img {
    width: 42px;
    height: 42px;
  }
  span {
    font-size: 24px;
    font-weight: 600;
    color: var(--black-color);
  }
`;

export const MenuBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    margin-left: 10px;

    li {
      list-style: none;
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      padding: 15px 20px;
      cursor: pointer;

      &:hover {
        background: linear-gradient(
          90deg,
          rgba(126, 170, 255, 0.29) 0%,
          rgba(196, 196, 196, 0) 100%
        );
      }

      img {
        width: 30px;
      }
      a {
        text-decoration: none;
        color: var(--black-color);
        opacity: 0.5;
        font-size: 16;
        font-weight: 600;
        & > :nth-child(1) {
          color: var(--purple-color);
        }
      }
    }
  }
`;

export const UpgradeSection = styled.div`
  margin: 0 auto;
  position: relative;
  width: 168px;
  height: 195px;
  flex-shrink: 0;

  .upgrade {
    left: 5px;
    top: 147px;
    position: absolute;
    width: 139px;
    height: 33px;
    flex-shrink: 0;
    border: none;
    border-radius: 11px;
    background: var(--Primary, #605bff);
    color: #fff;
    font-family: "Nunito Sans", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .rectangle {
    left: -3px;
    top: 34px;
    position: absolute;
    width: 155px;
    height: 164px;
    flex-shrink: 0;
    border-radius: 20px;
    opacity: 0.1;
    background: #80abff;
  }
  .object {
    left: 9px;
    top: 0px;
    position: absolute;
    width: 150px;
    height: 150px;
    flex-shrink: 0;
    background: #5b93ff;
    mix-blend-mode: color;
    border-radius: 20px;

    .object svg {
      left: 20px;
      top: 112px;
      position: absolute;
    }
  }
`;

export const Admin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-bottom: 30px;

  .information {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > :nth-child(1) {
      font-size: 12px;
      font-weight: 600;
    }
    & > :nth-child(2) {
      font-size: 10px;
      font-weight: 400;
      color: #000;
      opacity: 0.5;
    }
  }
`;
