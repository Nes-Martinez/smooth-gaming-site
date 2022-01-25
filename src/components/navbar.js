import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      window.addEventListener("scroll", changeNav);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // };

  return (
    <Nav scrollNav={scrollNav}>
      <NavBarContainer>
        <MainLink to="/">Indie Sweep</MainLink>
        <NavMenu>
          <NavLink
            to="products"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            ALL GAMES
          </NavLink>
          <NavLink
            to="products"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            ALL GAMES
          </NavLink>
        </NavMenu>
      </NavBarContainer>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000080" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: space-between;
  padding: 3rem calc((100vw - 1300px) / 2);
  top: 0;
  z-index: 10;
  position: sticky;
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
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0 1rem;
  height: 100&;
  cursor: pointer;
`;

const NavLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 20;
  padding: 0 1rem;
  height: 100&;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
