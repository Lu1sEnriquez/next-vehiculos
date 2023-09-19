import useDeviceSizeWindow from "@/app/utils/useDeviseSizeWindow";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, onClose, children, title }) => {
  const {width,height} = useDeviceSizeWindow();
  
  if (!isOpen) return null;

  

  return (
    <section className="container-modal fixed z-50 flex items-center  justify-center bg-opacity-50 bg-black w-full h-[100dvh] top-0 left-0 min-h-fit ">
      <div className={`modal bg-white rounded-lg overflow-hidden relative
      ${height<250 ?  'h-[95%]':' h-[90dvh]'}  
      ${width<400 ? 'w-[95%]': 'w-5/6'}
      `}>
        <button
          onClick={onClose}
          className="close-button absolute top-1 right-2 text-gray-500 hover:text-gray-700"
        >
          <AiOutlineClose size={35}  />
        </button>

        <header className="bg-gray-800 text-white py-1 px-6 h-fit">
          <h1 className="text-2xl font-bold">{title}</h1>
        </header>
        <div className="w-auto h-full">{children}</div>
      </div>
    </section>
  );
};

export default Modal;
