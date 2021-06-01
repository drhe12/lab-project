import styled from "styled-components";

export const SliderNav = styled.nav`
  min-width: 180px;
  width: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  @media screen and (max-width: 1325px) {
    min-width: 150px;
  }
  @media screen and (max-width: 1290px) {
    min-width: 110px;
  }
  @media screen and (max-width: 1260px) {
    min-width: 80px;
  }
  @media screen and (max-width: 1250px) {
    min-width: 65px;
  }
  @media screen and (max-width: 1235px) {
    min-width: 50px;
  }
  @media screen and (max-width: 1235px) {
    min-width: 50px;
  }
  @media screen and (max-width: 1225px) {
    min-width: 45px;
  }
  @media screen and (max-width: 1200px) {
    min-width: 35px;
  }
  @media screen and (max-width: 768px) {
    min-width: 90px;
  }
  @media screen and (max-width: 735px) {
    min-width: 80px;
  }
  @media screen and (max-width: 700px) {
    min-width: 60px;
  }
  @media screen and (max-width: 640px) {
    min-width: 50px;
  }
  @media screen and (max-width: 625px) {
    min-width: 30px;
  }
  @media screen and (max-width: 600px) {
    min-width: 25px;
  }
`;

export const SliderUl = styled.ul``;

export const SliderLi = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0;
  list-style: none;
`;

export const SliderSpan = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: linear-gradient(
    112.52deg,
    #ff89a1 -8.6%,
    #f5365c 35.65%,
    #bf0026 79.66%
  );
  box-shadow: 0px 4px 6px rgba(245, 54, 92, 0.4),
    0px 1px 3px rgba(245, 54, 92, 0.1);
`;
