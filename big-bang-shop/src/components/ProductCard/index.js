import React from "react";
import { ProductContainer } from "./style";

function index(props) {
  return (
    <ProductContainer>
      <img src={props.image} />
      <p>{props.product}</p>
      <p>{props.info} </p>
      <p>{props.price}</p>
    </ProductContainer>
  );
}

export default index;
