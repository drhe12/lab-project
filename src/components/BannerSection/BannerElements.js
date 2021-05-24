import styled from "styled-components";
import back from "../../assets/images/Rectangle_4.svg";

export const PrincipalContainer = styled.div`
  color: #000;
  background: #fff;
  max-height: 700px;

  @media screen and (max-width: 768px) {
    padding: 60px 0 0 0;
    max-height: 1100px;
  }
`;

export const PrincipalWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 600px;
  width: 100%;
  max-width: 1200px;
  margin-right: 0;
  margin-left: auto;
  padding: 0 0 0 24px;
  justify-content: center;

  @media screen and (max-width: 1140px) {
    min-height: 570px;
  }
`;

export const PrincipalRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  //align-items: center;
  column-gap: 32px;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-top: 150px;
  align-items: center;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 1000px) {
    margin-top: 0;
    padding-top: 75px;
  }

  @media screen and (max-width: 850px) {
    margin-top: 0;
    padding-top: 50px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
`;

export const Column2 = styled.div`
  // margin-bottom: 15px;
  padding: 0 0 0 5px;
  margin: 0;
  grid-area: col2;

  min-height: 670px;
  max-height: 700px;
  //width: auto;
  background-image: url(${back});
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (max-width: 1140px) {
    min-height: 470px;
  }

  // @media screen and (max-width: 950px) {
  //   min-height: 200px;
  // }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 965px) {
    padding-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 20px;
  }
`;

export const Heading = styled.h1`
  // margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.2;
  font-weight: 600;
  color: #333333;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Textspan = styled.span`
  // margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.2;
  font-weight: 600;
  color: #f5365c;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 60px;
  font-size: 20px;
  line-height: 24px;
  color: #333333;

  @media screen and (max-width: 930px) {
    margin-bottom: 45px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  //top: -70px;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  padding: 40px 20px 120px 20px;
  // padding-top: 50px;
  // padding-bottom: 80px;
  // margin: 0 0 10px 0;
`;

export const ImgGusaWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 1120px) {
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 965px) {
    display: flex;
    justify-content: flex-end;
  }
  // @media screen and (max-width: 768px) {
  //   display: flex;
  //   justify-content: center;
  // }
`;

export const ImgGusa = styled.img`
  // width: 100%;
  height: 110px;
  padding: 0 200px 0 50px;
  transform: rotate(-60deg);
  z-index: 2;

  @media screen and (max-width: 1135px) {
    padding: 0 180px 0 80px;
  }
  @media screen and (max-width: 1120px) {
    padding: 0 150px 0 100px;
    height: 100px;
  }
  @media screen and (max-width: 1100px) {
    //padding: 0 20px 0 50px;
    padding: 0;
  }
  @media screen and (max-width: 985px) {
    padding: 0 20px;
    height: 90px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 40px;
    height: 80px;
  }
`;
