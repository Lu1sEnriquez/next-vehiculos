import ButtonAzul from "@/components/Formularios/ButtonAzul";
import Link from "next/link";
import React from "react";

function PagePrincipal() {
  return (
    <div>
      PagePrincipal
      <Link href={"/lobby"}>
        <ButtonAzul text={"lobby"}></ButtonAzul>
      </Link>
    </div>
  );
}

export default PagePrincipal;
