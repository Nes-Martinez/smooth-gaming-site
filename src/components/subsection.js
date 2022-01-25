import React from "react";
import styled from "styled-components";
import Image from "../images/hollowknight.jpg";

const Subsection = () => {
  return (
    <>
      <SectionContainer>
        <SectionWrapper>
          <SectionRow>
            <LeftCol>
              <ImgWrap>
                <Img className="bannerGame" src={Image} alt="Hollow Knight" />
              </ImgWrap>
            </LeftCol>
            <RightCol>
              <TextWrap>
                <Header>Hello</Header>
                <SubHeading>Video Games</SubHeading>
                <SubTitle>Of All Types</SubTitle>
              </TextWrap>
            </RightCol>
          </SectionRow>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
};

export default Subsection;

const SectionContainer = styled.div`
  color: #fff;

  @media screen and (max-width: 768px) {
    padding: 100px 30px 30px 30px;
  }
`;

const SectionWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 600px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 500px;
  }
`;

const SectionRow = styled.div`
  display: grid;
  grid-auto-columns: minmax() (auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

const LeftCol = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

const RightCol = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

const TextWrap = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

const Header = styled.p`
  color: #000080;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const SubHeading = styled.h1`
  color: #000080;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const SubTitle = styled.p`
  color: #000080;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`;

const ImgWrap = styled.div`
  max-width: 680px;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
