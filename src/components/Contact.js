import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export default function Contact({ showPopup }) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
  });
  function submitEvent(event) {
    event.preventDefault();

    if (value.phone != "") {
      setShow(false);
      showPopup();
      setValue({ name: "", email: "", phone: "", text: "" });
    } else {
      setShow(true);
    }
    // emailjs
    //   .sendForm(
    //     "service_ijhs398",
    //     "template_ms80ck7",
    //     event.target,
    //     "ckCE_JNlthhsIe7Rl"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  }
  function changeValue(event) {
    setValue({ ...value, [event.target.name]: event.target.value });
  }

  return (
    <div className="contact" data-aos="zoom-in" id="contact">
      <div className="contact_content">
        <h4>Đăng kí ngay để nhận miễn phí 50% phí CQG</h4>
        <form onSubmit={submitEvent}>
          <div className="contact_content_input">
            <input
              type="text"
              name="name"
              placeholder="Họ và tên"
              value={value.name}
              onChange={changeValue}
            />{" "}
            {show && (
              <div className="is_forced">*Vui lòng nhập số điện thoại</div>
            )}
            <input
              type="number"
              name="phone"
              placeholder="Số điện thoại"
              value={value.phone}
              onChange={changeValue}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={value.email}
              onChange={changeValue}
            />
            <textarea
              value={value.text}
              name="text"
              placeholder="Thông tin khác"
              onChange={changeValue}
            />
          </div>

          <div className="contact_content_submit">
            <input type="submit" value="Mở tài khoản" />
            <input type="submit" value="Mở Demo" />
          </div>
        </form>
      </div>
    </div>
  );
}
