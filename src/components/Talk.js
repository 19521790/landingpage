import React from "react";

export default function Talk({ content, name }) {
  return (
    <div
      className="talk_card col-3"
      data-aos="flip-right"
      data-aos-duration="1000"
    >
      <div className="talk_img_container">
        <img src={require("../img/profile.png")} alt="" />
      </div>
      <div className="talk_content">
        <p className="first_p">Nhà đầu tư {name}</p>
        <p className="second_p">{content}</p>
      </div>
    </div>
  );
}
