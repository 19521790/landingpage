import "./App.css";
import Explain from "./components/Explain";
import Aos from "aos";
import {
  AiOutlineGlobal,
  AiOutlineSafety,
  AiOutlineAreaChart,
  AiOutlineFieldTime,
} from "react-icons/ai";
import {
  GiTakeMyMoney,
  GiCheckMark,
  GiReceiveMoney,
  GiPodiumWinner,
} from "react-icons/gi";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";

import { useEffect } from "react";
import "aos/dist/aos.css";
import Product from "./components/Product";
import ReasonCard from "./components/ReasonCard";
import Talk from "./components/Talk";
import Share from "./components/Share";
import Contact from "./components/Contact";
import Slide from "./components/Slide";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, mirror: false, once: true });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="banner_container">
          <img src={require("./img/banner.png")} alt="" />
        </div>
        {/* BANNER */}
        <div className="explain">
          <h3 data-aos="fade-up">Vì sao đầu tư hàng hoá là đúng đắn</h3>
          <div data-aos="fade-up" className="row explain-cards">
            <Explain
              title="Thị trường minh bạch"
              base_title="Kênh đầu tư hợp pháp được cấp phép tại Việt Nam"
              icon_name={<GiCheckMark className="icon" />}
            />
            <Explain
              title="Thanh khoản cao"
              base_title="Thị trường toàn cầu, liên thông với các Sở Giao dịch Hàng hóa lớn trên thế giới."
              icon_name={<AiOutlineGlobal className="icon" />}
            />
            <Explain
              title="Đòn bẩy lớn"
              base_title="Tỷ suất sinh lời từ 5 - 15%."
              icon_name={<GiTakeMyMoney className="icon" />}
            />
            <Explain
              title="Giao dịch hai chiều"
              base_title="Thị trường tăng hay giảm điểm đều có thể kiếm lời"
              icon_name={<CgArrowsExchangeAltV className="icon" />}
            />
          </div>
          <button>Đăng kí ngay</button>
        </div>
        {/* danh muc giao dich */}
        <div className="product">
          <h3>Danh mục mặt hàng giao dịch đa dạng </h3>
          <div className="product_cards row">
            <Product text="Nông sản" img={require("./img/nongsan.png")} />
            <Product
              text="Nguyên liệu công nghiệp"
              img={require("./img/nguyenlieucongnghiep.png")}
            />
            <Product text="Kim loại" img={require("./img/nangluong.png")} />
            <Product text="Năng lượng" img={require("./img/kimloai.png")} />
          </div>
          <button>Hotline: 0999999999</button>
        </div>
        {/* li do dau tu vao gia cat loi */}
        <div className="reason">
          <div className="reason_content">
            <h3>Lí do nên đầu tư vào Gia Cát Lợi</h3>
            <div className="reason_cards row">
              <ReasonCard
                icon={<BsPeopleFill className="hexagon_icon" />}
                content="Thành viên Top đầu của Sở Giao dịch Hàng hóa Việt Nam"
                delay={50}
              />
              <ReasonCard
                icon={<GiReceiveMoney className="hexagon_icon" />}
                content="Nạp rút tiền nhanh chóng, linh hoạt"
                delay={250}
              />
              <ReasonCard
                icon={<FaHandsHelping className="hexagon_icon" />}
                content="Đội ngũ chuyên gia phân tích hàng đầu, Hỗ trợ 24/7"
                delay={450}
              />
              <ReasonCard
                icon={<AiOutlineSafety className="hexagon_icon" />}
                content="Cam kết bảo mật, an toàn thông tin cho khách hàng"
                delay={650}
              />
            </div>
            <div className="reason_cards row">
              <ReasonCard
                icon={<GiPodiumWinner className="hexagon_icon" />}
                content="Cuộc thi Trading được tổ chức thường xuyên"
                delay={50}
              />
              <ReasonCard
                icon={<AiOutlineFieldTime className="hexagon_icon" />}
                content="Mở tài khoản nhanh chóng, dễ dàng"
                delay={250}
              />
              <ReasonCard
                icon={<RiAccountCircleLine className="hexagon_icon" />}
                content="Trải nghiệm Trading với tài khoản Demo"
                delay={450}
              />
              <ReasonCard
                icon={<AiOutlineAreaChart className="hexagon_icon" />}
                content="Hỗ trợ 50% phí CQG"
                delay={650}
              />
            </div>
          </div>
        </div>
        {/* nha dau tu noi gi ve gia cat loi */}
        <div className="talk">
          <h3>Nhà đầu tư nói gì về chúng tôi</h3>
          <div className="talk_cards row">
            <Talk
              content="Mạo hiểm đem lại cho tôi những cơ hội tốt, chính vì vậy mà tôi chọn
          giao dịch dầu tại Gia Cát Lợi. Thị trường biến động tạo ra những thời điểm
          lướt sóng tốt, hơn nữa nhờ tính hai chiều của thị trường mà tỉ lệ kiếm
          được lợi nhuận thành công cũng cao hơn."
              name="N.N.L"
            />
            <Talk
              name="B.H.V"
              content="Tôi chủ yếu đầu tư vào các mặt hàng nhóm nông sản bởi mức ký quỹ khá phù hợp, tính thanh khoản cao và ít các loại phí dịch vụ."
            />
            <Talk
              name="L.T.V"
              content="Tôi bắt đầu tham gia giao dịch trên thị trường này nhiều hơn từ khi có loại hình giao dịch Spread vì vốn đầu tư được tối ưu và độ rủi ro cũng thấp hơn. Ngoài ra, đây là thị trường đã được cấp phép tại Việt Nam nên cũng cảm thấy yên tâm khi đầu tư."
            />
          </div>
          <button>Hotline: 09999999999</button>
        </div>
        {/* Liên thông sở nước ngoài */}
        <div className="share">
          <div className="share_content">
            <h3>Sở giao dịch nước ngoài liên thông</h3>
            <div className="share_cards row">
              <Share image={require("./img/cbot.png")} delay="50" />
              <Share image={require("./img/nymex.png")} delay="250" />
              <Share image={require("./img/comex.png")} delay="450" />
              <Share image={require("./img/ice.png")} delay="650" />
              <Share image={require("./img/lme.png")} delay="50" />
              <Share image={require("./img/ose.png")} delay="250" />
              <Share image={require("./img/sgx.png")} delay="450" />
              <Share image={require("./img/xtb.png")} delay="650" />
            </div>
          </div>
        </div>
        {/* lien he */}
        <div className="contact_container">
          <h3>Liên hệ ngay</h3>
          <div className="row">
            <div className="col-2">
              <Contact />
            </div>
            <div className="col-2">
              <Slide />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
