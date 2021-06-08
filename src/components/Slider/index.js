import React from "react";
// import "./slider.css";

import {
  SliderNav,
  SliderUl,
  SliderLi,
  SliderSpan,
  SliderSpan2,
} from "./SliderElements";

const Slider = () => {
  return (
    <>
      <SliderNav>
        <SliderUl>
          <SliderLi>
            <SliderSpan
              to="banner"
              spy={true}
              exact="true"
              smooth={true}
              offset={-50}
              duration={500}
              activeClass="active"
              ignoreCancelEvents={false}
            ></SliderSpan>
          </SliderLi>
          <SliderLi>
            <SliderSpan
              to="info"
              spy={true}
              exact="true"
              smooth={true}
              offset={-50}
              duration={500}
              activeClass="active"
              ignoreCancelEvents={false}
            ></SliderSpan>
          </SliderLi>
          <SliderLi>
            <SliderSpan
              to="filter"
              spy={true}
              exact="true"
              smooth={true}
              offset={-50}
              duration={500}
              activeClass="active"
              ignoreCancelEvents={false}
            ></SliderSpan>
          </SliderLi>
          <SliderLi>
            <SliderSpan2
              to="sponsor"
              spy={true}
              exact="true"
              smooth={true}
              offset={-50}
              duration={500}
              activeClass="active"
              ignoreCancelEvents={false}
            ></SliderSpan2>
          </SliderLi>
        </SliderUl>
      </SliderNav>
    </>
  );
};

export default Slider;
