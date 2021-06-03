import styled from "styled-components";

export const SponsorContainer = styled.div`
  height: 536px;
  background: linear-gradient(
      181.12deg,
      #ffffff 3.31%,
      rgba(255, 255, 255, 0) 41.32%
    ),
    #8de9e3;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 880px) {
    height: auto;
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

  @media screen and (max-width: 500px) {
    margin-bottom: 40px;
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
