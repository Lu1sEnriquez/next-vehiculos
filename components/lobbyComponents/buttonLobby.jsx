import { createRequire } from "module";
import Image, { ImageProps, StaticImageData } from "next/image";
import React from "react";

export default function ButtonLobby({ children, icon }) {
  return (
    <button className="w-full h-full  bg-blue-900 rounded-2xl flex items-center gap-5 text-white justify-center xl:text-3xl xl:h-24 shadow-xl">
      {children}
      <Image
        src={icon}
        alt=""
        className="w-8 -m-3"
      />
    </button>
  );
}
