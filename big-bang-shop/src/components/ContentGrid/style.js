import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  margin-top: 60px;
`;

export const MainContent = styled.div`
  background: url("https://s3-alpha-sig.figma.com/img/f8c4/7150/5539a9a4fbb79ef8b370d339169c9746?Expires=1603065600&Signature=ClrmCaHf1lg9MhjSWzE6HyEHvN~AaoHlpT8ZpmV-5zOew7oLqo8etYwTuuHDr3cCWUQ8UJ-L7uj4N4Fggnx-FpnIFoQ7D8wbuVUzpEAVeXTUFqmhnKWvUXi5eM-bhyu57rUqDvn4nOJ7dXh-A~-ry8pW1mZKm7sOTCwlcqhYzicL2djTlrPOcDiTr~qHRLATF1R1G2WQd9p21GKSzaeG-60rX8wxVA3~bFQ1ZpKTK7-7LUZYRuaPvv5y3MsBfQJxKMmthyfoXxxkgbBBTaEzgBe3-nusz6-uu6gzSv2BS1ZFHQaQlgNkV6aZAIhNIHGbeSZC2F7v7DXcLdZFs1ogPg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
  width: 792px;
  height: 528px;
  background-size: cover;

  margin-right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  div {
    margin-left: 20px;
  }

  p {
    font-family: "Sansita Swashed", cursive;
    font-size: 42px;
    color: #fff;
    margin: 0 0 32px 20px;
  }
`;

export const MainContentFooter = styled.div`
  display: flex;

  p {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    font-size: 18px;
    margin-right: 50px;
    margin-left: 0;
  }

  span {
    font-size: 17px;
    color: #fff;
  }
`;

export const TopRightContent = styled.div`
  background: url("https://s3-alpha-sig.figma.com/img/466c/e58a/9d6c8dc427c7715c8087f4163a9d2438?Expires=1603065600&Signature=d2KIT9h9S-nQhQJzPEM379EFC~eRl4bK6NvWCA2zGYQiEnwdB4GG53mCE32nuNwe9ab11HuHThq3hY65cyx1l0NBojCrXTRVEk60QfIR7rbphcmtUXaGRGt6uqZ9Shto76vdJwmPPqAV-MzJMuczC~fojiAaxVPdzFaO4vOvYIQhF7jWhI~Gb5a8U5vOYf1mtOWzH4Tg2VTniZtLX-2QFtHJlIylVeV6bm6of7mKvi-sZgNrvkMPuxM-3GLv27C75EwTN9CvKQN8juYBlSTZdwVeXbd-c2EpWBwUXXaxB2hDgEk7tP7fNd5sYLgdarPPdZxtQPMqjCZGRziNEocoRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
  width: 384px;
  height: 252px;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  p:nth-of-type(1) {
    font-size: 17px;
    color: #fff;
    margin-left: 10px;
  }

  p:nth-of-type(2) {
    font-size: 24px;
    font-family: "Sansita Swashed", cursive;
    color: #fff;
    margin: 10px;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const LeftBottomContent = styled.div`
  height: 252px;
  width: 180px;
  margin-right: 24px;
  background: url("https://s3-alpha-sig.figma.com/img/745d/6254/854e8037075651d3cb4a891f91e8cdb4?Expires=1603065600&Signature=Diiw7ZaNQBGn~Ou8OaMd6NOhZMKvc1LPLbLnyuckIhfhjq06wIg8oYHhgcRPYVbTSqM1zGSP5ITw54guHGKjEjLmnq3Ap6EWfo9De6Amt2qmXf-U49umrOGZjf3C8J-vnDsqDyc5OGX6NeZ~9RNrKaSOgJpnKcK27fhSgwv-7f6NgD8I9ELNg7g5svhAeRbEYWwfE3SIi32HN~ms4UIHGUAz6-BL-kR7XFeqr~5iOhg5r6Mz56AXlRmDBz1iPRN8WYRG5dxVWbLMSGkELDgAo08oIDlIP1kvOIMioiab09eTT5vp1741Yo9XgwlWm~DxQQ3PbwStcP50~DrOgIUPbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
  background-size: cover;
  background-position: center;
  justify-content: flex-end;
  flex-direction: column;
  display: flex;

  p:nth-of-type(1) {
    font-size: 12px;
    color: #fff;
    margin-left: 10px;
  }

  p:nth-of-type(2) {
    font-size: 24px;
    font-family: "Sansita Swashed", cursive;
    color: #fff;
    margin: 10px;
  }
`;

export const RightBottomContent = styled.div`
  height: 252px;
  width: 180px;
  background: url("https://s3-alpha-sig.figma.com/img/e358/4757/e504b64f128a21f78cf3faa40c55fc20?Expires=1603065600&Signature=AnmxoVBd9ZrmMo3rbBvsWIBfJJiRVYw09vSFNnyxLlNsuEzrAozU3t515-8cF7QxYhHXIyDp7oC2aWeU5CamHf9Yr0eaWRc17UW4i9IMqR9I4s7WSxf-QTfJQvzxMKjF5yVufj38U28DHfh8COnOhB8L4iS3E2TYMlIfERpdTFnNvoSU9ZhW~x~z6vUp3nVl~7AV3k73AwdvmNf~6fI9t2keSAeLKXO7dpStn4KC-m361AySLLNaDBqRRxjxJKzRd0mjP9qXIW6CtskNPa2s0~lOMJy75ZQdsK0GK1MZGEVCoUf-FQ9aafq-xVCX~AMhEfb4zGQ4Ofok30wbEfUy7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
  background-size: cover;
  background-position: center;
  justify-content: flex-end;
  flex-direction: column;
  display: flex;

  p:nth-of-type(2) {
    font-size: 12px;
    color: #fff;
    margin: 0 10px 10px 10px;
  }

  p:nth-of-type(1) {
    font-size: 24px;
    font-family: "Sansita Swashed", cursive;
    color: #fff;
    margin: 10px;
  }
`;
