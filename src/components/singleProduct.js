import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

import { getSingleProducts as listProduct } from "../redux/products";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = useSelector((state) => state.getSingleProduct);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(listProduct(id));
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch, id]);

  return (
    <>
      <div>Name: {product.name}</div>
      <img src={product.imageUrl} />
      {product.genre && <div>Genres: {product.genre.join(", ")}</div>}
      <SRLWrapper>
        <a href="https://img-eshop.cdn.nintendo.net/i/208c3efdf8bf7cb5ba1f2154f5508d97af71b7853dc8e7eff302d3b1804bb178.jpg">
          <img
            src="https://img-eshop.cdn.nintendo.net/i/208c3efdf8bf7cb5ba1f2154f5508d97af71b7853dc8e7eff302d3b1804bb178.jpg"
            alt="HK1"
          />
        </a>
        <a href="https://img-eshop.cdn.nintendo.net/i/ddcf359a6e8a2bb8b2eabf9fc26b9511b047745320c2d56aeabf24222f0967fc.jpg">
          <img
            src="https://img-eshop.cdn.nintendo.net/i/ddcf359a6e8a2bb8b2eabf9fc26b9511b047745320c2d56aeabf24222f0967fc.jpg"
            alt="HK2"
          />
        </a>
        <a href="https://img-eshop.cdn.nintendo.net/i/93309648ca2cf8d7a269da8f3deb386833497d857e8344d339caf3f81fc8a2f1.jpg">
          <img
            src="https://img-eshop.cdn.nintendo.net/i/93309648ca2cf8d7a269da8f3deb386833497d857e8344d339caf3f81fc8a2f1.jpg"
            alt="HK3"
          />
        </a>
      </SRLWrapper>
    </>
  );
};

export default SingleProduct;
