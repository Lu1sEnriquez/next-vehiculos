import LabelFormulario from "../LabelFormulario"

function InputKilometraje() {
  return (
    <>
      <div className="w-60 sm:text-2xl ">
        
          <LabelFormulario>Kilometraje de Salida:</LabelFormulario>
            <input
              className="border border-slate-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
              shadow-md shadow-gray-300
              "
              type="number"
              max={999}
              id="Kilometraje"
            />
          
        
      </div>
      </>
  )
}
export default InputKilometraje