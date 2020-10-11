import React from "react";
import { Container, Content } from "./style";

function index(props) {
  return (
    <Container>
      <img src={props.image} />
      <Content>
        <p>{props.title}</p>
        <p>{props.category}</p>
        <p>{props.intro}</p>
      </Content>
    </Container>
  );
}

export default index;
