import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getSingleProducts as listProduct } from "../redux/products";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = useSelector((state) => state.getSingleProduct);

  useEffect(() => {
    dispatch(listProduct(id));
  }, [dispatch, id]);

  return (
    <>
      <div>Name: {product.name}</div>
      <img src={product.imageUrl} />
    </>
  );
};

export default SingleProduct;
