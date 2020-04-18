import React, { useState } from "react";
import "./css/main.css";
import "./css/util.css";
import "./Header";
import Formulario from "./components/Formulario";
import Summary from "./components/Summary";
import Spinner from "./components/Spinner";

function App() {
  const [summary, setSummary] = useState({
    quote: 0,
    datos: {
      brand: "",
      year: "",
      plan: "",
    },
  });
  const [cargando, guardarCargando] = useState(false);

  //extraemos los datos
  const { quote, datos } = summary;

  return (
    <div className="App">
      <div className="container-contact100">
        <div className="wrap-contact100">
          <Formulario
            setSummary={setSummary}
            guardarCargando={guardarCargando}
          />

          <div className="contact100-more flex-col-c-m">
            <span className="txt4 p-b-20">Car Quotation</span>
            {cargando ? <Spinner /> : null}
            <Summary datos={datos} quote={quote} />
          </div>
        </div>
      </div>

      <div id="dropDownSelect1"></div>

      <script src="vendor/jquery/jquery-3.2.1.min.js"></script>

      <script src="vendor/animsition/js/animsition.min.js"></script>

      <script src="vendor/bootstrap/js/popper.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

      <script src="vendor/select2/select2.min.js"></script>

      <script src="vendor/daterangepicker/moment.min.js"></script>
      <script src="vendor/daterangepicker/daterangepicker.js"></script>

      <script src="vendor/countdowntime/countdowntime.js"></script>

      <script src="js/main.js"></script>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"
      ></script>
    </div>
  );
}

export default App;
