'use client'

function InputName({text}) {
  return (
    <>
      
        <div className="">
          <label className="block text-gray-500 font-semibold mb-3">
            {text}
          </label>
            <input
              className="border  border-slate-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
              shadow-md shadow-gray-300
              "
              type="text"
              id=""
            />
        
      </div>
    </>
  );
}
export default InputName;
