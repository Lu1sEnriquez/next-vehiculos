"use client";
import { useState } from "react";
import LabelFormulario from "../LabelFormulario";

const InputDate = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (evt) => {
    setSelectedDate(evt.target.value);
  };

  return (
    <>
      <div className="w-full">
        <LabelFormulario>Fecha de Salida:</LabelFormulario>
        <input
          id="dia"
          type="date"
          className="border bg-white border-slate-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
          shadow-md shadow-gray-300
          "
          onChange={handleDateChange}
          value={selectedDate}
        />
      </div>
    </>
  );
};

export default InputDate;
