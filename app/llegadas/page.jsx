import CarroseriaUI from "@/components/Formularios/inputCarroceria/CarroseriaUI"
import InputCarroceria from "@/components/Formularios/inputCarroceria/InputCarroceria"
import ButtonActiveModal from "@/components/modal/ButtonActiveModal"
import Modal from "@/components/modal/Modal"

function page() {
  return (
    <section>
     <ButtonActiveModal textButton={'Agregar Daños'} titleModal={'Daños'}>
      <CarroseriaUI></CarroseriaUI>
     </ButtonActiveModal>
    </section>
  )
}
export default page