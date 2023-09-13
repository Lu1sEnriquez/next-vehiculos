// Modal.js
'use client'
import React from 'react';
import {AiOutlineClose} from 'react-icons/ai'
const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center  justify-center">
      <div className='bg-black w-full h-20 flex  justify-center items-center'>
        <h1 className='text-white text-4xl '>{title}</h1>
      </div>
    <div className="bg-blanco border-2 w-full h-screen">
      <div className="w-full h-full ">
        <button onClick={onClose} className="close-button text-white absolute top-2 right-2">
          <AiOutlineClose size={60}  />
        </button>
        {children}
      </div>
    </div>
  </div>
  );
};

export default Modal;



