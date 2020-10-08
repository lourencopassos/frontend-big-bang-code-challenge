import styled from "styled-components";

export const ProductContainer = styled.div`
  text-align: center;
  margin: 0 12.5px;
  img {
    width: 145px;
    height: 145px;
  }

  p:nth-of-type(1) {
    font-size: 12px;
    color: #000;
    font-weight: 600;
  }
  p:nth-of-type(2) {
    font-size: 11px;
    color: #666;
  }

  p:nth-of-type(3) {
    font-size: 12px;
    color: #333;
    margin-top: 10px;
  }

  &:last-of-type {
    margin-left: 25px;
    margin-right: 0;
  }
`;
