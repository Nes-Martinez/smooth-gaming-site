import React, { useState } from "react";
import styled from "styled-components";
import Image from "../images/greak.jpg";
import { Link } from "react-router-dom";

const Indiegames = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <SectionContainer id="info">
      <SectionWrapper>
        <SectionHeading>Videojuegos Indie</SectionHeading>
        <SectionRow>
          <LeftCol>
            <TextWrap>
              <Header>OPINIÓN</Header>
              <SubHeading>Metroidvania, Plataformas, y mas</SubHeading>
              <SubTitle>
                Los videojuegos indie a veces suelen transmitar más cosas que un
                juego AAA. Son desarollado con amor, con una magia única.
              </SubTitle>
              <SubButton
                to="/about"
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
            </TextWrap>
          </LeftCol>
          <RightCol>
            <ImgWrap>
              <Img
                className="bannerGame"
                src={Image}
                alt="Greak Memories of Azur"
              />
            </ImgWrap>
          </RightCol>
        </SectionRow>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Indiegames;

const SectionContainer = styled.div`
  background-color: #0b2838;
  padding-top: 60px;
  padding-bottom: 60px;
  height: auto;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 100px 30px 100px 30px;
    height: auto;
  }

  @media screen and (max-width: 468px) {
    padding-bottom: 30px;
    height: auto;
  }
`;

const SectionHeading = styled.div`
  font-size: clamp(1.2rem, 45vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #fff;
`;

const SectionWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

const SectionRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col2 col1";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col2 col2" "col1 col1";
  }
`;

const LeftCol = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

const RightCol = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

const TextWrap = styled.div`
  max-width: 640px;
  padding-top: 0;
  padding-bottom: 60px;
`;

const Header = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const SubHeading = styled.h1`
  color: #fff;
  margin-bottom: 24px;
  font-size: 42px;
  line-height: 1.1;
  font-weight: 400;

  @media screen and (max-width: 480px) {
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

const SubTitle = styled.p`
  color: #fff;
  max-width: 440px;
  margin-bottom: 50px;
  font-size: 18px;
  line-height: 24px;
`;

const ImgWrap = styled.div`
  max-width: 680px;
  height: 100%;
`;

const Img = styled.img`
  align: top;
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

const SubButton = styled(Link)`
  border-radius: 30px;
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
  justify-content: right;
  align-items: right;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #cd7f32;
    color: #ffffff;
  }
`;
