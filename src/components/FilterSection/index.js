import React from "react";
import {
  FilterContainer,
  FilterH1,
  FilterWrapper,
  BtnWrap,
  ImgGusano,
} from "./FilterElements";
import { Form, Row, Col, FormGroup, Input, Button } from "reactstrap";
import gusano from "../../assets/images/Gusano.svg";

const FilterSection = () => {
  return (
    <>
      <FilterContainer>
        <ImgGusano src={gusano} />
        <FilterH1>Mira los cursos y los laboratorios disponibles</FilterH1>
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
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <label></label>
                  <Input
                    id="exampleFormControlInput1"
                    placeholder="Laboratorio"
                    type="text"
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
      </FilterContainer>
    </>
  );
};

export default FilterSection;
