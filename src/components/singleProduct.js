import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import Gamehero from "./gamehero";
import YoutubeVid from "./YouTubeEmbed";

import { getSingleProducts as listProduct } from "../redux/products";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = useSelector((state) => state.getSingleProduct);

  useEffect(() => {
    window.scrollTo(0, 0);

    let isMounted = true;
    if (isMounted) {
      dispatch(listProduct(id));
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch, id]);

  return (
    <ProductContainer>
      <Gamehero image={product.bannerImage} name={product.name} />
      <GameWrapper id="main">
        <MainBox>
          <SubHeading>Título: {product.name}</SubHeading>
          <SubTitle>Desrollado por: {product.developer}</SubTitle>
        </MainBox>
        <SubBox>
          <Header>Categorías:</Header>
          {product.genre && <AboutText>{product.genre.join(", ")}</AboutText>}

          <Header>Acerca De:</Header>
          <AboutText>{product.description}</AboutText>

          <Header>Precio:</Header>
          <AboutText>${product.price}</AboutText>

          <Header>Lanzamiento:</Header>
          <AboutText>{product.launchDate}</AboutText>
        </SubBox>
        <SubHeading>Capturas</SubHeading>
        <ScreensContainer>
          <ScreensWrapper>
            <SRLWrapper>
              <a href={product.galleryOne}>
                <img src={product.galleryOne} alt={product.galleryOneText} />
              </a>
              <a href={product.galleryTwo}>
                <img src={product.galleryTwo} alt={product.galleryTwoText} />
              </a>
              <a href={product.galleryThree}>
                <img
                  src={product.galleryThree}
                  alt={product.galleryThreeText}
                />
              </a>
            </SRLWrapper>
          </ScreensWrapper>
        </ScreensContainer>
        <SubHeading>Video</SubHeading>
        <VideoWrapper>
          <Vid>
            <YoutubeVid vidId={product.youTubeID} />
          </Vid>
        </VideoWrapper>
      </GameWrapper>
    </ProductContainer>
  );
};

export default SingleProduct;

const ProductContainer = styled.div`
  background: #fff;
  margin-top: 80px;
  position: relative;
`;

const GameWrapper = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 36px 24px;
  justify-content: left;
`;

const MainBox = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: left;
`;

const SubBox = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;s
  justify-content: left;
`;

const Header = styled.p`
  color: #0b2838;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

const SubHeading = styled.h1`
  color: #0b2838;
  font-size: clamp(2rem, 3vw, 4rem);
  line-height: 1.1;
  font-weight: 400;
`;

const SubTitle = styled.p`
  color: #0b2838;
  font-size: clamp(1.2rem, 2vw, 3rem);
  line-height: 1;
  font-weight: 400;
  margin-bottom: 40px;
`;

const AboutText = styled.p`
  font-size: 20px;
  padding-bottom: 20px;
`;

const VideoWrapper = styled.div`
  padding-bottom: 56.25%;
  height: 0;

  @media screen and (max-width: 768px) {
    max-width: 700px;
  }

  @media screen and (max-width: 480px) {
    font-size: 300px;
  }
`;

const Vid = styled.div`
  background: #f4f4f4;
  padding: 25px;
  border-radius: 5px;
`;

const ScreensContainer = styled.div`
  background: #f4f4f4;
  padding: 25px;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
`;

const ScreensWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
`;
