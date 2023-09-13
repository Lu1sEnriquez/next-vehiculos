import Navbar from "@/components/nav/NavbarMovil";
import "./globals.css";

import NavbarDesktop from "@/components/nav/navbarDesktop";
import NavbarPrincipal from "@/components/nav/NavbarPrincipal";

export const metadata = {
  title: "Sistema Vehicular Itson",
  description: "Sistema para Gestionar Vehiculos en Itson",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="relative">
      

      <body className="absolute lg:text-3xl md:text-2xl sm:text-xl sm:bg-white h-screen ">
      <NavbarPrincipal></NavbarPrincipal>
        <main
          className="  sm:w-full  md:mx-auto 
        mt-16 md:mt-0  h-full  flex justify-center items-center flex-col"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
