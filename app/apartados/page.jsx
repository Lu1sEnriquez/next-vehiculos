'use client'

import ButtonAzul from "@/components/Formularios/ButtonAzul"
import generarPDF from "../utils/PDF/generarPDF"
import firma from '@/assets/icons/F_V_3529_1693891975915.svg'
import { useEffect, useRef, useState } from "react";
import auto from '@/assets/icons/auto.png'




function Page() {

  const [imagen ,setImg] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    
    // Cargar la imagen de fondo
    const fondo = new Image();
    fondo.src = auto.src; // Reemplaza con la ruta de tu imagen de fondo

    fondo.onload = function () {
      // Dibujar la imagen de fondo en el canvas
      ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);

      // Dibujar contenido adicional (por ejemplo, un rectángulo)
      ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
      ctx.fillRect(100, 100, 200, 200);

      // Convertir el canvas en una imagen
      const imagenGenerada = new Image();
      imagenGenerada.src = canvas.toDataURL("image/png");

      // Agregar la imagen generada al DOM o hacer lo que desees con ella
      setImg(imagenGenerada)
    };
  }, []);



  return (
   <main className='container flex flex-col gap-10 items-center justify-center'>
    <div>
      <canvas ref={canvasRef} width={500} height={300} style={{ border:'2px solid black' }}>
    </canvas>
    </div>
    <ButtonAzul text={"generarPDF"} onClick={()=>{generarPDF(imagen)}}></ButtonAzul>
   </main>
  )
}
export default Page