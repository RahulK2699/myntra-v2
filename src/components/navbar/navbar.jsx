import React from "react";
import NavbarComponentProps from "./navBarComponent";
function NavbarComponent() {
  return (
    <div>
      <NavbarComponentProps  data = {{head1 : "MEN" ,head2 : "WOMEN",
    head3 : "KIDS",head4 :"HOME&LIVING", head5 : "STUDIO" ,
    head6 : ""}} />
    </div>
  );
}

export default NavbarComponent;
