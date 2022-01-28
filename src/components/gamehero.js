import React, { useState } from "react";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

const Gamehero = ({ image, name }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBG>
        <Img className="bannerGame" src={image} alt="Hollow Knight" />
      </HeroBG>
      <HeroContent>
        <HeroItems>
          <HeroH1>{name}</HeroH1>
          <SubButton
            to="images"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Leér Mas
          </SubButton>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Gamehero;

const HeroContainer = styled.div`
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: clamp(10rem, 95vw, 75rem);
  text-align: center;
  padding: 0 1rem;
  margin-top: -80px;
  position: relative;
  color: #fff;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`;

const HeroBG = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
`;

const HeroContent = styled.div`
  z-index: 3;
  max-height: 100%;
  padding: 0rem calc((100vw - 1300 px) / 2);
`;

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: clamp(2.5rem, 95vw, 75rem);
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1.%;
  font-weight: bold;
`;

const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 8vw, 4.7rem);
  margin-bottom: 0.3rem;
  letter-spacing: 10px;
  padding: 0 1rem;
  font-weight: 700;
  text-align: center;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  display: block;
  margin: auto;
  padding-right: 0;
`;

const SubButton = styled(LinkS)`
  border-radius: 30px;
  width: clamp(10rem, 10vw, 12rem);
  max-width: 250px;
  background: #ffffff;
  white-space: nowrap;
  text-decoration: none;
  padding: 15px 35px;
  color: #0b2838;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: yellow;
    color: #ffffff;
  }
`;
