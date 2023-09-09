'use client'
import React, { useState } from "react";
import SignatureCanvas from "react-signature-canvas";

function InputFirma({ id }) {
  
  
  const [firma, setFirma] = useState(null);
  const padId = `${id}-canvas`;

  function handleClearClick() {
    if (firma) {
      firma.clear();
    }
  }

  function handleSaveClick() {
    if (firma) {
      const imageDataURL = firma.toDataURL("image/png");
      // Guarda la imagen en una variable imageDataURL
      console.log("Imagen en formato base64:", imageDataURL);
      // Puedes hacer más cosas con la imagen, como enviarla a un servidor, etc.
    }
  }

  return (
    <>
      <div className="signature-container text-black">
        <label htmlFor={padId}>Firma ({id}):</label>
        <SignatureCanvas
          id={padId}
          className="signature-pad"
          width={400}
          height={200}
          ref={(ref) => setFirma(ref)}
        />
        <button type="button" className="btn btn-clear" onClick={handleClearClick}>
          Limpiar
        </button>
        <button type="button" className="btn btn-save" onClick={handleSaveClick}>
          Guardar
        </button>
      </div>
    </>
  );
}

export default InputFirma;





