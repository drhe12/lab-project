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
  const [laboratorio, setLaboratorio] = useState("");
  const [clase, setClase] = useState("form-control");

  const curseChange = (e) => {
    setCurso(e.target.value);
    laboChange(e.target.value, ciudad);
  };
  const cityChange = (e) => {
    setCiudad(e.target.value);
    laboChange(curso, e.target.value);
  };

  const laboChange = (curse, city) => {
    switch (city) {
      case "3":
      case "4":
      case "5":
      case "6":
      case "8":
        if (curse === "2") {
          setLaboratorio("A-201");
          setClase("form-control is-valid");
        } else if (curse === "3") {
          setLaboratorio("A-202");
          setClase("form-control is-valid");
        } else if (curse === "4") {
          setLaboratorio("A-101");
          setClase("form-control is-valid");
        } else if (curse === "5") {
          setLaboratorio("A-102");
          setClase("form-control is-valid");
        }
        break;
      case "2":
        if (curse === "2" || curse === "3") {
          setLaboratorio("B-202");
          setClase("form-control is-valid");
        } else if (curse === "4" || curse === "5") {
          setLaboratorio("B-101");
          setClase("form-control is-valid");
        }
        break;
      case "7":
        if (curse === "2") {
          setLaboratorio("C-302");
          setClase("form-control is-valid");
        } else if (curse === "3") {
          setLaboratorio("C-304");
          setClase("form-control is-valid");
        } else if (curse === "4") {
          setLaboratorio("B-102");
          setClase("form-control is-valid");
        } else if (curse === "5") {
          setLaboratorio("B-104");
          setClase("form-control is-valid");
        }
        break;
      default:
        console.log(laboratorio);
        break;
    }
    // if (curse > 1 && city > 1) {
    //   setLaboratorio("C-104");
    // }
  };

  const handleSubmit = (event) => {
    alert("Tu laboratorio es: " + laboratorio);
    event.preventDefault();
    setCurso("1");
    setCiudad("1");
    setLaboratorio("");
    setClase("form-control");
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
                  //onChange={laboChange}
                  //class="form-control is-valid"
                  className={clase}
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
