import Image from "next/image";
import InputDate from "./InputDate";

import InputPlacaVehiculo from "./InputPlacaVehiculo";
import InputName from "./InputName";
import InputHora from "./InputHora";
import InputKilometraje from "./InputKilometraje";
import InputCarroceria from "./InputCarroceria";

function FormularioSalida() {
  return (
    <div className="md:px-5 flex flex-wrap justify-around ">
      <div className="columna1 lg:w-96 md:w-72 sm:w-30 lg:text-2xl sm:text-xl">
        <InputDate />
        <InputName text={'Nombre Solicitante:'} />
        <InputPlacaVehiculo />
      </div>

      <div className="columna2 lg:w-96 md:w-72 sm:w-30 lg:text-2xl sm:text-xl">
        <InputHora />
        <InputKilometraje/>
        <InputName text={'Nombre Vigilante:'} />
        <InputCarroceria></InputCarroceria>
      </div>
    </div>
  );
}
export default FormularioSalida;
