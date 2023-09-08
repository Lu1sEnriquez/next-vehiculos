"use client";
import Image from "next/image";

import placaImg from "@/assets/placa-vehiculo.jpg";
import { useState } from "react";

function InputPlacaVehiculo() {
  const [placa, setPlaca] = useState('');

  const handleInputPlaca = (event) => {
    const nuevoValor = event.target.value;
    setPlaca(nuevoValor);
  };
  return (
    <div className="relative">
      <div className="flex flex-row justify-start  ">
        <div className="w-48 sm:text-2xl">
          <div className="mt-4">
            <label className="block text-gray-600 font-bold mb-2">
              Placa Vehiculo:
              <input
                className="border border-slate-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline uppercase"
                type="text"
                maxLength={8}
                id=""
                
                onChange={handleInputPlaca}
                value={placa}
              />
            </label>
          </div>
        </div>

        <div className="relative mt-9 ml-1 ">
          {placa && (
            <>
              <Image
                className="w-20 "
                src={placaImg}
                alt="placa"
              ></Image>
              <div className="absolute top-3 left-3 uppercase flex text-center font-sans font-bold">
                {placa}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default InputPlacaVehiculo;
