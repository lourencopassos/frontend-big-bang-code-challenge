import styled from "styled-components";

export const HeaderContainer = styled.div`
  border: 1px solid #c4c4c4;
  height: 106px;
  display: flex;
  padding: 0 75px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1920px) {
  }

  @media (max-width: 1475px) {
    padding: 0 25px;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  width: 40%;
  p {
    margin: 0 25px;
    text-transform: uppercase;
    font-size: 16px;
    border-bottom: 4px solid #73a8a0;
    border-spacing: 10px;
    font-weight: 500;
    color: #666666;
    font-family: "Roboto", cursive;
  }

  p :nth-last-of-type() {
    margin: 0 0 0 15px;
  }

  @media (max-width: 1920px) {
    p {
      margin: 0 15px;
      text-transform: uppercase;
      font-size: 16px;
      border-bottom: 4px solid #73a8a0;
      border-spacing: 10px;
    }

    p:nth-of-type(6) {
      margin: 0 0 0 15px;
    }
  }

  @media (max-width: 1475px) {
  }
`;

export const HeaderLogo = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`;

export const HeaderIcons = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;

  svg {
    margin: 0 35px;
  }
`;

export const IconBadge = styled.span`
  position: absolute;
  bottom: 30px;
  right: 37px;
  padding: 5px 5px;
  border-radius: 60%;
  background: #73a8a0;
  color: white;
  font-size: 11px;
  font-weight: bold;
`;

export const CartIconContainer = styled.div`
  position: relative;
`;
