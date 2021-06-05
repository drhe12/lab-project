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
              offset={0}
              duration={500}
              // isDynamic={true}
              // onSetActive={this.handleSetActive}
            ></SliderSpan>
          </SliderLi>
          <SliderLi>
            <SliderSpan
              to="info"
              spy={true}
              exact="true"
              smooth={true}
              offset={0}
              duration={500}
            ></SliderSpan>
          </SliderLi>
          <SliderLi>
            <SliderSpan
              to="filter"
              spy={true}
              exact="true"
              smooth={true}
              offset={0}
              duration={500}
            ></SliderSpan>
          </SliderLi>
          <SliderLi>
            <SliderSpan2
              to="sponsor"
              spy={true}
              //exact="true"
              smooth={true}
              offset={-50}
              duration={500}
            ></SliderSpan2>
          </SliderLi>
        </SliderUl>
      </SliderNav>
    </>
  );
};

export default Slider;
