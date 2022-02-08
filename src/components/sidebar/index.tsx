import React from "react";

import { AsideTypes } from "./types";
import * as styled from "./style";

const Navbar: React.FC<AsideTypes> = ({ children }) => {
  return (
    <>
      <styled.Aside>
        {children}
      </styled.Aside>
    </>
  );
};

export default Navbar;
