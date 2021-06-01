import React from "react";
import img from "../../assets/images/Group_4.svg";
import gusa from "../../assets/images/Gusano.svg";
import {
  PrincipalContainer,
  PrincipalWrapper,
  PrincipalRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Textspan,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  ImgGusaWrap,
  ImgGusa,
} from "./BannerElements";

import { Button } from "reactstrap";

const Banner = ({ imgStart }) => {
  return (
    <>
      <PrincipalContainer>
        <PrincipalWrapper>
          <PrincipalRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading>
                  ¡Vive la experiencia de
                  <Textspan> laboratorio virtual!</Textspan>
                </Heading>
                <Subtitle>A un clic de distancia</Subtitle>
                <BtnWrap>
                  <Button color="success" type="button">
                    ¡Vamos!
                  </Button>
                </BtnWrap>
              </TextWrapper>
              <ImgGusaWrap>
                <ImgGusa src={gusa} alt="" />
              </ImgGusaWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} />
              </ImgWrap>
            </Column2>
          </PrincipalRow>
        </PrincipalWrapper>
      </PrincipalContainer>
    </>
  );
};

export default Banner;
