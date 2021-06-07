import styled from "styled-components";
import back from "../../assets/images/Rectangle_4.svg";
import { Link as LinkS } from "react-scroll";

export const PrincipalContainer = styled.div`
  color: #000;
  background: #fff;
  max-height: 700px;
  margin-bottom: 50px;

  @media screen and (max-width: 980px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
    padding: 60px 0 0 0;
    max-height: 1100px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 400px) {
    margin-bottom: 40px;
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
  @media screen and (min-width: 1480px) {
    max-width: 2000px;
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

  @media screen and (min-width: 1480px) {
    column-gap: 80px;
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

  @media screen and (max-width: 380px) {
    max-height: 420px;
    min-height: 300px;
  }
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
  // @media screen and (min-width: 1480px) {
  //   max-width: 650px;
  // }
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

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const BtnWrap = styled(LinkS)`
  display: flex;
  justify-content: flex-start;
  width: 180px;
  z-index: 98;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  //top: -70px;
  // @media screen and (min-width: 1480px) {
  //   max-width: 800px;
  // }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  padding: 40px 20px 120px 20px;
  // padding-top: 50px;
  // padding-bottom: 80px;
  // margin: 0 0 10px 0;
  @media screen and (max-width: 380px) {
    padding: 40px 20px 90px 20px;
  }
`;

export const ImgGusaWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  //z-index: 0;
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
  height: 200px;
  padding: 60px 150px 0 40px;
  transform: rotate(-60deg);
  bottom: -500px;

  //z-index: 0;

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
