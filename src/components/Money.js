import React from "react";

export default function Money() {
  return (
    <div className="money row">
      <div className="col-2">
        <h3 data-aos="zoom-in">
          Nhà đầu tư phải chịu những loại phí nào khi giao dịch hàng hóa?
        </h3>
        <h4 data-aos="fade-right">
          <span>1. </span> Phí giao dịch
        </h4>
        <p>
          Nhà đầu tư cần phải trả những loại phí nào khi giao dịch hàng hóa? Nhà
          đầu tư phải trả cho 1 lần thực hiện lệnh trên 1 LOT giao dịch. Mức phí
          chung là 350.000 VNĐ/LOT thường và 300.000 VNĐ/LOT đối với mặt hàng
          mini (ngô mini, đậu tương mini, dầu WTI mini,…). Khoản phí giao dịch
          này bao gồm một phần phí thu hộ mà Thành viên phải nộp lại cho MXV và
          duy trì dịch vụ mà các công ty cung cấp cho khách hàng: hỗ trợ, tư vấn
          trong mọi giao dịch…. Đối với những trường hợp khách hàng tiềm năng,
          có khối lượng giao dịch cực kỳ lớn, các công ty như FINVEST thường có
          những ưu đãi riêng biệt về phí dành cho các nhà đầu tư.
        </p>
        <h4 data-aos="fade-right">
          <span>2. </span> Phí sử dụng phần mềm CQG
        </h4>
        <p>
          Phí duy trì tài khoản CQG hàng tháng là 720.000đ. Hiện Gia Cát Lợi
          đang có ưu đãi giảm 50% cho các nhà đầu tư đăng ký mở tài khoản mới.
          Ngoài phí duy trì tài khoản CQG, nhà đầu tư có thể mua thêm có gói xem
          dữ liệu trên các Sở giao dịch liên thông nước ngoài nếu thấy cần
          thiết.
        </p>
      </div>
      <div className="col-2 img_container">
        <img data-aos="zoom-in" src={require("../img/cqg.png")} alt="" />
      </div>
    </div>
  );
}
