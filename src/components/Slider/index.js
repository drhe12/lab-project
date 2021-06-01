import React from "react";
// import "./slider.css";

import { SliderNav, SliderUl, SliderLi, SliderSpan } from "./SliderElements";

const Slider = () => {
  return (
    <>
      {/* <nav className="nav-slider">
        <ul className="nav-slider-items">
          <li className="nav-text">
            <span className="circle"></span>
          </li>
          <li className="nav-text">
            <span className="circle"></span>
          </li>
          <li className="nav-text">
            <span className="circle"></span>
          </li>
          <li className="nav-text">
            <span className="circle"></span>
          </li> */}
      {/* <PaginationItem className="disabled">
            <PaginationLink
              href="#pablo"
              onClick={(e) => e.preventDefault()}
              tabIndex="-1"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="disabled">
            <PaginationLink
              href="#pablo"
              onClick={(e) => e.preventDefault()}
              tabIndex="-1"
            >
              <span className="nav-text">*</span>
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="disabled">
            <PaginationLink
              href="#pablo"
              onClick={(e) => e.preventDefault()}
              tabIndex="-1"
            >
              3
            </PaginationLink>
          </PaginationItem> */}
      <SliderNav>
        <SliderUl>
          <SliderLi>
            <SliderSpan></SliderSpan>
          </SliderLi>
          <SliderLi>
            <SliderSpan></SliderSpan>
          </SliderLi>
          <SliderLi>
            <SliderSpan></SliderSpan>
          </SliderLi>
          <SliderLi>
            <SliderSpan></SliderSpan>
          </SliderLi>
        </SliderUl>
      </SliderNav>
    </>
  );
};

export default Slider;
