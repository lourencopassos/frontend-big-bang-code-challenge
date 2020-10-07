import styled from "styled-components";

export const BannerContainer = styled.div`
  border: 1px solid #c4c4c4;
  width: 1200px;
  height: 250px;
  background: url("https://s3-alpha-sig.figma.com/img/fa30/a122/06ef8f5137dde6f6f47ef8fb47c01563?Expires=1603065600&Signature=A4JKnz8b1QQbl5McF~tohB-hQgbWBSJPou5v68yV49bg9Ig2nfqD--Ajug~jycWQ453eLavTK8~qtqAvcHVj5dYKXzjpTVLvJlc8Ej2LQP3ozCeEmF7ec7jDUfb6eyHcWMzmsUJdZpKkSijWl8QrRKRfB0im47IZPUN0CJ74-mLv77u9tQr8DoJEWSYwI9ZwqbnSRxgH0cKnHS7ypbizAjsO-e5gv86wyD8dI0ZfsWuQy28KjOlavgnyTBspVBZZQ6L9ZZ9-sac7NMPPH1tQaDQBCQ933cN7hoQ60bPDBzQfvKoCI7PPp-PwoHGn6HStMPWzYbeuwXodIcLhPFhPQQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
  display: flex;
  justify-content: flex-end;
  align-items: center;

  p:nth-of-type(1) {
    font-family: "Lobster", cursive;
    font-weight: 700;
    font-size: 36px;
  }

  p:nth-of-type(2) {
    font-size: 18px;
    color: #666666;
    margin: 20px 0px;
  }
`;

export const BannerHeadline = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 364px;
  margin-right: 120px;
  text-align: center;

  button {
    background-color: #73a8a0;
    color: white;
    border: none;
    width: 180px;
    height: 36px;
    text-transform: uppercase;
  }
`;
