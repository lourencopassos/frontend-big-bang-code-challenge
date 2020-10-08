import React from "react";
import Header from "../src/components/Header";
import { GlobalStyle, ContentContainer } from "../src/globalStyle/GlobalStyle";
import TopBanner from "../src/components/TopBanner";
import ContentGrid from "../src/components/ContentGrid";
import RecommendedProducts from "../src/components/RecommendedProducts";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <ContentContainer>
        <TopBanner />
        <ContentGrid />
        <RecommendedProducts />
      </ContentContainer>
    </div>
  );
}

export default App;
