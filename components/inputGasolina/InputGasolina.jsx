"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import marcadorGasolina from "@/assets/icons/marcadorGasolina.png";
import useElementSize from "@/app/utils/useElementSize";

function InputGasolina() {
  const [porcentaje, setPorcentaje] = useState(0);

  const containerMarcador = useRef(null);
  const [heightFlecha, setHeightFlecha] = useState(null);
  const { height } = useElementSize(containerMarcador);

  const adjustPercentage = (porcentaje) => {
    let ajuste = 2.3;
    if (porcentaje < 50) {
      // Disminuir uniformemente desde el valor actual hasta 0 cuando es menor que 50
      console.log(porcentaje);
      return porcentaje*1.5;
    } else {
      // Disminuir uniformemente desde 100 cuando es mayor o igual a 50
      return porcentaje - ajuste * (porcentaje / 50);
    }
  };

  const handleChange = (e) => {
    const nuevoPorcentaje = e.target.value;
    setPorcentaje(nuevoPorcentaje);
    setHeightFlecha(() => {
      let borderBottom =
        height == 0
          ? "50px solid red"
          : `${parseInt(height * 0.9)}px solid red`;

      return borderBottom;
    });
  };

  // Calcula la posición del color verde en el gradiente
  const gradientPosition = `${adjustPercentage(porcentaje)}`;

  const red = 255 - porcentaje * 2.55; // Valor de rojo decrece de 255 a 0
  const green = porcentaje * 2.55; // Valor de verde aumenta de 0 a 255

  // Define el estilo CSS del fondo con el gradiente
  const backgroundStyle = {
    background: `linear-gradient(${
      porcentaje * 1.6
    }deg , rgb(${red}, ${green}, 0)${
      gradientPosition - 20
    }%, transparent ${gradientPosition}%, transparent 100%)
        `,
    
  };

  return (
    <section className="gasolina-container border-2 border-red-500 flex flex-col justify-center items-center h-full">
      <div
        className=" rounded-lg w-full border-t-2  rounded-t-full bg-primary relative flex justify-center h-full"
        style={backgroundStyle}
        ref={containerMarcador}
      >
        <div
          style={{
            borderBottom: heightFlecha,
            transformOrigin: "bottom center",
            transform: `rotate(${porcentaje * 1.8 - 90}deg)`,
          }}
          className={`absolute bottom-8 z-10  w-0 h-0  border-r-[0.8rem] border-l-[0.8rem] border-transparent  
             
            `}
        ></div>

        <Image src={marcadorGasolina} />
      </div>
      <div className="mt-8 ">
        <input
          type="range"
          min="0"
          max="100"
          value={porcentaje}
          onChange={handleChange}
        />
      </div>
    </section>
  );
}
export default InputGasolina;
