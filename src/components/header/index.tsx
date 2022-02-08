import React from "react";

import { HeaderTypes } from "./types";
import * as styled from "./style";

const Navbar: React.FC<HeaderTypes> = ({ children }) => {
  return (
    <>
      <styled.Header>
        {children}
      </styled.Header>
    </>
  );
};

export default Navbar;
