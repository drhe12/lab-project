import styled from "styled-components";

export const FilterContainer = styled.div`
  position: relative;
  height: 700px;
  //background-color: red;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    height: 850px;
  }
  @media screen and (max-width: 768px) {
    height: 990px;
  }
`;

export const FilterH1 = styled.h1`
  color: #1d293f;
  font-size: 40px;
  max-width: 720px;
  margin: 90px auto 80px auto;
  padding: 0 25px;
  font-weight: 700;
  text-align: center;
  line-height: 1.3;

  @media screen and (max-width: 850px) {
    padding: 0 50px;
    margin: 75px auto;
  }
  @media screen and (max-width: 768px) {
    padding: 0 75px;
    margin: 70px auto;
  }

  @media screen and (max-width: 480px) {
    padding: 0 50px;
    font-size: 28px;
    margin: 60px auto;
  }
`;

export const FilterWrapper = styled.div`
  height: auto;
  // Revisar
  width: 1000px;
  margin: 0 auto;
  display: grid;
  //grid-template-areas: "a a a";
  //grid-auto-columns: minmax(300px, auto);
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 1130px) {
    max-width: 1000px;
    width: auto;
    min-width: 850px;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    max-width: 800px;
    min-width: 700px;
  }

  @media screen and (max-width: 880px) {
    max-width: 750px;
    min-width: 650px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 550px;
    min-width: 400px;
  }
  @media screen and (max-width: 600px) {
    max-width: 500px;
    min-width: 330px;
  }
  @media screen and (max-width: 430px) {
    max-width: 350px;
    min-width: 270px;
  }
  @media screen and (max-width: 380px) {
    max-width: 300px;
    min-width: 250px;
  }
`;

export const BtnWrap = styled.div`
  margin: 60px 0;
  display: flex;
  justify-content: center;
  font-family: "Poppins", sans-serif;
`;

export const ImgGusano = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 170px;
  width: 70px;
  z-index: -1;
  transform: rotate(60deg);

  @media screen and (max-width: 480px) {
    height: 120px;
    left: -5px;
  }
  @media screen and (max-width: 380px) {
    height: 100px;
    left: -10px;
  }
`;

export const ImgBlueCircle = styled.img`
  position: absolute;
  top: -10px;
  right: 0px;
  height: 300px;
  // width: 100px;
  z-index: -1;

  @media screen and (max-width: 480px) {
    height: 250px;
    top: -5px;
  }
  @media screen and (max-width: 380px) {
    height: 200px;
    top: 10px;
  }
`;

export const ImgPinkCircle = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 400px;
  // width: 100px;
  z-index: -1;

  @media screen and (max-width: 480px) {
    height: 360px;
  }
  @media screen and (max-width: 380px) {
    height: 320px;
  }
`;

export const ImgCircle = styled.img`
  position: absolute;
  left: 25%;
  bottom: 15%;
  height: 80px;
  width: 80px;

  @media screen and (max-width: 480px) {
    height: 70px;
    width: 70px;
  }
  @media screen and (max-width: 380px) {
    height: 60px;
    width: 60px;
  }
`;

export const ImgGusanoBottom = styled.img`
  position: absolute;
  bottom: -70px;
  left: 55%;
  height: 170px;
  width: 70px;
  z-index: 1;
  transform: rotate(60deg);

  @media screen and (max-width: 480px) {
    height: 120px;
    bottom: -50px;
  }
  @media screen and (max-width: 380px) {
    height: 100px;
    bottom: -45px;
  }
`;
