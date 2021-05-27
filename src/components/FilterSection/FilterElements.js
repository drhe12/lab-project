import styled from "styled-components";

export const FilterContainer = styled.div`
  position: relative;
  height: 700px;
  //background-color: red;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
`;

export const FilterH1 = styled.h1`
  color: #1d293f;
  font-size: 40px;
  max-width: 720px;
  margin: 90px auto 80px auto;
  padding: 0 25px;
  font-weight: bold;
  text-align: center;
  line-height: 1.3;
`;

export const FilterWrapper = styled.div`
  height: 450px;
  width: 950px;
  margin: 0 auto;
  // display: flex;
  // justify-content: center;
`;

export const BtnWrap = styled.div`
  margin: 60px 0;
  display: flex;
  justify-content: center;
`;

export const ImgGusano = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 170px;
  width: 70px;
  z-index: -1;
  transform: rotate(60deg);

  // @media screen and (max-width: 1150px) {
  //   bottom: 100px;
  // }

  // @media screen and (max-width: 1000px) {
  //   bottom: 200px;
  // }
`;

export const ImgBlueCircle = styled.img`
  position: absolute;
  top: -10px;
  right: 0px;
  height: 300px;
  // width: 100px;
  z-index: -1;
`;

export const ImgPinkCircle = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 400px;
  // width: 100px;
  z-index: -1;
`;

export const ImgCircle = styled.img`
  position: absolute;
  left: 25%;
  bottom: 15%;
  height: 80px;
  width: 80px;
`;

export const ImgGusanoBottom = styled.img`
  position: absolute;
  bottom: -70px;
  left: 55%;
  height: 170px;
  width: 70px;
  z-index: -1;
  transform: rotate(60deg);
`;
