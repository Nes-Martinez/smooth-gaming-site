import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getProducts as listProducts } from "../redux/products";

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.getProducts);
  //   const { products } = productDetails;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <ProductsContainer id="products">
      <ProductsHeading>All Games</ProductsHeading>
      <ProductsWrapper>
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImg>
                <img className="main" src={product.imageUrl} />
                <ProductInfo>
                  <TextWrap>
                    <ProductTitle>{product.name}</ProductTitle>
                  </TextWrap>
                </ProductInfo>
              </ProductImg>
            </ProductCard>
          ))}
      </ProductsWrapper>
    </ProductsContainer>
  );
};

export default Products;

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  /* background: blue; */
  color: #fff;
`;
const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: auto;
  position: relative;
  border-radius: 10px;
  transition: 0.2s escape;
`;
const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 45vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`;
const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 226px;

  @media screen and (max-width: 868px) {
    top: 400px;
  }
`;
const ProductImg = styled.div`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`;

const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 4 rem;
  margin-left: 0.5rem;
  color: red;
`;
