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
`;

export const SponsorWrapper = styled.div`
  max-width: 960px;
`;

export const SponsorTitle = styled.div`
  color: #1d293f;
  font-size: 40px;
  font-weight: bold;
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
