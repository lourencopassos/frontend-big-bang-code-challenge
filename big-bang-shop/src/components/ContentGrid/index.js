import React from "react";
import {
  Grid,
  MainContent,
  TopRightContent,
  BottomContent,
  LeftBottomContent,
  RightBottomContent,
  MainContentFooter,
} from "./style";

function index(props) {
  return (
    <Grid>
      <MainContent>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <MainContentFooter>
          <p>Viagem</p>
          <span>por Fulano de Tal</span>
        </MainContentFooter>
      </MainContent>
      <div>
        <TopRightContent>
          <div>
            <p>Namahcast #122</p>
            <p>
              Nome do episódio do podcast lorem ipsum dolor sit amet consectetur
              eli...
            </p>
          </div>
        </TopRightContent>
        <BottomContent>
          <LeftBottomContent>
            <div>
              <p>CURSO - 04 ABR</p>
              <p>Imersão Vinyasa Flow</p>
            </div>
          </LeftBottomContent>

          <RightBottomContent>
            <p>Condicionador Namah</p>
            <p>
              COMPRE AGORA
              <span>
                <svg
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96875 6.07812C7.875 6.17188 7.78125 6.19531 7.66406 6.14844C7.54688 6.10156 7.5 6.03125 7.5 5.89062V4.20312H0.28125C0.1875 4.20312 0.117188 4.17969 0.0703125 4.13281C0.0234375 4.08594 0 4.01562 0 3.92188V3.17188C0 3.125 0.0234375 3.05469 0.0703125 2.98438C0.117188 2.9375 0.1875 2.89062 0.28125 2.89062H7.5V1.22656C7.5 1.10938 7.54688 1.01562 7.66406 0.96875C7.78125 0.921875 7.875 0.945312 7.96875 1.03906L10.3125 3.35938C10.3594 3.42969 10.3828 3.5 10.3828 3.57031C10.3828 3.64062 10.3594 3.71094 10.3125 3.75781L7.96875 6.07812Z"
                    fill="white"
                  />
                </svg>
              </span>
            </p>
          </RightBottomContent>
        </BottomContent>
      </div>
    </Grid>
  );
}

export default index;
