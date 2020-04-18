import React, { useState, Fragment } from "react";
import "./../../src/css/main.css";
import "./../../src/css/util.css";
import styled from "@emotion/styled";
import { getYearDifference, estimatebyBrand, estimatebyPlan } from "../helper";

const Error = styled.h2`
  content: attr(data-validate);
  width: 50%;
  padding: 15px;
  margin: auto;
  display: block;
  background-color: #fff;
  border: 1px solid #c80000;
  border-radius: 2px;

  font-family: Poppins-Regular;
  color: #c80000;
  font-size: 13px;
  line-height: 1.4;
  text-align: center;
`;
const Formulario = ({ setSummary, guardarCargando }) => {
  const [datos, saveData] = useState({
    brand: "",
    year: "",
    plan: "",
  });
  //extraemos los valores del state
  const { brand, year, plan } = datos;

  //error alert
  const [error, setError] = useState(false);

  //leemos los datos del form y los colocamos en el state
  const obtainInformation = (e) => {
    saveData({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const makeCarQuotation = (e) => {
    e.preventDefault();
    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    //precio base de 2000
    let result = 2000;

    //obtener differencia de a;os
    const diferencia = getYearDifference(year);

    //por cada a;o restamos un 3% del precio base
    result -= (diferencia * 3 * result) / 100;

    result = estimatebyBrand(brand) * result;

    const incrementPlan = estimatebyPlan(plan);
    result = parseFloat(incrementPlan * result).toFixed(2);

    guardarCargando(true);

    setTimeout(() => {
      // Elimina el spinner
      guardarCargando(false);

      // pasa la información al componente principal
      setSummary({
        quote: Number(result),
        datos,
      });
    }, 3000);

    console.log("result", result);
  };

  return (
    <Fragment>
      <form
        className="contact100-form validate-form"
        onSubmit={makeCarQuotation}
      >
        <span className="contact100-form-title">Obtain you Car Quotation</span>

        <select
          name="brand"
          value={brand}
          className="label-input100"
          onChange={obtainInformation}
        >
          <option value="">Brand</option>
          <option value="toyota">Toyota</option>
          <option value="fiat">Fiat</option>
          <option value="citroen">Citröen</option>
          <option value="porsche">Porsche</option>
          <option value="audi">Audi</option>
        </select>

        <select
          name="year"
          value={year}
          className="label-input100"
          onChange={obtainInformation}
        >
          <option value="">Year</option>

          <option value="2018">2020</option>
          <option value="2018">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
          <option value="2004">2004</option>
          <option value="2003">2003</option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
          <option value="1999">1999</option>
          <option value="1998">1998</option>
          <option value="1997">1997</option>
          <option value="1996">1996</option>
          <option value="1995">1995</option>
          <option value="1994">1994</option>
          <option value="1993">1993</option>
          <option value="1992">1992</option>
          <option value="1991">1991</option>
          <option value="1990">1990</option>
          <option value="1989">1989</option>
          <option value="1988">1988</option>
          <option value="1987">1987</option>
          <option value="1986">1986</option>
          <option value="1985">1985</option>
          <option value="1984">1984</option>
          <option value="1983">1983</option>
          <option value="1982">1982</option>
          <option value="1981">1981</option>
          <option value="1980">1980</option>
          <option value="1979">1979</option>
          <option value="1978">1978</option>
          <option value="1977">1977</option>
          <option value="1976">1976</option>
          <option value="1975">1975</option>
          <option value="1974">1974</option>
          <option value="1973">1973</option>
          <option value="1972">1972</option>
          <option value="1971">1971</option>
          <option value="1970">1970</option>
          <option value="1969">1969</option>
          <option value="1968">1968</option>
          <option value="1967">1967</option>
          <option value="1966">1966</option>
          <option value="1965">1965</option>
          <option value="1964">1964</option>
          <option value="1963">1963</option>
          <option value="1962">1962</option>
          <option value="1961">1961</option>
          <option value="1960">1960</option>
          <option value="1959">1959</option>
          <option value="1958">1958</option>
          <option value="1957">1957</option>
          <option value="1956">1956</option>
          <option value="1955">1955</option>
          <option value="1954">1954</option>
          <option value="1953">1953</option>
          <option value="1952">1952</option>
          <option value="1951">1951</option>
          <option value="1950">1950</option>
        </select>

        <div className="label-input100">
          <input
            className="form-check-input"
            type="radio"
            name="plan"
            id="inlineRadio1"
            value="Basic"
            checked={plan === "Basic"}
            onChange={obtainInformation}
          ></input>
          <label className="form-check-label" for="inlineRadio1">
            Plan Básico
          </label>

          <input
            className="form-check-input"
            type="radio"
            name="plan"
            id="inlineRadio1"
            value="Complete"
            checked={plan === "Complete"}
            onChange={obtainInformation}
          ></input>
          <label className="form-check-label" for="inlineRadio2">
            Plan complete
          </label>
        </div>
        {error ? <Error>Please complete all fields</Error> : null}
        <div className="container-contact100-form-btn">
          <button className="contact100-form-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Formulario;
