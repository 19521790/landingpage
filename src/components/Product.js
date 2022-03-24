import React from "react";

export default function Product({ text, img }) {
  return (
    <div className="product_card col-4" data-aos="flip-left">
      <img src={img} alt="" />
      <div className="product_description">{text}</div>
    </div>
  );
}
