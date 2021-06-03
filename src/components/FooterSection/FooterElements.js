import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #333333;
  height: 220px;
  justify-content: center;
  position: sticky;
  top: 0;
  //padding: 20px;
  display: flex;
`;

export const FooterWrapper = styled.div`
  //  background-color: #aaa;
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px;
`;

export const FooterMsg = styled.div`
  font-size: 36px;
  line-height: 1.2;
  font-weight: 600;
  color: #fff;
  // background-color: #595959;
  flex-basis: 50%;

  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
  @media screen and (max-width: 400px) {
    font-size: 24px;
  }
`;

export const FooterSocialNetworkContainer = styled.div`
  flex-basis: 50%;
  //background-color: #919191;
`;

export const FooterSocialNetworkWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const FooterImg = styled.img`
  width: 36px;
  height: 36px;
  margin: 10px;
`;
