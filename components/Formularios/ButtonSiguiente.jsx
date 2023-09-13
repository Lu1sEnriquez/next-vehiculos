function ButtonSiguiente({onClick, text}) {
  return (
    <button
    onClick={onClick}
      className="md:absolute block
        md:right-16 md:bottom-6
        
        
        bg-AzulTurquesa text-blanco
        px-5 py-2 rounded-md 
        shadow-lg
        shadow-gray-400
        "
    >
    {text}
    </button>
  );
}
export default ButtonSiguiente;
