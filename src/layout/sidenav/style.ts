import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  position: relative;
  width: 15rem;
  justify-content: center;
  height: 7.5rem;
  transition: all 0.2s ease;
  background-color: #f6f6f6;
  transition: all 0.2s ease;
  box-shadow: 18px 0px 35px 0px rgb(0 0 0 / 2%);

  @media (max-width: 1200px) {
    width: 5rem;
    height: 5rem;
  }

  @media (max-width: 767px) {
    justify-content: start;
    align-items: center;
    width: fit-content;
  }
`;

export const LogoLink = styled.a`
  display: block;
  cursor: pointer;

  @media (max-width: 767px) {
  }
`;

export const Logo = styled.h1`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const LogoIcon = styled.img`
  @media (max-width: 767px) {
    margin: 0 22px;
  }
`;

export const LogoText = styled.img`
  margin-left: 10px;
  max-width: 120px;
  margin-top: 5px;

  @media (max-width: 1200px) {
    display: none;
    margin-top: 0;
    max-width: 52px;
  }
`;

export const NavBurgerButton = styled.a`
  display: none;

  @media (max-width: 1200px) {
    text-align: left;
  }

  @media (max-width: 767px) {
    display: block;
    margin-right: 22px;
    text-align: center;
    font-size: 1.4rem;
    padding: 5px;
    color: #3b4cb8;
  }
`;

export const Aside = styled.aside`
  position: fixed;
  width: 15rem;
  height: 100%;
  transition: all 0.2s ease;
  background-color: #f6f6f6;
  transition: all 0.2s ease;
  box-shadow: 18px 0px 35px 0px rgb(0 0 0 / 2%);

  @media (max-width: 1200px) {
    width: 5rem;
  }

  @media (max-width: 767px) {
    width: 15rem;
  }
`;

export const NavList = styled.ul`
  display: block;
  height: 100%;
  position: relative;
  padding-top: 15px;
`;

export const NavItem = styled.li`
  position: relative;

  @media (max-width: 1200px) {
    padding: 2px 15px;
  }

  @media (max-width: 767px) {
    padding: 0;
  }
`;

export const NavLink = styled.a`
  display: block;
  position: relative;
  padding: 1.5rem 1.625rem 1.5rem 1.5rem;
  color: #7e7e7e;
  cursor: pointer;

  @media (max-width: 1200px) {
    padding: 0.813rem 0.875rem;
    border-radius: 12px;
    background-color: #3b4cb8;
  }

  @media (max-width: 767px) {
    display: flex;
    border-radius: none;
    background-color: transparent;
    padding: 0.625rem 1.25rem;
  }
`;

export const NavIcon = styled.p`
  display: block;
  font-size: 2.2rem;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 1.25rem;
  }

  @media (max-width: 767px) {
  }
`;

export const NavText = styled.p`
  display: block;
  text-align: center;
  margin-top: 0.7125rem;

  @media (max-width: 1200px) {
    display: none;
  }

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    margin-top: 0;
  }
`;

export const NavSubList = styled.ul`
  display: block;
  padding: 1rem 0;
  background-color: #fff;

  @media (max-width: 1200px) {
    position: absolute;
    width: 13rem;
    height: auto;
    top: 0;
    left: 5rem;
    box-shadow: 0px 0px 40px 0px rgb(82 63 105 / 10%);
    border-radius: 12px;
  }
`;

export const NavSubItem = styled.li`
  display: block;
  width: 100%;
`;

export const NavSubItemLink = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  text-align: center;
  color: #7e7e7e;
  cursor: pointer;

  @media (max-width: 1200px) {
    text-align: left;
  }
`;
