function ButtonAzul({onClick, text}) {
  return (
    <button
    onClick={onClick}
      className="   
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
export default ButtonAzul;
