import { BsCheckLg } from "react-icons/bs";

import React, { Component } from "react";

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  componentDidUpdate() {
    if (this.state.show == true) {
      setTimeout(() => {
        this.setState({ show: false });
      }, 1500);
    }
  }
  render() {
    return (
      this.state.show && (
        <div className="popup">
          <div className="popup_content">
            <div className="icon">
              <BsCheckLg />
            </div>
            <div> Thông tin của quý khách đã được gửi thành công</div>
          </div>
        </div>
      )
    );
  }
}
