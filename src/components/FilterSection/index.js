import React from "react";
import {
  FilterContainer,
  FilterH1,
  FilterWrapper,
  BtnWrap,
  ImgGusano,
  ImgBlueCircle,
  ImgPinkCircle,
  ImgGusanoBottom,
  ImgCircle,
} from "./FilterElements";
import { Form, Row, Col, FormGroup, Input, Button } from "reactstrap";
import gusano from "../../assets/images/Gusano.svg";
import blueCircle from "../../assets/images/Blue_circle.svg";
import pinkCircle from "../../assets/images/Pink_circle.svg";
import circle from "../../assets/images/Ellipse.svg";

const FilterSection = () => {
  return (
    <>
      <FilterContainer>
        <ImgGusano src={gusano} />
        <FilterH1>Mira los cursos y los laboratorios disponibles</FilterH1>
        <ImgBlueCircle src={blueCircle} />
        <FilterWrapper>
          {/* <label className="custom-control-label">1. Escoge tu curso</label> */}

          <Form>
            <Row>
              <Col>
                <FormGroup>
                  <label>1. Escoge tu curso</label>
                  <Input
                    id="exampleFormControlInput1"
                    placeholder="Curso"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <label>2. Escoge tu departamento</label>
                  <Input
                    id="exampleFormControlInput1"
                    placeholder="Departamento"
                    type="text"
                  />
                  {/* <input
                    type="text"
                    class="form-control form-control-alternative"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  /> */}
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <label>3. </label>
                  {/* <Input
                    id="exampleFormControlInput1"
                    placeholder="Laboratorio"
                    type="text"
                  /> */}
                  <Input
                    type="text"
                    placeholder="Laboratorio"
                    // value="Laboratorio C-304"
                    // class="form-control is-valid"
                    class="form-control"
                    disabled
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
          <BtnWrap>
            <Button color="success" type="button">
              ¡Vamos!
            </Button>
          </BtnWrap>
        </FilterWrapper>
        <ImgPinkCircle src={pinkCircle} />
        <ImgCircle src={circle} />
        <ImgGusanoBottom src={gusano} />
      </FilterContainer>
    </>
  );
};

export default FilterSection;
