import jsPDF from 'jspdf';
import img from './ReporteEntradaSalidaPart1.png'; // Asegúrate de que la ruta sea correcta

function generarPDF() {
  // Crear un nuevo documento PDF
  const doc = new jsPDF();

  // Agregar la imagen al PDF
  doc.addImage(img, 'PNG', 10, 10, 100, 100); // Ejemplo de cómo agregar la imagen al PDF

  // Guardar el PDF o ofrecerlo para su descarga
  doc.save('mi_documento.pdf');
}

export default generarPDF;