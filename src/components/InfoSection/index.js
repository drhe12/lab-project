import React from "react";
import {
  InfoContainer,
  InfoH1,
  InfoWrapper,
  InfoCard,
  InfoCard2,
  InfoCard3,
  InfoTop,
  InfoBox,
  InfoBox2,
  InfoBox3,
  InfoIcon,
  InfoArrow,
  InfoArrow2,
  InfoH2,
  InfoH23,
  InfoP,
  InfoDiv,
  ImgGusano,
} from "./InfoElements";
import arrow from "../../assets/images/Arrow.svg";
import gusa from "../../assets/images/Gusano.svg";

const InfoSection = () => {
  return (
    <>
      <InfoContainer id="info">
        <InfoH1>Filtra. Explora. Conoce</InfoH1>
        <InfoWrapper>
          <InfoCard>
            <InfoTop>
              <InfoBox>
                <InfoIcon></InfoIcon>
              </InfoBox>
              <InfoArrow src={arrow} />
            </InfoTop>
            <InfoH2>Selecciona Curso</InfoH2>
            <InfoP>
              We’ve helped over 2,500 job seekers to get into the most popular
              tech teams.
            </InfoP>
          </InfoCard>
          <InfoCard2>
            <InfoTop>
              <InfoBox2>
                <InfoIcon></InfoIcon>
              </InfoBox2>
              <InfoArrow2 src={arrow} />
            </InfoTop>
            <InfoH2>Selecciona departamento</InfoH2>
            <InfoP>
              We’ve helped over 2,500 job seekers to get into the most popular
              tech teams.
            </InfoP>
          </InfoCard2>
          <InfoCard3>
            <InfoTop>
              <InfoBox3>
                <InfoIcon></InfoIcon>
              </InfoBox3>
            </InfoTop>
            <InfoH23>Busca tu laboratorio</InfoH23>
            <InfoP>
              We’ve helped over 2,500 job seekers to get into the most popular
              tech teams.
            </InfoP>
          </InfoCard3>
        </InfoWrapper>
        <InfoDiv>
          <ImgGusano src={gusa} />
        </InfoDiv>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
