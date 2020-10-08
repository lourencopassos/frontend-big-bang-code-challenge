import styled from "styled-components";

export const HorizontalRule = styled.div`
  margin: 24px 0 10px 0;
  background-color: #c4c4c4;
  width: 1200px;
  height: 1px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const RecommendedProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OurGuidesRecommend = styled.div`
  height: 145px;
  width: 145px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 12.5px;

  p:nth-of-type(1) {
    font-size: 15px;
  }

  p:nth-of-type(2) {
    font-size: 27px;
    font-family: "Sansita Swashed", cursive;
    color: #000;
  }
`;
