import Image from "next/image";
import InputDate from "../Formularios/inputs/InputDate";

import InputPlacaVehiculo from "../Formularios/inputs/InputPlacaVehiculo";
import InputName from "../Formularios/inputs/InputName";
import InputHora from "../Formularios/inputs/InputHora";
import InputKilometraje from "../Formularios/inputs/InputKilometraje";
import InputCarroceria from "../Formularios/inputCarroceria/InputCarroceria";
import ButtonActiveModal from "../modal/ButtonActiveModal";
import InputFirma from "../Formularios/inputs/InputFirma";

function FormularioSalida() {
  return (
    <section
      className=" flex flex-wrap sm:justify-around 
    py-5 md:px-5 
    gap-y-5 mr-5 md:gap-0 w-full"
    >
      <div
        className="  columna2 lg:w-96 md:w-72 sm:w-30 lg:text-2xl sm:text-xl 
      w-full mx-5 
      flex flex-col gap-y-5"
      >
        <InputDate />
        <InputName text={"Nombre Solicitante:"} />
        <InputPlacaVehiculo />
        <InputCarroceria></InputCarroceria>
      </div>

      <div
        className="columna2 lg:w-96 md:w-72 sm:w-30 lg:text-2xl sm:text-xl 
      w-full mx-5 
      flex flex-col gap-y-5"
      >
        <InputHora />
        <InputKilometraje />
        <InputName text={"Nombre Vigilante:"} />

        <ButtonActiveModal
          titleModal={"guardia"}
          textButton={"agregar Firma"}
        >
          <InputFirma />
        </ButtonActiveModal>
      </div>
    </section>
  );
}
export default FormularioSalida;
