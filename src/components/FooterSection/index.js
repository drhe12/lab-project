import React from "react";
import fb from "../../assets/images/fb-icon.svg";
import instagram from "../../assets/images/instagram-icon.svg";
import {
  FooterContainer,
  FooterWrapper,
  FooterMsg,
  FooterSocialNetworkContainer,
  FooterSocialNetworkWrapper,
  FooterImg,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterMsg>¡Vive la experiencia de laboratorio virtual!</FooterMsg>

        <FooterSocialNetworkContainer>
          <FooterSocialNetworkWrapper>
            <FooterImg src={fb} />
            <FooterImg src={instagram} />
          </FooterSocialNetworkWrapper>
        </FooterSocialNetworkContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
