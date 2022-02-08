import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 7.5rem;
  padding-left: 15rem;

  @media (max-width: 1200px) {
    height: 5rem;
    padding-left: 5rem;
  }

  @media (max-width: 767px) {
    padding-left: 8rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  padding 0 2.5rem;
  justify-content: end;
  height: 100%;
  align-items: center;
  background-color: #F6F6F6;

  @media (max-width: 1400px) {
    padding-left: 1.875rem;
  }

  @media (max-width: 767px) {
    padding-right: 0.938rem;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding-left: 4rem;
  cursor: pointer;

  @media (max-width: 1400px) {
    padding-left: 30px;
  }

  @media (max-width: 576px) {
    padding-left: 0;
  }
`;

export const ProfileInfo = styled.div`
  display: block;
  padding-right: 30px;

  @media (max-width: 1400px) {
    padding-right: 10px;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
  text-align: right;
`;

export const Role = styled.small`
  display: block;
  color: #464a53;
  line-height: 2;
  font-size: 12px;
  text-align: right;

  @media (max-width: 1400px) {
    line-height: 1.4;
  }
`;

export const ProfileImage = styled.div`
  display: block;

  @media (max-width: 1400px) {
    padding: 0 0 0 10px;
  }

  @media (max-width: 576px) {
    padding-left: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 0.75rem;

  @media (max-width: 1400px) {
    width: 39px;
  }
`;

export const ProfileDropdown = styled.div`
  position: absolute;
  right: 0;
  bottom: -123px;
  background-color: #fff;
  padding: 15px 0;
  min-width: 12.5rem;
  box-shadow: 0 0 37px rgb(8 21 66 / 5%); ;

  @media (max-width: 1400px) {
    bottom: -113px;
  }
`;

export const ProfileList = styled.ul`
  list-style-type: none;
`;

export const ProfileItem = styled.li`
  display: block;
`;

export const ProfileLink = styled.a`
  display: block;
  width: 100%;
  padding: 10px 24px;
  cursor: pointer;
  i {
    padding-right: 10px;
    color: #3b4cb8;
  }
  &:hover {
    color: #3b4cb8;
    background: #f4f5f9;
  }

  @media (max-width: 1400px) {
    font-size: 14px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 100%;

  &:not(first-child) {
    padding-left: 1.25rem;
  }

  @media (max-width: 576px) {
    &:not(first-child) {
      padding-left: 0.5rem;
    }
  }
`;

export const NavLink = styled.a`
  padding: 15px;
  font-size: 28px;
  color: #3b4cb8;
  background-color: #eeeeee;
  border-radius: 0.75rem;
  cursor: pointer;

  @media (max-width: 1400px) {
    padding: 10px;
    font-size: 18px;
  }
`;
