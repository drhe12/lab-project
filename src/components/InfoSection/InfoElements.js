import styled from "styled-components";

export const InfoContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const InfoWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  align-items: center;
  grid-gap: 16px;
  padding: 0 30px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 350px;
  padding: 15px 0;
`;

export const InfoTop = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
`;

export const InfoBox = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;

  background: #f5365c;
  box-shadow: 0px 39.8961px 67.3247px rgba(245, 54, 92, 0.2246);
  border-radius: 7px;
`;

export const InfoBox2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;

  background: #f5365c;
  box-shadow: 0px 39.8961px 67.3247px rgba(245, 54, 92, 0.2246);
  border-radius: 7px;
`;

export const InfoBox3 = styled.div`
  margin: 115px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;

  background: #f5365c;
  box-shadow: 0px 39.8961px 67.3247px rgba(245, 54, 92, 0.2246);
  border-radius: 7px;
`;

export const InfoIcon = styled.a`
  color: #fff;
  font-size: 24px;
`;

export const InfoArrow = styled.img`
  z-index: 99;
  width: 180px;
  margin-left: 25px;
`;

export const InfoArrow2 = styled.img`
  padding-bottom: 65px;

  z-index: 99;
  width: 180px;
  margin-left: 45px;
  transform: matrix(0.82, 0.57, 0.57, -0.82, 0, 0);
`;

export const InfoH1 = styled.h1`
  color: #1d293f;
  font-size: 40px;
  margin: 64px 0;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const InfoH2 = styled.h2`
  max-width: 190px;
  color: #1d293f;
  font-size: 23px;
  margin: 0 0 16px 0;
  font-weight: bold;
`;

export const InfoP = styled.p`
  max-width: 210px;
  font-size: 16px;
  color: #949494;
  //text-align: center;
`;
