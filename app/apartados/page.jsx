'use client'

import ButtonActiveModal from "@/components/Formularios/ButtonActiveModal"
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