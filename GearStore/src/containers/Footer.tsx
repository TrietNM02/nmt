import { faArrowRight, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
      <>
        <footer className="footer">
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
          <div className="copyright-wrap">
            <div className="container">
              <div className="copyright-content">
                <p>
                  Copyright 2024 <strong>MonsterGear</strong>. All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
}

export default Footer;
