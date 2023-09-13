"use client";

import useModal from "@/app/utils/useModal";
import ButtonAzul from "../Formularios/ButtonAzul";
import Modal from "./Modal";

/**
 * 
 * @param {children} ChildrenModal 
 * @param {textButton} textButton
 * @param {titleModal} tittleHeaderModal 
 * 
 * @returns 
 */
function ButtonActiveModal({ children, textButton, titleModal }) {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <>
      <ButtonAzul
        text={"Agregar Firma"}
        onClick={openModal}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={titleModal}
      >
        {children}
      </Modal>
    </>
  );
}
export default ButtonActiveModal;
