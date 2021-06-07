import styled from "styled-components";

export const SponsorContainer = styled.div`
  margin-top: 7px;
  height: 600px;
  background: linear-gradient(
      181.12deg,
      #ffffff 3.31%,
      rgba(255, 255, 255, 0) 41.32%
    ),
    #8de9e3;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 800px) {
    height: 700px;
    margin-top: 0;
  }
  @media screen and (max-width: 480px) {
    height: 600px;
  }
  @media screen and (max-width: 360px) {
    height: 550px;
  }

  @media screen and (min-height: 900px) and (max-height: 950px) {
    height: 80vh;
    max-height: 80vh;
  }
  @media screen and (min-height: 951px) and (max-height: 1024px) {
    height: 75vh;
    max-height: 75vh;
  }
`;

export const SponsorWrapper = styled.div`
  max-width: 960px;
`;

export const SponsorTitle = styled.div`
  color: #1d293f;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  line-height: 1.3;
  margin: 90px auto 80px auto;

  @media screen and (max-width: 480px) {
    font-size: 28px;
    margin: 60px 40px;
  }
`;

export const SponsorItemWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-flow: row wrap;
  justify-content: center;
`;

export const SponsorItem = styled.div``;

export const SponsorImg = styled.img`
  width: 400px;

  @media screen and (max-width: 500px) {
    max-width: 80%;
  }
`;
