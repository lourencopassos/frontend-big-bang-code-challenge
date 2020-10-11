import React from "react";
import { Banner, BannerFooter } from "./style";

function index(props) {
  return (
    <Banner
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <p>{props.title}</p>
      <BannerFooter>
        <p>{props.category}</p>
        <span>por {props.author}</span>
      </BannerFooter>
    </Banner>
  );
}

export default index;
