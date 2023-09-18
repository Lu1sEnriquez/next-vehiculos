"use client";

import useModal from "@/app/utils/useModal";
import ButtonAzul from "../Formularios/ButtonAzul";
import Modal from "./Modal";


function ButtonActiveModal({ children, textButton, titleModal }) {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <>
      <ButtonAzul
        text={textButton}
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
