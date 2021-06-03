import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #333333;
  justify-content: center;
  top: 0;
  display: flex;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 920px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 60px 20px 60px 20px;
`;

export const FooterMsg = styled.div`
  font-size: 30px;
  line-height: 1.2;
  font-weight: 600;
  color: #fff;
  flex-basis: 50%;
`;

export const FooterSocialNetworkContainer = styled.div`
  flex-basis: 50%;
`;

export const FooterSocialNetworkWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const FooterImg = styled.img`
  width: 32px;
  height: 32px;
  margin: 10px;
`;
