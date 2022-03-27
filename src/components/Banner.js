import React from "react";
import Contact from "./Contact";

export default function Banner({ showPopup }) {
  return (
    <div className="banner_container row">
      <div className="col-2">
        <img src={require("../img/re_banner.png")} alt="" />
        <div className="banner_introduce">
          <h3>CÔNG TY CỔ PHẦN GIAO DỊCH HÀNG HÓA GIA CÁT LỢI</h3>
          <h4>
            Dịch vụ đầu tư hàng hóa uy tín - minh bạch- chuyên nghiệp hàng đầu
            Việt Nam
          </h4>
        </div>
      </div>
      <div className="col-2">
        <Contact showPopup={showPopup} />
      </div>
    </div>
  );
}
