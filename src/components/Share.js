import React from "react";

export default function Share({ image, delay }) {
  return (
    <div
      className="share_card col-4"
      data-aos="flip-left"
      data-aos-delay={delay}
    >
      <div className="share_card_content">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
