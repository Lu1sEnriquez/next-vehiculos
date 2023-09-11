'use client'

import { useState } from "react";
import LabelFormulario from "../LabelFormulario";

function InputHora() {

  const [selectedTime, setSelectedTime] = useState("");


  const handleTimeChange = (evt) => {
    setSelectedTime(evt.target.value);
  };
  return (
    <>
    <div className="w-full">
      <LabelFormulario>Fecha de Salida:</LabelFormulario>
      <input
        type="time"
        className="border bg-white border-slate-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
        shadow-md shadow-gray-300
        "
        onChange={handleTimeChange}
        value={selectedTime}
        id="hora"
      />
      </div>
    </>
  );
}
export default InputHora;
