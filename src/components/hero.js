import React from "react";
import styled from "styled-components";
import Video from "../videos/videogame.mp4";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBG>
        <VideoBG src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBG>
      <HeroContent>
        <HeroItems>
          <HeroH1>Indie Sweep: Nintendo Switch's Best Indie Games</HeroH1>
          <HeroP>For the latest in platformers, sidescrollers, and more.</HeroP>
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
  height: 100vh;
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
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1.%;
  font-weight: bold;
`;

const HeroH1 = styled.h1`
  font-size: clamp(1.5 rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
  font-weight: bold;
`;

const HeroP = styled.p`
  font-size: clamp(1 rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
`;
