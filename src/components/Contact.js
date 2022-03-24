import React, { useEffect, useState } from "react";

export default function Contact() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
  });
  function submitEvent(event) {
    console.log(value);
    event.preventDefault();
  }
  function changeValue(event) {
    setValue({ ...value, [event.target.name]: event.target.value });
  }
  useEffect(() => {
    console.log(value);

    return () => {};
  }, [value]);

  return (
    <div className="contact">
      <div className="contact_content">
        <h4>Đăng kí ngay để nhận tư vấn hôm nay</h4>
        <form onSubmit={submitEvent}>
          <div className="contact_content_input">
            <input
              type="text"
              name="name"
              placeholder="Họ và tên"
              value={value.name}
              onChange={changeValue}
            />
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
            <input type="submit" value="Gửi thông tin" />
            <input type="submit" value="Mở Demo" />
          </div>
        </form>
      </div>
    </div>
  );
}
