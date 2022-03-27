import React from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
export default function Slide() {
  function go_next() {
    document.getElementById("first_img").classList.add("move_left");
  }
  function go_previous() {
    document.getElementById("first_img").classList.remove("move_left");
  }
  return (
    <div className="slide_container">
      <p>
        <b>Địa chỉ:</b> Công ty cổ phẩn giao dịch hàng hóa Gia Cát Lợi, 11GS18
        Đông Hòa, Dĩ An, Bình Dương
      </p>
      <div className="slide_container_slider">
        <img
          src={require("../img/slide1.png")}
          id="first_img"
          className="first_img"
        />
        <img src={require("../img/slide2.png")} alt="" />
        <button className="icon_next" onClick={go_next}>
          <FcNext className="icon" />
        </button>
        <button className="icon_previous" onClick={go_previous}>
          <FcPrevious className="icon" />
        </button>
      </div>
      <h4></h4>
    </div>
  );
}
