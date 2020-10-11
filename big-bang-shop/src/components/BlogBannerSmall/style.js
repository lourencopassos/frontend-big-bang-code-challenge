import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  width: 384px;
  height: 519px;

  img {
    width: 384px;
    height: 256px;
  }
`;

export const Content = styled.div`
  width: 384px;
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  color: #333;

  p:nth-of-type(1) {
    font-size: 36px;
    font-family: "Sansita", cursive;
    margin-bottom: 20px;
  }
  p:nth-of-type(2) {
    font-size: 14px;
    margin-bottom: 23px;
    text-decoration: underline;
    text-transform: uppercase;
  }

  p:nth-of-type(3) {
    font-size: 16px;
    line-height: 24px;
  }
`;
