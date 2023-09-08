'use client'

function InputName({text}) {
  return (
    <>
      
        <div className="mt-4">
          <label className="block text-gray-600 font-bold mb-2">
            {text}
            <input
              className="border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id=""
            />
          </label>
        
      </div>
    </>
  );
}
export default InputName;
