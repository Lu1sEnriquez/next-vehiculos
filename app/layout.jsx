import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Sistema Vehicular Itson",
  description: "Sistema para Gestionar Vehiculos en Itson",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      

      <body className=" lg:text-3xl md:text-2xl sm:text-xl sm:bg-white ">
        <Navbar></Navbar>
        <main
          className="   sm:w-full  md:mx-auto 
        mt-16 h-[calc(100vh-5rem)]  flex justify-center items-center flex-col"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
