"use client";

import React, { useState,useEffect } from "react";
import NavbarDesktop from "./navbarDesktop";
import useDeviceSize from "@/app/utils/useDeviseSize";
import NavbarMovil from "./NavbarMovil";


function NavbarPrincipal() {
  
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  console.log(width);
  return (
    <div className="w-auto">
      <>
      {
      width > 768
      ?<NavbarDesktop></NavbarDesktop>
      :<NavbarMovil></NavbarMovil>

      }
      </>
    </div>
  );
}
export default NavbarPrincipal;
