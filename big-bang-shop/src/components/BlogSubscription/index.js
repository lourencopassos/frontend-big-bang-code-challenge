import React from "react";
import { Container, ContainerHeader, ContainerFooter } from "./style";

function index(props) {
  return (
    <Container>
      <ContainerHeader>
        <p>Namah no seu e-mail</p>
        <p>Assine nossa newsletter</p>
      </ContainerHeader>

      <input placeholder="Seu e-mail" />
      <button>Assinar</button>
      <ContainerFooter>
        <p>
          Ao clicar em “assinar”, você concorda em receber e-mails do Espaço
          Namah a aceita nossos Termos de Uso e nossas Políticas de Privacidade.
        </p>
      </ContainerFooter>
    </Container>
  );
}

export default index;
