import styled from "styled-components";

export const InfoContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  //align-items: center;

  @media screen and (max-width: 1000px) {
    height: 950px;
  }

  // @media screen and (max-width: 768px) {
  //   height: 1100px;
  //   //margin-top: 320px;
  // }

  // @media screen and (max-width: 480px) {
  //   height: 1300px;
  // }
`;

export const InfoWrapper = styled.div`
  height: 450px;
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  //align-items: center;
  grid-gap: 16px;
  padding: 0 0 0 30px;

  @media screen and (max-width: 1100px) {
    padding: 0 17px 0 70px;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    height: 700px;
    padding: 0 17px 0 120px;
  }

  @media screen and (max-width: 768px) {
    //grid-template-columns: 1fr;
    padding: 0 20px 0 60px;
  }

  @media screen and (max-width: 380px) {
    padding: 0 20px 0 40px;
  }
`;

export const InfoCard = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 350px;
  padding: 15px 15px 15px 0;
`;

export const InfoCard2 = styled.div`
  position: relative;
  top: 65px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 350px;
  padding: 15px 0;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const InfoCard3 = styled.div`
  position: relative;
  top: 125px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 350px;
  padding: 15px 15px 15px 0;

  @media screen and (max-width: 1000px) {
    //justify-content: flex-end;
    top: 40px;
  }

  // @media screen and (max-width: 768px) {
  //   padding: 15px 15px 15px 30px;
  // }
`;

export const InfoTop = styled.div`
  display: flex;
  //justify-content: space-between;
  //align-items: flex-start;
`;

export const InfoBox = styled.div`
  margin: 0 25px 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;

  background: #f5365c;
  box-shadow: 0px 39.8961px 67.3247px rgba(245, 54, 92, 0.2246);
  border-radius: 7px;
`;

// export const InfoBox2 = styled.div`
//   margin: 0 25px 40px 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 75px;
//   height: 75px;

//   background: #f5365c;
//   box-shadow: 0px 39.8961px 67.3247px rgba(245, 54, 92, 0.2246);
//   border-radius: 7px;
// `;

// export const InfoBox3 = styled.div`
//   margin: 0 0 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 75px;
//   height: 75px;

//   background: #f5365c;
//   box-shadow: 0px 39.8961px 67.3247px rgba(245, 54, 92, 0.2246);
//   border-radius: 7px;
// `;

export const InfoIcon = styled.img`
  //color: #fff;
  //font-size: 24px;
  //border: none
  width: 30px;
  height: 30px;
`;

export const InfoArrow = styled.img`
  position: relative;
  top: 30px;
  z-index: 99;
  width: 220px;
  height: 80px;
  //margin-left: 25px;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 45px;
    left: 120px;
    width: 140px;
    transform: rotate(10deg);
  }

  @media screen and (max-width: 525px) {
    width: 130px;
    left: 100px;
  }

  @media screen and (max-width: 480px) {
    width: 100px;
  }
  @media screen and (max-width: 420px) {
    width: 80px;
    left: 85px;
  }
`;

export const InfoArrow2 = styled.img`
  //padding-bottom: 65px;
  position: relative;
  top: 15px;
  z-index: 99;
  width: 220px;
  height: 80px;
  //margin-left: 45px;
  transform: matrix(0.82, 0.57, 0.57, -0.82, 0, 0);

  @media screen and (max-width: 1000px) {
    position: absolute;
    //width: 140px;
    top: 350px;
    right: 210px;
    transform: matrix(0.82, 0.57, 0.57, -0.82, 0, 0) rotate(230deg);
  }

  @media screen and (max-width: 768px) {
    //position: absolute;
    width: 140px;
    top: 340px;
    right: 140px;
    //transform: matrix(0.82, 0.57, 0.57, -0.82, 0, 0) rotate(230deg);
  }

  @media screen and (max-width: 525px) {
    width: 130px;
  }

  @media screen and (max-width: 480px) {
    width: 100px;
  }

  @media screen and (max-width: 420px) {
    width: 80px;
    right: 110px;
  }
`;

export const InfoH1 = styled.h1`
  color: #1d293f;
  font-size: 40px;
  margin: 54px 0 64px 0;
  padding: 0 25px;
  font-weight: bold;
  text-align: center;
  line-height: 1.3;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const InfoH2 = styled.h2`
  max-width: 160px;
  color: #1d293f;
  font-size: 22px;
  line-height: 1.3;
  margin: 0 0 16px 0;
  font-weight: bold;
`;

export const InfoH23 = styled.h2`
  max-width: 220px;
  color: #1d293f;
  font-size: 22px;
  line-height: 1.3;
  margin: 0 0 16px 0;
  font-weight: bold;
`;

export const InfoP = styled.p`
  max-width: 210px;
  font-size: 16px;
  color: #949494;
  //text-align: center;
`;

export const InfoDiv = styled.div`
  position: relative;
  height: 30px;
  display: flex;
  //justify-content: flex-end;
`;

export const InfoDiv2 = styled.div`
  position: relative;
  height: 30px;
  display: flex;
  justify-content: flex-end;
`;

export const ImgGusano = styled.img`
  position: relative;
  bottom: 220px;
  left: -30px;
  height: 140px;
  width: 27px;
  //margin-right: 10px;
  //left: 1100px;
  z-index: -1;

  @media screen and (max-width: 1150px) {
    bottom: 100px;
  }

  @media screen and (max-width: 1000px) {
    bottom: 200px;
  }
`;

export const ImgCircle = styled.img`
  position: relative;
  top: -450px;
  //left: 570px;
  height: 125px;
  width: 125px;
  //margin-right: 10px;
  left: -30px;
  z-index: -1;

  @media screen and (max-width: 1067px) {
    top: -600px;
  }

  @media screen and (max-width: 1000px) {
    top: -700px;
  }

  @media screen and (max-width: 900px) {
    top: -820px;
  }
  @media screen and (max-width: 786px) {
    height: 105px;
    width: 105px;
    top: -770px;
  }
`;
