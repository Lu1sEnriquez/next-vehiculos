"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import autoImage from "@/assets/icons/auto.png";
import ButtonAzul from "../ButtonAzul";
import useElementSize from "@/app/utils/useElementSize";

function CarroseriaUI() {
  
  const containerCanvas = useRef(null);
  const containerCanvasSize = useElementSize(containerCanvas);
  
  const imageRef = useRef(null);
  const {width, height} = useElementSize(imageRef);
  
  /**---------------diseño ------------------------ */


  const [mode, setMode] = useState(true);
  const [coordenadas, setCoordenadas] = useState([]); // Estado para almacenar coordenadas X y Y
  const [data, setData] = useState(null);
  const canvasRef = useRef(null); // Referencia al elemento de lienzo
  let ctx;
  // Función para dibujar las marcas (equises) en el canvas
  function drawMarks() {
     ctx = canvasRef.current.getContext("2d");

  

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;

    coordenadas.forEach((marca) => {

      const newCoordenadas= redimensionarCoordenada(marca,marca.widthOriginal,marca.heightOriginal, width, height)
      

      ctx.beginPath();
      ctx.moveTo(newCoordenadas.x - 10, newCoordenadas.y - 10);
      ctx.lineTo(newCoordenadas.x + 10, newCoordenadas.y + 10);
      ctx.moveTo(newCoordenadas.x - 10, newCoordenadas.y + 10);
      ctx.lineTo(newCoordenadas.x + 10, newCoordenadas.y - 10);
      ctx.stroke();
    });
  }

  function redimensionarCoordenada(coordenada, originalWidth, originalHeight, newWidth, newHeight) {
    const xRatio = newWidth / originalWidth;
    const yRatio = newHeight / originalHeight;

    const newX = coordenada.x * xRatio;
    const newY = coordenada.y * yRatio;

    return { x: newX, y: newY };
}




  // Agregar una marca al hacer clic en la imagen
  function addMark(event) {
    const rect = canvasRef.current.getBoundingClientRect();
    console.log(rect);
    const x = event.clientX - rect.left;
    console.log('x '+x);
    const y = event.clientY - rect.top;
    console.log('y '+y);
    setCoordenadas((coordenadasAnteriores) => {
      const nuevasCoordenadas = [...coordenadasAnteriores, { x, y, widthOriginal : width, heightOriginal : height }];
      return nuevasCoordenadas;
    });

    updateCoordinatesInput();
  }

  

  // Eliminar una marca si se hace clic en ella
  function removeMark(event) {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setCoordenadas((coordenadas) => {
      const coordenadasFiltradas = coordenadas.filter((marca) => {
        const distance = Math.sqrt((x - marca.x) ** 2 + (y - marca.y) ** 2);

        return distance >= 10;
      });

      return coordenadasFiltradas;
    });

    updateCoordinatesInput();
  }

  // Borrar todas las marcas del canvas
  function clearMarks() {
    const ctx = canvasRef.current.getContext("2d");

    setCoordenadas([]);
    ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
    updateCoordinatesInput();
  }

  // Agregar un efecto para dibujar las marcas cuando cambie el estado de coordenadas
  useEffect(() => {
    ctx = canvasRef.current.getContext("2d");
    drawMarks();
    console.log(canvasRef.current.width);
    console.log(canvasRef.current.height );
  }, [coordenadas,width,height ]);

  // Actualizar el valor del campo de coordenadas oculto
  function updateCoordinatesInput() {
    setData(JSON.stringify(coordenadas));
  }

  function handleAgregar() {
    setMode(true);
  }
  function handleEliminar() {
    setMode(false);
  }

  function handleCanvas(event) {
    if (mode) {
      return addMark(event);
    } else {
      return removeMark(event);
    }
  }

 
  return (
    <div
      id="auto-container"
      className="h-full w-full flex pb-10 flex-col items-center gap-3"
    >
      <div
        id="container-espacioSobrante-Central"
        className="h-1 grow w-5/6  text-black border-2"
        ref={containerCanvas}
      >
        <div className="container-canvasImg relative  w-full     ">
          <Image
          className="border-2 border-green-700"
            src={autoImage}
            height={containerCanvasSize.height }
            alt="car"
            ref={imageRef}
          />
          <canvas
            onClick={(e) => {
              handleCanvas(e);
            }}
            className="absolute top-0  z-10  border-red-700 border-2"
            ref={canvasRef}
            width={width} // Ancho del canvas (ajusta según tus necesidades)
            height={height} // Altura del canvas (ajusta según tus necesidades)
          />
        </div>
      </div>

      <div className="container-buttons flex flex-row justify-end gap-2 w-5/6 pb-2">
        <ButtonAzul
          text={"Agregar"}
          onClick={(e) => {
            handleAgregar(e);
          }}
        />
        <ButtonAzul
          text={"Eliminar"}
          onClick={(e) => {
            handleEliminar(e);
          }}
        />
        <ButtonAzul text={"Enviar"} />
      </div>
    </div>
  );
}

export default CarroseriaUI;
