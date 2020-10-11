import styled from "styled-components";

export const HorizontalRule = styled.div`
  margin: 24px 0 10px 0;
  background-color: #c4c4c4;
  width: 547px;
  height: 1px;
`;

export const BlogHeader = styled.div`
  display: flex;
  margin-top: 120px;
  margin-bottom: 60px;
  justify-content: center;
  align-items: center;

  p {
    font-size: 48px;
    font-family: "Sansita", cursive;
    padding: 0 10px;
  }
`;

export const BlogTopContent = styled.div`
  display: flex;
`;

export const BlogBottomContent = styled.div`
  display: flex;
  margin-top: 60px;
`;

export const BlogButtonContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;

  button {
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    border: none;
    color: #fff;
    background-color: #73a8a0;
    width: 289px;
    height: 52px;
  }
`;
