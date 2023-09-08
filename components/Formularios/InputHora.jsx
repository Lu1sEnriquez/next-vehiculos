'use client'

import { useState } from "react";

function InputHora() {

  const [selectedTime, setSelectedTime] = useState("");


  const handleTimeChange = (evt) => {
    setSelectedTime(evt.target.value);
  };
  return (
    <>
      <label className="block text-gray-600 font-bold mb-2 mt-4">
        Hora de Salida:
      </label>
      <input
        type="time"
        className="border border-slate-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={handleTimeChange}
        value={selectedTime}
      />
    </>
  );
}
export default InputHora;
