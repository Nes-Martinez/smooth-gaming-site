import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getProducts as listProducts } from "../redux/products";

const Products = ({ isMain }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.getProducts);

  window.scrollTo(0, 0);

  useEffect(() => {
    let isMounted = false;

    if (!isMounted) {
      dispatch(listProducts());
    }

    return () => {
      isMounted = true;
    };
  }, [dispatch]);

  return (
    <ProductsContainer id="products">
      <ProductsHeading>Lista de Juegos</ProductsHeading>
      <ProductsWrapper>
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImg to={`/products/${product.id}`}>
                <img
                  className="mainGame"
                  alt={product.name}
                  src={product.imageUrl}
                />
              </ProductImg>
              <ProductInfo>
                <TextWrap to={`/products/${product.id}`}>
                  <ProductTitle>{product.name}</ProductTitle>
                </TextWrap>
              </ProductInfo>
            </ProductCard>
          ))}
      </ProductsWrapper>
    </ProductsContainer>
  );
};

export default Products;

const ProductsContainer = styled.div`
  padding: 15px 60px 60px 60px;
  color: #fff;
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    padding: 0.1rem calc((100vw - 1300px) / 2);
  }
`;

const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 45vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #0b2838;
`;

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  justify-items: center;
  padding: 0 1.5rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  line-height: 2;
  background: #f4f4f4;
  width: 100%;
  height: auto;
  position: relative;
  border-radius: 5px;
  transition: 0.2s escape;
  padding-bottom: 15px;

  &:hover {
    transform: scale(1.03);
  }

  @media screen and (max-width: 868px) {
    width: 85%;
  }
`;

const TextWrap = styled(Link)`
  text-decoration: none;
  background: #0b2838;
  display: flex;
  align-items: center;
  top: 226px;
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  filter: brightness(100%);

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #cd7f32;
  }

  @media screen and (max-width: 868px) {
    top: 40px;
  }
`;

const ProductImg = styled(Link)`
  text-decoration: none;
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 5px;
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`;

const ProductTitle = styled.div`
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  margin-left: 0.1rem;
  color: #fff;
`;
