import React from "react";

import fantasy from "../bookJson/fantasy.json";

import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const book = fantasy.find((card) => card.asin === id);
  const { title, img, price } = book;
  return (
    <>
      <img style={{ width: "300px" }} src={img} alt="" />
      <h2>{title}</h2>
      <h3>{price}</h3>
    </>
  );
};

export default Details;
