"use client";
import useElementSize from "@/app/utils/useElementSize";
import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

function InputFirma({ id }) {
  const contentSignaturePad = useRef(null);
  const { width, height } = useElementSize(contentSignaturePad);
  console.log(width, height);

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
      <div className="h-full w-full firma-container text-black">
        <div
          className="h-full w-full signature-container text-black border-2 border-red-600"
          ref={contentSignaturePad}
        >
          <SignatureCanvas
            id={padId}
            className="signature-pad "
            canvasProps={{width:width, height: height}}
            ref={(ref) => setFirma(ref)}
          />
        </div>

        <div className="bg-green-400">
          <button
            type="button"
            className="btn btn-clear"
            onClick={handleClearClick}
          >
            Limpiar
          </button>
          <button
            type="button"
            className="btn btn-save"
            onClick={handleSaveClick}
          >
            Guardar
          </button>
        </div>
      </div>
    </>
  );
}

export default InputFirma;
