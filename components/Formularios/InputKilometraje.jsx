function InputKilometraje() {
  return (
    <>
      <div className="w-60 sm:text-2xl">
        <div className="mt-4">
          <label className="block text-gray-600 font-bold mb-2">
            Kilometraje:
            <input
              className="border border-slate-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              max={999}
              id="Kilometraje"
            />
          </label>
        </div>
      </div>
      </>
  )
}
export default InputKilometraje