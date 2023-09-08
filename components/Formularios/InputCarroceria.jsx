"use client";

function InputCarroceria() {
  return (
    <div className="flex flex-col">
      <label className="block text-gray-600 font-bold mb-2">
        ¿Daños en la Carroceria?
      </label>
      <label className="flex items-center gap-3 ">
        <input className="w-5 h-5 checked:bg-black border-red"
          type="radio"
          name="daños"
        />
        Si
      </label>
      <label className="flex items-center gap-3 ">
        <input
        className="w-5 h-5 checked:bg-black border-red"
          type="radio"
          name="daños"
        />
        No
      </label>
    </div>
  );
}

export default InputCarroceria;
