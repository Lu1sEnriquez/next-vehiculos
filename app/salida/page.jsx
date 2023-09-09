import DatePicker from "@/components/Formularios/InputDate";
import FormularioSalida from "@/components/Formularios/FormularioSalida";
import ButtonMas from "@/components/buttonMas";

function page() {
  return (
    <div className="container bg-[#f2f2f2] text-black  w-screen h-full ">
      <FormularioSalida></FormularioSalida>
      <div className="absolute bottom-32 right-32 ">
        <ButtonMas className></ButtonMas>
      </div>
    </div>
  );
}
export default page;
