import { faArrowDownWideShort, faArrowRight, faArrowRotateRight, faArrowUp, faArrowUpShortWide, faBasketShopping, faBox, faCartArrowDown, faChevronLeft, faCoins, faEnvelope, faFloppyDisk, faHeadset, faKey, faLocationDot, faMagnifyingGlassDollar, faMotorcycle, faPeopleCarryBox, faPhone, faPlus, faShieldHeart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  const [isDisabled, setIsDisabled] = useState(true); // Biến trạng thái để điều khiển disabled

  const searchProducts = () => {
    // Logic mở giỏ hàng
  };

  const showCategory = () => {
    // Logic mở giỏ hàng
  };

  const closeSearchAdvanced = () => {
    //
  };

  const changeInformation = () => {
    // Logic thay đổi thông tin
  };

  const changePassword = () => {
    // Logic đổi mật khẩu
  };

  const closeModal = () => {
    // Logic đổi mật khẩu
  };

  const closeCart = () => {
    // Logic đổi mật khẩu
  };

  const closeCheckOut = () => {
    // Logic đóng tìm kiếm mobile
  };

  return (
    <>
      <main className="main-wrapper">
        <div className="container" id="trangchu">
          <div className="home-slider">
            <div className="slider-wrapper">
              <img src={`${process.env.PUBLIC_URL}/img/banner3.jpg`} alt="/" />
              <img src={`${process.env.PUBLIC_URL}/img/banner6.jpg`} alt="/" />
              <img src={`${process.env.PUBLIC_URL}/img/banner4.jpg`} alt="/" />
            </div>
          </div>
          <div className="home-service" id="home-service">
            <div className="home-service-item">
              <div className="home-service-item-icon">
                <FontAwesomeIcon icon={faPeopleCarryBox} />
              </div>
              <div className="home-service-item-content">
                <h4 className="home-service-item-content-h">
                  Miễn phí vận chuyển
                </h4>
                <p className="home-service-item-content-desc">
                  Áp dụng đối với khu vực TP.HCM
                </p>
              </div>
            </div>
            <div className="home-service-item">
              <div className="home-service-item-icon">
                <FontAwesomeIcon icon={faShieldHeart} />
              </div>
              <div className="home-service-item-content">
                <h4 className="home-service-item-content-h">
                  Đảm bảo chất lượng
                </h4>
                <p className="home-service-item-content-desc">
                  Cam kết chất lượng 100%
                </p>
              </div>
            </div>
            <div className="home-service-item">
              <div className="home-service-item-icon">
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <div className="home-service-item-content">
                <h4 className="home-service-item-content-h">HỖ TRỢ 24/7</h4>
                <p className="home-service-item-content-desc">
                  Tất cả ngày trong tuần
                </p>
              </div>
            </div>
            <div className="home-service-item">
              <div className="home-service-item-icon">
                <FontAwesomeIcon icon={faCoins} />
              </div>
              <div className="home-service-item-content">
                <h4 className="home-service-item-content-h">HOÀN LẠI TIỀN</h4>
                <p className="home-service-item-content-desc">
                  Nếu không hài lòng trong 30 ngày
                </p>
              </div>
            </div>
          </div>
          <div className="home-title-block" id="home-title">
            <h2 className="home-title">
              Khám phá cảc sản phẩm công nghệ đỉnh cao
            </h2>
          </div>
          <div className="home-products" id="home-products">
            {/*    <div
      class="col-product"
      data-bs-toggle="modal"
      data-bs-target="#detailsProduct1"
    >
      <article class="card-product">
        <div class="card-header">
          <a href="#" class="card-image-link">
            <img
              class="card-image"
              src="./assets/img/products/product1.png"
              alt=""
            />
          </a>
        </div>
        <div class="product-info">
          <div class="card-content">
            <div class="card-title">
              <a href="#" class="card-title-link"
                >Laptop ASUS Vivobook 16 M1605YA MB303W</a
              >
            </div>
          </div>
          <div class="card-footer">
            <div class="product-price">
              <span class="current-price">13.990.000đ</span>
            </div>
            <div class="product-buy">
              <button class="card-button order-item">
                <i class="fa-regular fa-cart-shopping-fast"></i>Đặt mua
              </button>
            </div>
          </div>
        </div>
      </article>
    
      <div
        id="detailsProduct1"
        class="modal fade"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-header">
            <img
              class="product-image"
              src="./assets/img/products/product1.png"
              alt=""
            />
          </div>
          <div class="modal-body">
            <h2 class="product-title"></h2>
            <div class="product-control">
              <div class="priceBox">
                <span class="current-price">13.990.000đ</span>
              </div>
              <div class="buttons_added">
                <input
                  class="minus is-form"
                  type="button"
                  value="-"
                  onClick="decreasingNumber(this)"
                />
                <input
                  class="input-qty"
                  max="100"
                  min="1"
                  name=""
                  type="number"
                  value="1"
                />
                <input
                  class="plus is-form"
                  type="button"
                  value="+"
                  onClick="increasingNumber(this)"
                />
              </div>
            </div>
            <p class="product-description">
              ASUS Vivobook là một trong những dòng laptop mỏng nhẹ có
              hiệu năng cao, thiết kế đẹp mắt, laptop ASUS Vivobook 16
              M1605YA MB303W từ khi ra mắt đã là một trong những mẫu
              laptop mà dân văn phòng không thể bỏ qua. Sở hữu cấu hình
              mạnh mẽ với thiết kế mỏng nhẹ đặc biệt, ASUS Vivobook 16
              M1605YA MB303W không chỉ có thể đáp ứng các tác vụ cơ bản mà
              còn cả nhu cầu thiết kế đồ họa lẫn lập trình.
            </p>
          </div>
          <div class="notebox">
            <p class="notebox-title">Ghi chú</p>
            <textarea
              class="text-note"
              id="popup-detail-note"
              placeholder="Nhập thông tin cần lưu ý..."
            ></textarea>
          </div>
          <div class="modal-footer">
            <div class="price-total">
              <span class="thanhtien">Thành tiền</span>
              <span class="price">13.990.000đ</span>
            </div>
            <div class="modal-footer-control">
              <button class="button-dathangngay">Đặt hàng ngay</button>
              <button
                class="button-dat"
                id="add-cart"
                onClick="animationCart()"
              >
                <i class="fa-light fa-basket-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> */}
          </div>
          <div className="page-nav">
            <ul className="page-nav-list" />
          </div>
        </div>
        <div className="container" id="account-user">
          <div className="main-account">
            <div className="main-account-header">
              <h3>Thông tin tài khoản của bạn</h3>
              <p>Quản lý thông tin để bảo mật tài khoản</p>
            </div>
            <div className="main-account-body">
              <div className="main-account-body-col">
                <form className="info-user">
                  <div className="form-group">
                    <label htmlFor="infoname" className="form-label">
                      Họ và tên
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="infoname"
                      id="infoname"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="infophone" className="form-label">
                      Số điện thoại
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="infophone"
                      id="infophone"
                      disabled={isDisabled}
                      placeholder=""
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="infoemail" className="form-label">
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      name="infoemail"
                      id="infoemail"
                      placeholder="Thêm địa chỉ email của bạn"
                    />
                    <span className="inforemail-error form-message" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="infoaddress" className="form-label">
                      Địa chỉ
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="infoaddress"
                      id="infoaddress"
                      placeholder="Thêm địa chỉ giao hàng của bạn"
                    />
                  </div>
                </form>
              </div>
              <div className="main-account-body-col">
                <form className="change-password">
                  <div className="form-group">
                    <label htmlFor="" className="form-label w60">
                      Mật khẩu hiện tại
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      name=""
                      id="password-cur-info"
                      placeholder="Nhập mật khẩu hiện tại"
                    />
                    <span className="password-cur-info-error form-message" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="form-label w60">
                      Mật khẩu mới
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      name=""
                      id="password-after-info"
                      placeholder="Nhập mật khẩu mới"
                    />
                    <span className="password-after-info-error form-message" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="form-label w60">
                      Xác nhận mật khẩu mới
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      name=""
                      id="password-comfirm-info"
                      placeholder="Nhập lại mật khẩu mới"
                    />
                    <span className="password-after-comfirm-error form-message" />
                  </div>
                </form>
              </div>
              <div className="main-account-body-row">
                <div>
                  <button id="save-info-user" onClick={changeInformation}>
                    <FontAwesomeIcon icon={faFloppyDisk} />
                    Lưu thay đổi
                  </button>
                </div>
                <div>
                  <button id="save-password" onClick={changePassword}>
                    <FontAwesomeIcon icon={faKey} /> Đổi mật khẩu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="order-history">
          <div className="main-account">
            <div className="main-account-header">
              <h3>Quản lý đơn hàng của bạn</h3>
              <p>Xem chi tiết, trạng thái của những đơn hàng đã đặt.</p>
            </div>
            <div className="main-account-body">
              <div className="order-history-section" />
            </div>
          </div>
        </div>
      </main>
      <div className="modal product-detail">
        <button className="modal-close close-popup">
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="modal-container mdl-cnt" id="product-detail-content" />
      </div>
      {/* <div className="modal signup-login">
        <div className="modal-container">
          <button className="form-close" onClick={closeModal}>
            <i className="fa-regular fa-xmark" />
          </button>
          <div className="forms mdl-cnt">
            <div className="form-content sign-up">
              <h3 className="form-title">Đăng ký tài khoản</h3>
              <p className="form-description">
                Đăng ký thành viên để mua hàng và nhận những ưu đãi đặc biệt từ
                <strong>MonsterGear</strong>
              </p>
              <form className="signup-form">
                <div className="form-group">
                  <label htmlFor="fullname" className="form-label">
                    Tên đầy đủ
                  </label>
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    placeholder="VD: Nhật Sinh"
                    className="form-control"
                  />
                  <span className="form-message-name form-message" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Số điện thoại
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Nhập số điện thoại"
                    className="form-control"
                  />
                  <span className="form-message-phone form-message" />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Mật khẩu
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Nhập mật khẩu"
                    className="form-control"
                  />
                  <span className="form-message-password form-message" />
                </div>
                <div className="form-group">
                  <label htmlFor="password_confirmation" className="form-label">
                    Nhập lại mật khẩu
                  </label>
                  <input
                    id="password_confirmation"
                    name="password_confirmation"
                    placeholder="Nhập lại mật khẩu"
                    type="password"
                    className="form-control"
                  />
                  <span className="form-message-password-confi form-message" />
                </div>
                <div className="form-group">
                  <input
                    className="checkbox"
                    name="checkbox"
                    required
                    type="checkbox"
                    id="checkbox-signup"
                  />
                  <label htmlFor="checkbox-signup" className="form-checkbox">
                    Tôi đồng ý với
                    <a href="#" title="chính sách trang web" target="_blank">
                      chính sách trang web
                    </a>
                  </label>
                  <p className="form-message-checkbox form-message" />
                </div>
                <button className="form-submit" id="signup-button">
                  Đăng ký
                </button>
              </form>
              <p className="change-login">
                Bạn đã có tài khoản ?
                <a href="javascript:;" className="login-link">
                  Đăng nhập ngay
                </a>
              </p>
            </div>
            <div className="form-content login">
              <h3 className="form-title">Đăng nhập tài khoản</h3>
              <p className="form-description">
                Đăng nhập để mua hàng và nhận những ưu đãi đặc biệt từ
                <strong>MonsterGear</strong>
              </p>
              <form className="login-form">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Số điện thoại
                  </label>
                  <input
                    id="phone-login"
                    name="phone"
                    type="text"
                    placeholder="Nhập số điện thoại"
                    className="form-control"
                  />
                  <span className="form-message phonelog" />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Mật khẩu
                  </label>
                  <input
                    id="password-login"
                    name="password"
                    type="password"
                    placeholder="Nhập mật khẩu"
                    className="form-control"
                  />
                  <span className="form-message-check-login form-message" />
                </div>
                <button className="form-submit" id="login-button">
                  Đăng nhập
                </button>
              </form>
              <p className="change-login">
                Bạn chưa có tài khoản ?
                <a href="javascript:;" className="signup-link">
                  Đăng kí ngay
                </a>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="modal-cart">
        <div className="cart-container">
          <div className="cart-header">
            <h3 className="cart-header-title">
              <FontAwesomeIcon icon={faBasketShopping} /> Giỏ hàng
            </h3>
            <button className="cart-close" onClick={closeCart}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="cart-body">
            <div className="gio-hang-trong">
              <FontAwesomeIcon icon={faCartArrowDown} />
              <p>Không có sản phẩm nào trong giỏ hàng của bạn</p>
            </div>
            <ul className="cart-list" />
          </div>
          <div className="cart-footer">
            <div className="cart-total-price">
              <p className="text-tt">Tổng tiền:</p>
              <p className="text-price">0đ</p>
            </div>
            <div className="cart-footer-payment">
              <button className="them-mon">
                <FontAwesomeIcon icon={faPlus} />
                Thêm món
              </button>
              <button className="thanh-toan disabled">Thanh toán</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal detail-order">
        <div className="modal-container mdl-cnt">
          <h3 className="modal-container-title">Thông tin đơn hàng</h3>
          <button className="form-close" onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div className="detail-order-content" />
        </div>
      </div>
      {/* <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-top-content">
              <div className="footer-top-img">
                <img
                  src={`${process.env.PUBLIC_URL}/img/logo-gearStore.png`}
                  alt="/"
                />
              </div>
              <div className="footer-top-subbox">
                <div className="footer-top-subs">
                  <h2 className="footer-top-subs-title">Đăng ký nhận tin</h2>
                  <p className="footer-top-subs-text">
                    Nhận thông tin mới nhất từ chúng tôi
                  </p>
                </div>
                <form className="form-ground">
                  <input
                    type="email"
                    className="form-ground-input"
                    placeholder="Nhập email của bạn"
                  />
                  <button className="form-ground-btn">
                    <span>ĐĂNG KÝ</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-area">
          <div className="container-fluid">
            <div className="widget-row">
              <div className="widget-row-col-1">
                <h3 className="widget-title">Về chúng tôi</h3>
                <div className="widget-row-col-content">
                  <p>
                    <strong>MonsterGear</strong> là thương hiệu được thành lập
                    vào năm 2024 với tiêu chí mang đến cho khách hàng các sản
                    phẩm công nghệ chất lượng, đỉnh cao.
                  </p>
                </div>
                <div className="widget-social">
                  <div className="widget-social-item">
                    <a href="/#">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </div>
                  <div className="widget-social-item">
                    <a href="/#">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                  <div className="widget-social-item">
                    <a href="/#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                  <div className="widget-social-item">
                    <a href="/#">
                      <i className="bi bi-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="widget-row-col">
                <h3 className="widget-title">Liên kết</h3>
                <ul className="widget-contact">
                  <li className="widget-contact-item">
                    <a href="/#">
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span>Về chúng tôi</span>
                    </a>
                  </li>
                  <li className="widget-contact-item">
                    <a href="/#">
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span>Các sản phẩm</span>
                    </a>
                  </li>
                  <li className="widget-contact-item">
                    <a href="/#">
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span>Điều khoản</span>
                    </a>
                  </li>
                  <li className="widget-contact-item">
                    <a href="/#">
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span>Liên hệ</span>
                    </a>
                  </li>
                  <li className="widget-contact-item">
                    <a href="/#">
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span>Tin tức</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="widget-row-col">
                <h3 className="widget-title">Danh mục</h3>
                <ul className="widget-contact">
                  <li className="widget-contact-item">
                    <a href="/#">
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span>PC &amp; Laptop</span>
                    </a>
                  </li>
                  <li className="widget-contact-item">
                    <a href="/#">
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span>Console &amp; Handheld</span>
                    </a>
                  </li>
                  <li className="widget-contact-item">
                    <a href="/#">
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span>Keyboard &amp; Mouse</span>
                    </a>
                  </li>
                  <li className="widget-contact-item">
                    <a href="/#">
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span>Speaker &amp; Headphone</span>
                    </a>
                  </li>
                  <li className="widget-contact-item">
                    <a href="/#">
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span>Ổ cứng &amp; RAM</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="widget-row-col-1">
                <h3 className="widget-title">Liên hệ</h3>
                <div className="contact">
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className="contact-content">
                      <span>
                        78-80-82 Hoàng Hoa Thám, Phường 12, Quận Tân Bình
                      </span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="contact-content contact-item-phone">
                      <span>0123 456 789</span>
                      <br />
                      <span>0987 654 321</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="contact-content conatct-item-email">
                      <span>abc@domain.com</span>
                      <br />
                      <span>infoabc@domain.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      
      <div className="back-to-top">
        <a href="#">
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div>
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="checkout-return">
            <button onClick={closeCheckOut}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          </div>
          <h2 className="checkout-title">Thanh toán</h2>
        </div>
        <main className="checkout-section container">
          <div className="checkout-col-left">
            <div className="checkout-row">
              <div className="checkout-col-title">Thông tin đơn hàng</div>
              <div className="checkout-col-content">
                <div className="content-group">
                  <p className="checkout-content-label">Hình thức giao nhận</p>
                  <div className="checkout-type-order">
                    <button className="type-order-btn active" id="giaotannoi">
                      <FontAwesomeIcon icon={faMotorcycle} />
                      Giao tận nơi
                    </button>
                    <button className="type-order-btn" id="tudenlay">
                      <FontAwesomeIcon icon={faBox} />
                      Nhận tại cửa hàng
                    </button>
                  </div>
                </div>
                <div className="content-group">
                  <p className="checkout-content-label">Ngày giao hàng</p>
                  <div className="date-order" />
                </div>
                <div className="content-group chk-ship" id="giaotannoi-group">
                  <p className="checkout-content-label">Thời gian giao hàng</p>
                  <div className="delivery-time">
                    <input
                      type="radio"
                      name="giaongay"
                      id="deliverytime"
                      className="radio"
                    />
                    <label htmlFor="deliverytime">Giao vào giờ</label>
                    <select className="choise-time">
                      <option data-hours={8} value="08:00">
                        08:00 - 09:00
                      </option>
                      <option data-hours={9} value="09:00">
                        09:00 - 10:00
                      </option>
                      <option data-hours={10} value="10:00">
                        10:00 - 11:00
                      </option>
                      <option data-hours={11} value="11:00">
                        11:00 - 12:00
                      </option>
                      <option data-hours={12} value="12:00">
                        12:00 - 13:00
                      </option>
                      <option data-hours={13} value="13:00">
                        13:00 - 14:00
                      </option>
                      <option data-hours={14} value="14:00">
                        14:00 - 15:00
                      </option>
                      <option data-hours={15} value="15:00">
                        15:00 - 16:00
                      </option>
                      <option data-hours={16} value="16:00">
                        16:00 - 17:00
                      </option>
                      <option data-hours={17} value="17:00">
                        17:00 - 18:00
                      </option>
                      <option data-hours={18} value="18:00">
                        18:00 - 19:00
                      </option>
                      <option data-hours={19} value="19:00">
                        19:00 - 20:00
                      </option>
                      <option data-hours={20} value="20:00">
                        20:00 - 21:00
                      </option>
                      <option data-hours={21} value="21:00">
                        21:00 - 22:00
                      </option>
                    </select>
                  </div>
                </div>
                <div className="content-group" id="tudenlay-group">
                  <p className="checkout-content-label">
                    Lấy hàng tại chi nhánh
                  </p>
                  <div className="delivery-time">
                    <input
                      type="radio"
                      name="chinhanh"
                      id="chinhanh-1"
                      className="radio"
                    />
                    <label htmlFor="chinhanh-1">
                      78-80-82 Hoàng Hoa Thám, Phường 12, Quận Tân Bình
                    </label>
                  </div>
                  <div className="delivery-time">
                    <input
                      type="radio"
                      name="chinhanh"
                      id="chinhanh-2"
                      className="radio"
                    />
                    <label htmlFor="chinhanh-2">
                      1081 - 1083 Trần Hưng Đạo, Phường 5, Quận 5
                    </label>
                  </div>
                </div>
                <div className="content-group">
                  <p className="checkout-content-label">Ghi chú đơn hàng</p>
                  <textarea
                    className="note-order"
                    placeholder="Nhập ghi chú"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="checkout-row">
              <div className="checkout-col-title">Thông tin người nhận</div>
              <div className="checkout-col-content">
                <div className="content-group">
                  <form className="info-nhan-hang">
                    <div className="form-group">
                      <input
                        id="tennguoinhan"
                        name="tennguoinhan"
                        type="text"
                        placeholder="Tên người nhận"
                        className="form-control"
                      />
                      <span className="form-message" />
                    </div>
                    <div className="form-group">
                      <input
                        id="sdtnhan"
                        name="sdtnhan"
                        type="text"
                        placeholder="Số điện thoại nhận hàng"
                        className="form-control"
                      />
                      <span className="form-message" />
                    </div>
                    <div className="form-group">
                      <input
                        id="diachinhan"
                        name="diachinhan"
                        type="text"
                        placeholder="Địa chỉ nhận hàng"
                        className="form-control chk-ship"
                      />
                      <span className="form-message" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="checkout-col-right">
            <p className="checkout-content-label">Đơn hàng</p>
            <div className="bill-total" id="list-order-checkout" />
            <div className="bill-payment">
              <div className="total-bill-order" />
              <div className="policy-note">
                Bằng việc bấm vào nút “Đặt hàng”, tôi đồng ý với
                <a href="#" target="_blank">
                  chính sách hoạt động
                </a>
                của chúng tôi.
              </div>
            </div>
            <div className="total-checkout">
              <div className="text">Tổng tiền</div>
              <div className="price-bill">
                <div className="price-final" id="checkout-cart-price-final">
                  0
                </div>
              </div>
            </div>
            <button className="complete-checkout-btn">Đặt hàng</button>
          </div>
        </main>
      </div>
      <div id="toast" />
    </>
  );
};
export default Home;
