"use client";
import useElementSize from "@/app/utils/useElementSize";
import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import ButtonAzul from "../ButtonAzul";
import CreateImageFirmaURL from "@/app/utils/CreateImageFirmaURL";

function InputFirma({ id }) {
  const contentSignaturePad = useRef(null);
  const { width, height } = useElementSize(contentSignaturePad);

  const [firma, setFirma] = useState(null);
  const padId = `${id}-canvas`;

  function handleClearClick() {
    if (firma) {
      firma.clear();
    }
  }

  function handleSaveClick() {
    if (firma) {
      const imageDataURL = CreateImageFirmaURL(firma, "svg"); // svg || png
      // Guarda la imagen en una variable imageDataURL
      console.log("Imagen en formato base64:", imageDataURL);
    }
  }

  return (
    <div className="firma-container h-full w-full  flex pb-10 flex-col ">
      <div
        className="signature-container h-1 grow w-full  text-black border-2 "
        ref={contentSignaturePad}
      >
        <SignatureCanvas
          id={padId}
          className="signature-pad "
          canvasProps={{ width: width - 2, height: height - 2 }}
          ref={(ref) => setFirma(ref)}
        />
      </div>

      <div className="w-full  flex flex-row gap-x-3 justify-end p-3   ">
        <ButtonAzul
          type="button"
          className="btn btn-clear"
          onClick={handleClearClick}
          text={"Limpiar"}
        />
        <ButtonAzul
          type="button"
          className="btn btn-save"
          onClick={handleSaveClick}
          text={"Guardar"}
        />
      </div>
    </div>
  );
}

export default InputFirma;
