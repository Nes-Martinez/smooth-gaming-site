import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { BsController } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle, isMain }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [textnav, settextnav] = useState(false);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    let isMounted = false;
    if (!isMounted) {
      const changeNav = () => {
        if (window.scrollY >= 80) {
          setScrollNav(true);
        } else {
          setScrollNav(false);
        }
      };

      const changeText = () => {
        if (window.scrollY >= 80) {
          settextnav(true);
        } else {
          settextnav(false);
        }
      };

      window.addEventListener("scroll", changeNav);
      window.addEventListener("scroll", changeText);

      return () => {
        isMounted = true;
        window.removeEventListener("scroll", changeNav);
        window.removeEventListener("scroll", changeText);
      };
    }
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavBarContainer>
        <MainLink onClick={toggleHome} textnav={+textnav} to="/">
          <ControllerIcon /> INDIE SWITCH
        </MainLink>
        <MobileMenu onClick={toggle}>
          <FaBars />
        </MobileMenu>
        <NavMenu>
          {isMain ? (
            <NavLink textnav={+textnav} to="/about">
              ¿POR QUÉ INDIE?
            </NavLink>
          ) : (
            <ScrollLink
              textnav={+textnav}
              to="info"
              smooth="true"
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              ¿POR QUÉ INDIE?
            </ScrollLink>
          )}
          {isMain ? (
            <NavLink textnav={+textnav} to="/products/4">
              DESTACADO
            </NavLink>
          ) : (
            <ScrollLink
              textnav={+textnav}
              to="featured"
              smooth="true"
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              DESTACADO
            </ScrollLink>
          )}
          {isMain ? (
            <NavLink textnav={+textnav} to="/about">
              ACERCA DE
            </NavLink>
          ) : (
            <ScrollLink
              textnav={+textnav}
              to="about"
              smooth="true"
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              ACERCA DE
            </ScrollLink>
          )}
          {isMain ? (
            <NavLink textnav={+textnav} to="/products">
              VIDEOJUEGOS
            </NavLink>
          ) : (
            <ScrollLink
              textnav={+textnav}
              to="products"
              smooth="true"
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              VIDEOJUEGOS
            </ScrollLink>
          )}
        </NavMenu>
      </NavBarContainer>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#ffffff" : "#0b2838")};
  opacity: ${({ scrollNav }) => (scrollNav ? "80%" : "100%")};
  transition: all 0.4s ease-in-out;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: space-between;
  padding: 3rem calc((100vw - 1300px) / 2);
  top: 0;
  z-index: 200;
  position: sticky;
  border-bottom: ${({ scrollNav }) =>
    scrollNav ? "4px solid #cd7f32" : "3px solid #ffffff"};
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  padding: 0 20px 0 100px;
  max-width: 1100px;

  @media screen and (max-width: 768px) {
    padding: 0 20px 0 50px;
  }
`;

const MainLink = styled(LinkR)`
  color: ${({ textnav }) => (textnav ? "#0b2838" : "#ffffff")};
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.7rem;
  padding: 0 0.5rem;
  height: 100&;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #cd7f32;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MobileMenu = styled.div`
  display: none;
  color: #fff;
  z-index: 5;

  @media screen and (max-width: 786px) {
    color: #cd7f32;
    display: block;
    position: absolute;
    height: 40%;
    align-items: center;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.7rem;
    cursor: pointer;
    z-index: 10;
  }
`;

const ScrollLink = styled(LinkS)`
  color: ${({ textnav }) => (textnav ? "#0b2838" : "#ffffff")};
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  padding: 0 1rem;
  height: 100&;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #cd7f32;
  }
`;

const NavLink = styled(LinkR)`
  color: ${({ textnav }) => (textnav ? "#0b2838" : "#ffffff")};
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  padding: 0 1rem;
  height: 100&;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #cd7f32;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ControllerIcon = styled(BsController)`
  margin-right: 10px;
  font-size: 30px;

  &:hover {
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
