import React from 'react';
import "./Login.css";
import Input from '../components/Input';

const Login = () => {
    return (
      <>
        <div className="container-login-signup">
          <div className="form-content login">
            <h3 className="form-title">Đăng nhập tài khoản</h3>
            <p className="form-description">
              Đăng nhập để mua hàng và nhận những ưu đãi đặc biệt từ
              <strong>MonsterGear</strong>
            </p>
            <form className="login-form">
              <Input
                id="phoneNumber"
                label="Số điện thoại"
                type="number"
                placeholder="Nhập số điện thoại"
              />
                <Input
                  id="password"
                  label="Mật khẩu"
                  type="password"
                  placeholder="Nhập mật khẩu"
                />
                <span className="form-message-check-login form-message" />
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
      </>
    );
}

export default Login;
