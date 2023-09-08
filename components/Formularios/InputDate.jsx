"use client";
import React, { useState } from "react";

const InputDate = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (evt) => {
    setSelectedDate(evt.target.value);
  };

  return (
    <>
      <label className="block text-gray-600 font-bold mb-2">
        Fecha de Salida:
      </label>
      <input
        type="date"
        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={handleDateChange}
        value={selectedDate}
      />

      {/* aqui  se maneja si hay una fecha seleccionada
      {selectedDate && (
        <p className="text-gray-600 mt-2">Fecha seleccionada: {selectedDate}</p>
      )}
      {selectedTime && (
        <p className="text-gray-600 mt-2">Hora seleccionada: {selectedTime}</p>
      )} */}
    </>
  );
};

export default InputDate;
