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
      <div id="images">Name: {product.name}</div>
      {product.genre && <div>Genres: {product.genre.join(", ")}</div>}
      <SRLWrapper>
        <a href={product.galleryOne}>
          <img src={product.galleryOne} alt="HK1" />
        </a>
        <a href={product.galleryTwo}>
          <img src={product.galleryTwo} alt="HK2" />
        </a>
        <a href={product.galleryThree}>
          <img src={product.galleryThree} alt="HK3" />
        </a>
      </SRLWrapper>
      <VidWrap>
        <Vid>
          <YoutubeVid vidId="gicpB7w6SXo" />
        </Vid>
      </VidWrap>
    </ProductContainer>
  );
};

export default SingleProduct;

const ProductContainer = styled.div`
  background: #fff;
  margin-top: 80px;
  position: relative;
`;

const HeroWrapper = styled.div`
  background: red;
  display: flex;
`;

const HeroContent = styled.div`
  z-index: 3;
`;

const VidWrap = styled.div`
  max-width: 800px;
  height: auto;

  @media screen and (max-width: 768px) {
    max-width: 600px;
  }

  @media screen and (max-width: 480px) {
    font-size: 300px;
  }
`;

const Vid = styled.div`
  margin: 0 0 10px 0;
  padding-right: 0;
  position: relative;
`;
