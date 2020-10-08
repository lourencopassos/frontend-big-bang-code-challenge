import React from "react";
import {
  HorizontalRule,
  RecommendedProductsContainer,
  OurGuidesRecommend,
  Container,
} from "./style";
import ProductCard from "../ProductCard";

function index(props) {
  return (
    <Container>
      <HorizontalRule />
      <RecommendedProductsContainer>
        <OurGuidesRecommend>
          <p>nossos especialistas</p>
          <p>recomendam</p>
        </OurGuidesRecommend>
        <ProductCard
          image="https://s3-alpha-sig.figma.com/img/cd0d/b1bf/9f866d401122c0f405eeb12eaf9acd00?Expires=1603065600&Signature=TV5qlbhf3lfpRXkuNNfivwWkO-Uru8ncUWUmPYhcwU-hYzPfzpco6l9d4b38~WMUAgyoyhindcbnvKRQDYWJXLRVlzXhojmBRWjl18TSoangpXmMTfl6GpDbqPE1t7XHV~0SRUBGT0dNTBw9sYb7zj2ARV8yvAy0m~xBJ97qQJQT5kCkWQ~xYLiGD6FIV-qiMy3fWWRCLdM8xcgHhkI9imB8oRQIvvaS3TVE~laGRsUpnxDUMybCKCUcEOIiw3M1Hvdy9Py4x1crrqlmJXaJzoSw994vNXxSYUwg9EH6FaO~agMDUWkMU~C-cVo3ysLmHoshrveKUjecdAPtzacraw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          product="Livro Acenda a Sua Luz"
          info="Carol Rache"
          price="R$ 54,00"
        />
        <ProductCard
          image="https://s3-alpha-sig.figma.com/img/f9cc/c157/8c1798860b32f017af2b83c0c96de76c?Expires=1603065600&Signature=MuU8eakIYMkl~h2i7Gg2KZwpbAD11ZcQmGFELhaR283G-Q917JFH9xzDFczYJ9c7Z6fC-wuNbWU06WXhw8i-5zbW0p~1Cy9nBeyp-mRHQVeBDe8eGUj5AtAA912ikyeLBzAd5HHlCfB5230gmcG5wy18CY4bSwvNtpINvLuFDiP6JiXHN-V-Iii-SW-hsPyeF9ZZkcJ1wePIHMTDPbtztkCbosfyrZk7q5aSYLZyxVTUzOv9agRXcJmhDxzPTLAGdMb6i89yh2Tq1GT631-L72EVzHJnF6-BgiWb4330Vd~PrWc1zoGDWXKc6gONvg-K~9286wvzfwidjJtz76vhYw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          product="Livro Acenda a Sua Luz"
          info="Carol Rache"
          price="R$ 54,00"
        />
        <ProductCard
          image="https://s3-alpha-sig.figma.com/img/a033/4b16/d5ddfa8cbd9ce5b0439d1e2565605b89?Expires=1603065600&Signature=UGVTHJHPRjMw7O6wQj1l26AagZmTFBoZlcZgHUP2LHUjp9yoqCOmnAEkZ4YfyGyhcu7TsYfC6Ylrp~8fj~Dd99ult8gKSzSbWCKuHmsX2gb4OInzTQ1Y0IlFJQB~BaoUrLmCjJx6DvRGrAa8uiZSBJgu6gUBcmNGsCU7cQOyjQsxaTcHX4Tz6e0uvGbVc~7PCALfQBV1VR5aw3agoDrMboremEtKCNlzGqTrVRVMnAcyuFlZlrjF3Kx6ptgV0TutMYiQ4jxGZSDAJaL3L4loatCDFDhf4~hk7K7B-hYf8XOirC4gxOb7naKamWd7xu-Rzplc5f7e2ieldLpdENS3TQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          product="Livro Acenda a Sua Luz"
          info="Carol Rache"
          price="R$ 54,00"
        />
        <ProductCard
          image="https://s3-alpha-sig.figma.com/img/cd0d/b1bf/9f866d401122c0f405eeb12eaf9acd00?Expires=1603065600&Signature=TV5qlbhf3lfpRXkuNNfivwWkO-Uru8ncUWUmPYhcwU-hYzPfzpco6l9d4b38~WMUAgyoyhindcbnvKRQDYWJXLRVlzXhojmBRWjl18TSoangpXmMTfl6GpDbqPE1t7XHV~0SRUBGT0dNTBw9sYb7zj2ARV8yvAy0m~xBJ97qQJQT5kCkWQ~xYLiGD6FIV-qiMy3fWWRCLdM8xcgHhkI9imB8oRQIvvaS3TVE~laGRsUpnxDUMybCKCUcEOIiw3M1Hvdy9Py4x1crrqlmJXaJzoSw994vNXxSYUwg9EH6FaO~agMDUWkMU~C-cVo3ysLmHoshrveKUjecdAPtzacraw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          product="Livro Acenda a Sua Luz"
          info="Carol Rache"
          price="R$ 54,00"
        />
        <ProductCard
          image="https://s3-alpha-sig.figma.com/img/f9cc/c157/8c1798860b32f017af2b83c0c96de76c?Expires=1603065600&Signature=MuU8eakIYMkl~h2i7Gg2KZwpbAD11ZcQmGFELhaR283G-Q917JFH9xzDFczYJ9c7Z6fC-wuNbWU06WXhw8i-5zbW0p~1Cy9nBeyp-mRHQVeBDe8eGUj5AtAA912ikyeLBzAd5HHlCfB5230gmcG5wy18CY4bSwvNtpINvLuFDiP6JiXHN-V-Iii-SW-hsPyeF9ZZkcJ1wePIHMTDPbtztkCbosfyrZk7q5aSYLZyxVTUzOv9agRXcJmhDxzPTLAGdMb6i89yh2Tq1GT631-L72EVzHJnF6-BgiWb4330Vd~PrWc1zoGDWXKc6gONvg-K~9286wvzfwidjJtz76vhYw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          product="Livro Acenda a Sua Luz"
          info="Carol Rache"
          price="R$ 54,00"
        />
        <ProductCard
          image="https://s3-alpha-sig.figma.com/img/a033/4b16/d5ddfa8cbd9ce5b0439d1e2565605b89?Expires=1603065600&Signature=UGVTHJHPRjMw7O6wQj1l26AagZmTFBoZlcZgHUP2LHUjp9yoqCOmnAEkZ4YfyGyhcu7TsYfC6Ylrp~8fj~Dd99ult8gKSzSbWCKuHmsX2gb4OInzTQ1Y0IlFJQB~BaoUrLmCjJx6DvRGrAa8uiZSBJgu6gUBcmNGsCU7cQOyjQsxaTcHX4Tz6e0uvGbVc~7PCALfQBV1VR5aw3agoDrMboremEtKCNlzGqTrVRVMnAcyuFlZlrjF3Kx6ptgV0TutMYiQ4jxGZSDAJaL3L4loatCDFDhf4~hk7K7B-hYf8XOirC4gxOb7naKamWd7xu-Rzplc5f7e2ieldLpdENS3TQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          product="Livro Acenda a Sua Luz"
          info="Carol Rache"
          price="R$ 54,00"
        />
      </RecommendedProductsContainer>
      <HorizontalRule />
    </Container>
  );
}

export default index;
