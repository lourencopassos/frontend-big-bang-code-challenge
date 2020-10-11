import React from "react";
import {
  HorizontalRule,
  BlogHeader,
  BlogTopContent,
  BlogBottomContent,
  BlogButtonContainer,
} from "./style";
import BlogBannerLarge from "../BlogBannerLarge";
import BlogBannerSmall from "../BlogBannerSmall";
import BlogSubscription from "../BlogSubscription";

function index(props) {
  return (
    <div>
      <BlogHeader>
        <HorizontalRule />
        <p>Blog</p>
        <HorizontalRule />
      </BlogHeader>
      <BlogTopContent>
        <BlogBannerLarge
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          category="Viagem"
          author="Fulano de Tal"
          image="https://s3-alpha-sig.figma.com/img/f8c4/7150/5539a9a4fbb79ef8b370d339169c9746?Expires=1603065600&Signature=ClrmCaHf1lg9MhjSWzE6HyEHvN~AaoHlpT8ZpmV-5zOew7oLqo8etYwTuuHDr3cCWUQ8UJ-L7uj4N4Fggnx-FpnIFoQ7D8wbuVUzpEAVeXTUFqmhnKWvUXi5eM-bhyu57rUqDvn4nOJ7dXh-A~-ry8pW1mZKm7sOTCwlcqhYzicL2djTlrPOcDiTr~qHRLATF1R1G2WQd9p21GKSzaeG-60rX8wxVA3~bFQ1ZpKTK7-7LUZYRuaPvv5y3MsBfQJxKMmthyfoXxxkgbBBTaEzgBe3-nusz6-uu6gzSv2BS1ZFHQaQlgNkV6aZAIhNIHGbeSZC2F7v7DXcLdZFs1ogPg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
        <BlogBannerLarge
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          category="Desenvolvimento Pessoal"
          author="Fulano de Tal"
          image="https://s3-alpha-sig.figma.com/img/965f/c9ab/23b2df19a0f461a70b2a124b408d9c0d?Expires=1603065600&Signature=IQBWsz31d4dq~kzm6Vu3CiBDLZk1M300XRNaWti5URl8jjKImuJW4s3J9D7tNknTLo0VhgoMwHK5azYf7MWgMP~INsVcur54g7GOpXS3-F6MlDBGi7yM58b0kpz12MBmLlO~Lqkuf6YaGqHCArCz~obe3EepEU3A~Dui2YA5WsiiqKCUABT00u0Yc2zHMg3~n30cpEb6F-lUwIqEN8R6WsDOTg9rQp7sIhGO~l4~G7pp0t71vrua7mBi0NHp6eu4QyfURX8REY8O9j4G8-m7FT2y2KzAKWEq~NfBtz8esCY7bxXZngQcXEmigC2LpHVASsv4QN9bYej5VAragBnW5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
      </BlogTopContent>
      <BlogBottomContent>
        <BlogBannerSmall
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          image="https://s3-alpha-sig.figma.com/img/0c22/49e4/9ba9f4d3930db32bc2366908511dd9a5?Expires=1603065600&Signature=D~fGmrdXbG2i9MVOdDjivNa1Yd9rZItt4zcUaAEyhFtj2zhhb6JzBpO7vWmDwhVH-H67~GMDjqIZSHMeI8ywWZf2HfW0nLSxJHuVgTvh6MrYPfr~97JgsX7Z6j43LO9n0G3br2hDpzwb-W0ecvODqAfLB4CF5oJpUIqYjJHrNye0eRrm47nrfGHgexbFjEFuIyP44uxMCgED3NyerApowEaaTdHGUjp85bSllXxkNyPilJ57wdqWMBLJbVm0OUc9Rqgq~0V2eD9obsYYwh1prP0teD6xmUGFn-wysJ8NhS01ggrjE-xZoiuckkkG2y3MpfO~Nk7tIajb47nfaFthbw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          category="Viagem"
          intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."
        />
        <BlogBannerSmall
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          image="https://s3-alpha-sig.figma.com/img/965f/c9ab/23b2df19a0f461a70b2a124b408d9c0d?Expires=1603065600&Signature=IQBWsz31d4dq~kzm6Vu3CiBDLZk1M300XRNaWti5URl8jjKImuJW4s3J9D7tNknTLo0VhgoMwHK5azYf7MWgMP~INsVcur54g7GOpXS3-F6MlDBGi7yM58b0kpz12MBmLlO~Lqkuf6YaGqHCArCz~obe3EepEU3A~Dui2YA5WsiiqKCUABT00u0Yc2zHMg3~n30cpEb6F-lUwIqEN8R6WsDOTg9rQp7sIhGO~l4~G7pp0t71vrua7mBi0NHp6eu4QyfURX8REY8O9j4G8-m7FT2y2KzAKWEq~NfBtz8esCY7bxXZngQcXEmigC2LpHVASsv4QN9bYej5VAragBnW5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          category="Viagem"
          intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."
        />
        <BlogSubscription />
      </BlogBottomContent>
      <BlogButtonContainer>
        <button>
          Veja todos posts{" "}
          <svg
            width="16"
            height="9"
            viewBox="0 0 16 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0781 8.11719C11.9375 8.25781 11.7969 8.29297 11.6211 8.22266C11.4453 8.15234 11.375 8.04688 11.375 7.83594V5.30469H0.546875C0.40625 5.30469 0.300781 5.26953 0.230469 5.19922C0.160156 5.12891 0.125 5.02344 0.125 4.88281V3.75781C0.125 3.6875 0.160156 3.58203 0.230469 3.47656C0.300781 3.40625 0.40625 3.33594 0.546875 3.33594H11.375V0.839844C11.375 0.664062 11.4453 0.523438 11.6211 0.453125C11.7969 0.382812 11.9375 0.417969 12.0781 0.558594L15.5938 4.03906C15.6641 4.14453 15.6992 4.25 15.6992 4.35547C15.6992 4.46094 15.6641 4.56641 15.5938 4.63672L12.0781 8.11719Z"
              fill="white"
            />
          </svg>
        </button>
      </BlogButtonContainer>
    </div>
  );
}

export default index;
