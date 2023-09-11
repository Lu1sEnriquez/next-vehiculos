/* importaciones de next */
import Image from "next/image";
import Link from "next/link";

/* importaciones de Componentes */
import ButtonLobby from "@/components/lobbyComponents/buttonLobby";

/* importaciones de img que necesitamos */
import logoItson from "@/assets/icons/LogoItson.png";
import ButtonsLobby from "@/components/lobbyComponents/ButtonsLobby";

const lobby = () => {
  return (
    <main className="w-full  h-screen container  flex  flex-col  items-center ">
      <div className="container   w-4/6 flex mt-20 md:mt-10  ">
        <Image
          src={logoItson}
          alt="logo"
        ></Image>
      </div>
      <ButtonsLobby></ButtonsLobby>
    </main>
  );
};

export default lobby;
