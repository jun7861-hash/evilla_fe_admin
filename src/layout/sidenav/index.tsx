import React, { useState } from "react";

import logo from "../../assets/images/logo.png";
import logoText from "../../assets/images/logo-text.png";
import * as styled from "./style";

const SideNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<Boolean>(false);
  return (
    <>
      <styled.LogoContainer
        className={isBurgerMenuOpen ? "sm-w-15rem" : "w-inherit"}
      >
        <styled.LogoLink>
          <styled.Logo>
            <styled.LogoIcon src={logo} alt="logo" />
            <styled.LogoText src={logoText} alt="logo-text" />
          </styled.Logo>
        </styled.LogoLink>
        <styled.NavBurgerButton
          onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </styled.NavBurgerButton>
      </styled.LogoContainer>

      <styled.Aside className={isBurgerMenuOpen ? "sm-w-auto" : "sm-w-0"}>
        <styled.NavList
          className={isBurgerMenuOpen ? "sm-d-block" : "sm-d-none"}
        >
          <styled.NavItem>
            <styled.NavLink
              className="activeSideNavItem"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <styled.NavIcon>
                <i className="far fa-chart-bar"></i>
              </styled.NavIcon>
              <styled.NavText>Dashboard</styled.NavText>
            </styled.NavLink>

            {isMenuOpen && (
              <styled.NavSubList>
                <styled.NavSubItem>
                  <styled.NavSubItemLink className="activeSideSubItem">
                    Dashboard
                  </styled.NavSubItemLink>
                </styled.NavSubItem>
                <styled.NavSubItem>
                  <styled.NavSubItemLink>Dashboard</styled.NavSubItemLink>
                </styled.NavSubItem>
              </styled.NavSubList>
            )}
          </styled.NavItem>
          {/* <styled.NavItem>
            <styled.NavLink>
              <styled.NavIcon>
                <i className="far fa-chart-bar"></i>
              </styled.NavIcon>
              <styled.NavText>Dashboard</styled.NavText>
            </styled.NavLink>
          </styled.NavItem> */}
        </styled.NavList>
      </styled.Aside>
    </>
  );
};

export default SideNav;
