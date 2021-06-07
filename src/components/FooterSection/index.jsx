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
    <FooterContainer id="footer">
      <FooterWrapper>
        <FooterMsg>¡Vive la experiencia de laboratorio virtual!</FooterMsg>
        <FooterSocialNetworkContainer>
          <FooterSocialNetworkWrapper>
            <a
              href="https://www.facebook.com/UTP.Peru"
              target="_blank"
              rel="noreferrer"
            >
              <FooterImg src={fb} />
            </a>
            <a
              href="https://www.instagram.com/universidadutp/"
              target="_blank"
              rel="noreferrer"
            >
              <FooterImg src={instagram} />
            </a>
          </FooterSocialNetworkWrapper>
        </FooterSocialNetworkContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
