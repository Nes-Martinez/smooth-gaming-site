import React, { useState } from "react";
import styled from "styled-components";
import Video from "../videos/videogame.mp4";
import { Link as LinkS } from "react-scroll";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBG>
        <VideoBG src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBG>
      <HeroContent>
        <HeroItems>
          <HeroH1>INDIE SWITCH</HeroH1>
          <HeroH2> Una carta de amor</HeroH2>
          <HeroText>Dedicado al sistema más inconvencional...</HeroText>
          <BtnWrapper>
            <MainButton
              to="products"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Ver Los Juegos
            </MainButton>
          </BtnWrapper>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110vh;
  text-align: right;
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
  height: 100%;
  overflow: hidden;
`;

const VideoBG = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300 px) / 2);
`;

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  text-align: right;
  height: 100vh;
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
  text-align: right;
`;

const HeroH2 = styled.h2`
  font-size: clamp(1.5rem, 8vw, 2.7rem);
  margin-bottom: 1rem;
  letter-spacing: 3px;
  padding: 0 1rem;
  font-weight: 400;
  text-align: right;
`;

const HeroText = styled.p`
  font-size: clamp(1rem, 3vw, 1.5rem);
  margin-bottom: 2rem;
  font-weight: 200;
  padding: 0 1rem;
  text-align: right;
`;

const BtnWrapper = styled.div`
  margin-top: 32px;
  align-items: right;
`;

const MainButton = styled(LinkS)`
  border-radius: 40px;
  background: #0b2838;
  white-space: nowrap;
  padding: 18px 40px;
  color: #fffff;
  font-size: 20px;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: right;
  align-items: right;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ffffff;
    color: #0b2838;
  }
`;
