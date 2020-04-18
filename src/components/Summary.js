import React from "react";
import { primerMayuscula } from '../helper';

const Summary = ({ datos, quote }) => {
  const { brand, year, plan } = datos;

  if (brand === "" || year === "" || plan === "") return null;
  return (
    <div>
      <div className="flex-w size1 p-b-47">
        <div className="txt1 p-r-25">
          <span className="lnr lnr-map-marker"></span>
        </div>

        <div className="flex-col size2">
          <span className="txt2">Brand: {primerMayuscula(brand)} </span>
          <span className="txt2">Year: {primerMayuscula(year)} </span>
          <span className="txt2">Plan: {plan} </span>
        </div>
      </div>
      <div className="dis-flex size1 p-b-47">
        <div className="txt1 p-r-25">
          <span className="lnr lnr-phone-handset"></span>
        </div>

        <div className="flex-col size2">
          <span className="txt2 p-b-20">Total: </span>

          <span className="txt3">$ {quote}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
