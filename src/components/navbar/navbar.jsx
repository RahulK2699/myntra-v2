import React from "react";
import NavbarComponentProps from "./navBarComponent";
function NavbarComponent() {
  return (
    <div>
      <NavbarComponentProps
        data={["MEN", "WOMEN", "KIDS", "HOME&LIVING", "STUDIO"]}
      />
    </div>
  );
}

export default NavbarComponent;
