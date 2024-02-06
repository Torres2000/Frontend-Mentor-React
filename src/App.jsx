/** @format */

import { useState } from "react";
import icono from "./assets/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <>
      <section className="container">
        <div>
          <img src={icono} alt="" />
        </div>
        <div className="contenido">
          <p>Improve your front-end skills by building projects </p>
          <span>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the
            next level
          </span>
        </div>
      </section>
    </>
  );
}

export default App;
