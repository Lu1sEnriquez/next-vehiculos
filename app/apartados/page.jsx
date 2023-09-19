
import SeccionIputAccesorios from "@/components/Formularios/SeccionIputAccesorios"
import InputGasolina from "@/components/Formularios/inputGasolina/InputGasolina"



function page() {
  return (
   <main className='container flex flex-col gap-10 items-center justify-center'>
 <InputGasolina></InputGasolina>
   <SeccionIputAccesorios></SeccionIputAccesorios>
   </main>
  )
}
export default page