import React from "react";
import logo_utp from "../../assets/images/sponsor-utp-logo.svg";
import logo_ieeecs from "../../assets/images/sponsor-ieeecs-logo.svg";

import {
  SponsorContainer,
  SponsorWrapper,
  SponsorTitle,
  SponsorItemWrapper,
  SponsorItem,
  SponsorImg
} from "./SponsorElements";

const SponsorSection = () => {
  return (
    <SponsorContainer>
      <SponsorWrapper>
        <SponsorTitle>Con el respaldo de</SponsorTitle>
        <SponsorItemWrapper>
          <SponsorItem>
            <SponsorImg src={logo_utp} />
          </SponsorItem>
          <SponsorItem>
            <SponsorImg src={logo_ieeecs} />
          </SponsorItem>
        </SponsorItemWrapper>
      </SponsorWrapper>
    </SponsorContainer>
  );
};

export default SponsorSection;
