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
  // InfoBox2,
  // InfoBox3,
  InfoIcon,
  InfoArrow,
  InfoArrow2,
  InfoH2,
  InfoH23,
  InfoP,
  InfoDiv,
  InfoDiv2,
  ImgGusano,
  ImgCircle,
} from "./InfoElements";
import arrow from "../../assets/images/Arrow.svg";
import gusa from "../../assets/images/Gusano.svg";
import circle from "../../assets/images/Circle_2.svg";
import search from "../../assets/images/search.svg";
import department from "../../assets/images/event-confirm.svg";
import check from "../../assets/images/check-all.svg";

const InfoSection = () => {
  return (
    <>
      <InfoContainer id="info">
        <InfoH1>Filtra. Explora. Conoce</InfoH1>
        <InfoWrapper>
          <InfoCard>
            <InfoTop>
              <InfoBox>
                <InfoIcon src={search} />
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
              <InfoBox>
                <InfoIcon src={department} />
              </InfoBox>
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
              <InfoBox>
                <InfoIcon src={check} />
              </InfoBox>
            </InfoTop>
            <InfoH23>Busca tu laboratorio</InfoH23>
            <InfoP>
              We’ve helped over 2,500 job seekers to get into the most popular
              tech teams.
            </InfoP>
          </InfoCard3>
        </InfoWrapper>
        <InfoDiv>
          <ImgCircle src={circle} />
        </InfoDiv>
        <InfoDiv2>
          <ImgGusano src={gusa} />
        </InfoDiv2>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
