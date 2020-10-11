import styled from "styled-components";

export const Container = styled.div`
  width: 384px;
  height: 519px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 303px;
    height: 50px;
    font-size: 18px;
    padding-left: 16px;
  }

  button {
    margin-top: 30px;
    width: 139px;
    height: 50px;
    border: 1px solid black;
    background-color: white;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const ContainerHeader = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 219px;
  p:nth-of-type(1) {
    font-size: 40px;
    font-family: "Sansita", cursive;
    margin-bottom: 20px;
  }
  p:nth-of-type(2) {
    font-size: 18px;
    margin-bottom: 20px;
    color: #666;
  }
`;

export const ContainerFooter = styled.div`
  margin-top: 82px;
  text-align: center;
  padding: 0 28px;

  p {
    font-size: 13px;
    color: #666;
  }
`;
