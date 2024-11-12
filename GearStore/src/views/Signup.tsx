import React from 'react';

const Signup = () => {
    return (
      <>
        <div className="container-login-signup">
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
                  <a href="/#" title="chính sách trang web" target="_blank">
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
        </div>
      </>
    );
}

export default Signup;
