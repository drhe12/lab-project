import React, { useState } from "react";
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
import { Col, FormGroup, Input, Button } from "reactstrap";
import gusano from "../../assets/images/Gusano.svg";
import blueCircle from "../../assets/images/Blue_circle.svg";
import pinkCircle from "../../assets/images/Pink_circle.svg";
import circle from "../../assets/images/Ellipse.svg";

const FilterSection = () => {
  const [curso, setCurso] = useState("1");
  const [ciudad, setCiudad] = useState("1");
  const [laboratorio, setLaboratorio] = useState();

  const curseChange = (e) => {
    setCurso(e.target.value);
  };
  const cityChange = (e) => {
    setCiudad(e.target.value);
  };

  const handleSubmit = (event) => {
    alert("Tu laboratorio es: " + curso);
    event.preventDefault();
    setCurso("1");
    setCiudad("1");
  };
  return (
    <>
      <FilterContainer id="filter">
        <ImgGusano src={gusano} />
        <FilterH1>Mira los cursos y los laboratorios disponibles</FilterH1>
        <ImgBlueCircle src={blueCircle} />
        <form onSubmit={handleSubmit}>
          <FilterWrapper>
            {/* <label className="custom-control-label">1. Escoge tu curso</label> */}
            <Col>
              <FormGroup>
                <label>1. Escoge tu curso</label>
                {/* <Input id="Input1" placeholder="Curso" type="text" /> */}
                <select
                  value={curso}
                  onChange={curseChange}
                  className="form-control"
                  data-trigger
                  name="curso-select"
                  id="curso-select"
                >
                  <option disabled value="1">
                    Curso
                  </option>
                  <option value="2">Cálculo aplicado a la física 1</option>
                  <option value="3">Cálculo aplicado a la física 2</option>
                  <option value="4">Química General</option>
                  <option value="5">Química Inorgánica</option>
                </select>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <label>2. Escoge tu Ciudad</label>
                {/* <Input id="Input2" placeholder="Departamento" type="text" /> */}
                <select
                  value={ciudad}
                  onChange={cityChange}
                  className="form-control"
                  data-trigger
                  name="ciudad-select"
                  id="ciudad-select"
                >
                  <option disabled value="1">
                    Ciudad
                  </option>
                  <option value="2">Arequipa</option>
                  <option value="3">Chiclayo</option>
                  <option value="4">Chimbote</option>
                  <option value="5">Huancayo</option>
                  <option value="6">Ica</option>
                  <option value="7">Lima</option>
                  <option value="8">Piura</option>
                </select>
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
                  value={laboratorio}
                  //class="form-control is-valid"
                  className="form-control"
                  disabled
                />
              </FormGroup>
            </Col>
          </FilterWrapper>
          <BtnWrap>
            <Button
              color="success"
              disabled={!(curso > 1 && ciudad > 1)}
              type="submit"
            >
              ¡Vamos!
            </Button>
          </BtnWrap>
        </form>
        <ImgPinkCircle src={pinkCircle} />
        <ImgCircle src={circle} />
        <ImgGusanoBottom src={gusano} />
      </FilterContainer>
    </>
  );
};

export default FilterSection;
