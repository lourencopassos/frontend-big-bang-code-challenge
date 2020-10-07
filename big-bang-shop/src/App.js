import React from "react";
import Header from "../src/components/Header";
import { GlobalStyle, ContentContainer } from "../src/globalStyle/GlobalStyle";
import TopBanner from "../src/components/TopBanner";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <ContentContainer>
        <TopBanner />

      </ContentContainer>
    </div>
  );
}

export default App;
