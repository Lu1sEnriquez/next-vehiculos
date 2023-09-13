'use client'

import ButtonActiveModal from "@/components/modal/ButtonActiveModal"
import InputFirma from "@/components/Formularios/inputs/InputFirma"

function page() {
  return (
    <ButtonActiveModal
    textButton={'agregar Firma'}
    titleModal={'Firma Guardia'}

    >
      <InputFirma></InputFirma>
    </ButtonActiveModal>
  )
}
export default page