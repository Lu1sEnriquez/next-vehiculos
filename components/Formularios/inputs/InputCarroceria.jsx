"use client";

import LabelFormulario from "../LabelFormulario";

function InputCarroceria() {
  return (
    <div className="flex flex-col">
      <LabelFormulario>Tiene daños el vehiculo?</LabelFormulario>
      <label className="flex items-center gap-3 ">
        <input className="w-5 h-5 checked:bg-black border-red"
          type="radio"
          name="daños"
          id="daños"
        />
        Si
      </label>
      <label className="flex items-center gap-3 ">
        <input
        className="w-5 h-5 
        checked:bg-black border-red"
          type="radio"
          name="daños"
        />
        No
      </label>
    </div>
  );
}

export default InputCarroceria;
