"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";

import logoItson from '@/assets/icons/LogoItson.png'

function NavbarMovil() {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <nav
      className={` bg-azulOscuro text-blanco  font-medium
     flex md:justify-between lg:justify-between justify-between 
     top-0 mb-4 
     md:px-10 md:py-3 
     items-center   
     fixed  
     w-full 
     z-30
    `}
    >
        <Link href={'/'} className="w-28 ml-5">
          <Image src={logoItson}>

          </Image>
        </Link>
        <div className=" py-3 flex justify-end pr-5 md:pr-0">
          <HiMenuAlt3
            size={32}
            className="cursor-pointer"
            onClick={handleClick}
          />
        </div>
      
    </nav>
  );
}
export default NavbarMovil;
