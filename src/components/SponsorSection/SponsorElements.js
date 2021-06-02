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

  @media screen and (max-width: 890px) {
    height: auto;
}
`;

export const SponsorWrapper = styled.div`
  width: 100%;
  max-width: 960px;
`;

export const SponsorTitle = styled.div`
  color: #1d293f;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  line-height: 1.3;
  margin: 90px auto 80px auto;
`;

export const SponsorItemWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-flow: row wrap;
  justify-content: center;
`;

export const SponsorItem = styled.div`
  //flex-basis: 50%;
`;

export const SponsorImg = styled.img`
  width: 432px;

  

`;
