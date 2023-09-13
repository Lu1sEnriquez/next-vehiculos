import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center  justify-center bg-opacity-50 bg-black">
      <div className="bg-white w-5/6 h-[calc(100vh-5rem)] rounded-lg overflow-hidden relative">
        <button onClick={onClose} className="close-button absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <AiOutlineClose size={40} />
        </button>
        <div className="bg-gray-800 text-white py-2 px-6">
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <div className="relative m-2 w-auto h-5/6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

