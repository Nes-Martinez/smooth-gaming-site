import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { BsController } from "react-icons/bs";

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [textNav, settextNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const changeText = () => {
    if (window.scrollY >= 80) {
      settextNav(true);
    } else {
      settextNav(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      window.addEventListener("scroll", changeNav);
      window.addEventListener("scroll", changeText);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavBarContainer>
        <MainLink onClick={toggleHome} textNav={textNav} to="/">
          <ControllerIcon /> INDIE SWITCH
        </MainLink>
        <NavMenu>
          <NavLink
            textNav={textNav}
            to="info"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            PORQUE INDIE
          </NavLink>
          <NavLink
            textNav={textNav}
            to="featured"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            DESTACADO
          </NavLink>
          <NavLink
            textNav={textNav}
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            ACERCA DE
          </NavLink>
          <NavLink
            textNav={textNav}
            to="products"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            JUEGOS
          </NavLink>
        </NavMenu>
      </NavBarContainer>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#ffffff" : "#0b2838")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: space-between;
  padding: 3rem calc((100vw - 1300px) / 2);
  top: 0;
  z-index: 10;
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
`;

const MainLink = styled(Link)`
  color: ${({ textNav }) => (textNav ? "#0b2838" : "#ffffff")};
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
`;

const NavLink = styled(LinkS)`
  color: ${({ textNav }) => (textNav ? "#0b2838" : "#ffffff")};
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
`;
