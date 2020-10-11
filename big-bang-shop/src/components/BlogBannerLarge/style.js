import styled from 'styled-components';

export const Banner = styled.div`
width: 588px;
height: 392px;
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
    font-size: 36px;
    color: #fff;
    margin: 0 0 13px 20px;
  }

`

export const BannerFooter = styled.div`
  display: flex;

  p {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    margin-right: 35px;
    margin-left: 0;
    text-decoration: underline;
  }

  span {
    font-weight: 300;
    font-size: 14px;
    color: #fff;
    text-decoration: underline;
  }
`;