import React, { useEffect } from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggle, isMain }) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <NavLinks isOpen={isOpen} onClick={toggle}>
      <TopIcon onClick={toggle}>
        <XIcon />
      </TopIcon>
      <SidebarWrapper>
        <li>
          <MenuLink to="/" onClick={toggle}>
            Atrás
          </MenuLink>
        </li>
        {isMain ? (
          <li>
            <MenuLink to="/about" onClick={toggle}>
              ¿Por qué indie?
            </MenuLink>
          </li>
        ) : (
          <li>
            <ScrollLink
              to="info"
              onClick={toggle}
              smooth="true"
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              ¿Por qué indie?
            </ScrollLink>
          </li>
        )}
        {isMain ? (
          <li>
            <MenuLink to="/products/4" onClick={toggle}>
              Destacado
            </MenuLink>
          </li>
        ) : (
          <li>
            <ScrollLink
              to="featured"
              onClick={toggle}
              smooth="true"
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Destacado
            </ScrollLink>
          </li>
        )}
        {isMain ? (
          <li>
            <MenuLink to="/about" onClick={toggle}>
              Acerca de
            </MenuLink>
          </li>
        ) : (
          <li>
            <ScrollLink
              to="about"
              onClick={toggle}
              smooth="true"
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Acerca de
            </ScrollLink>
          </li>
        )}
        {isMain ? (
          <li>
            <MenuLink to="/products" onClick={toggle}>
              Videojuegos
            </MenuLink>
          </li>
        ) : (
          <li>
            <ScrollLink
              to="products"
              onClick={toggle}
              smooth="true"
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Videojuegos
            </ScrollLink>
          </li>
        )}
      </SidebarWrapper>
    </NavLinks>
  );
};

export default Sidebar;

const NavLinks = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0b2838;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const TopIcon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const XIcon = styled(FaTimes)`
  color: #cd7f32;
`;

const SidebarWrapper = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const MenuLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: color 300ms;

  &:hover {
    color: #cd7f32;
    transition: 0.3s ease-out;
  }
`;

const ScrollLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: color 300ms;

  &:hover {
    color: #cd7f32;
    transition: 0.3s ease-out;
  }
`;
