import { faArrowDownWideShort, faArrowRightToBracket, faArrowRotateRight, faArrowUpShortWide, faBasketShopping, faCaretDown, faCircleXmark, faFilter, faLocationDot, faMagnifyingGlass, faMagnifyingGlassDollar, faPhone, faUser, faUserPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSingup = () => {
    navigate("/login");
  };

   const showCategory = () => {

   };
   const closeSearchAdvanced = () =>{

   };

    const searchProducts = () => {
      // Logic thay đổi thông tin
    };

    const openSearchMb = () => {
      // Logic mở tìm kiếm mobile
    };

    const closeSearchMb = () => {
      // Logic đóng tìm kiếm mobile
    };
    const openCart = () => {
      // Logic mở giỏ hàng
    };
    
    return (
      <>
        <header>
          <div className="header-top">
            <div className="container">
              <div className="header-top-left">
                <ul className="header-top-list">
                  <li>
                    <a href="/#">
                      <FontAwesomeIcon icon={faPhone} /> 0123 456 789 (miễn phí)
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <FontAwesomeIcon icon={faLocationDot} />
                      Xem vị trí cửa hàng
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header-top-right">
                <ul className="header-top-list">
                  <li>
                    <a href="/#">Giới thiệu</a>
                  </li>
                  <li>
                    <a href="/#">Cửa hàng</a>
                  </li>
                  <li>
                    <a href="/#">Chính sách</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header-middle">
            <div className="container">
              <div className="header-middle-left">
                <a className="header-logo" href="/#">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/logo.png`}
                    alt="logo"
                    className="header-logo-img"
                  />
                  <span className="header-title">Monster Gear</span>
                </a>
              </div>
              <div className="header-middle-center">
                <form className="form-search">
                  <span className="search-btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                  <input
                    type="text"
                    className="form-search-input"
                    placeholder="Tìm kiếm món ăn..."
                    onChange={searchProducts}
                  />
                  <button className="filter-btn">
                    <FontAwesomeIcon icon={faFilter} />
                    <span>Lọc</span>
                  </button>
                </form>
              </div>
              <div className="header-middle-right">
                <ul className="header-middle-right-list">
                  <li
                    className="header-middle-right-item dnone open"
                    onClick={openSearchMb}
                  >
                    <div className="cart-icon-menu">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                  </li>
                  <li
                    className="header-middle-right-item close"
                    onClick={closeSearchMb}
                  >
                    <div className="cart-icon-menu">
                      <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                  </li>
                  <li className="header-middle-right-item dropdown open">
                    <FontAwesomeIcon icon={faUser} />
                    <div className="auth-container">
                      <span className="text-dndk">Đăng nhập / Đăng ký</span>
                      <span className="text-tk">
                        Tài khoản <FontAwesomeIcon icon={faCaretDown} />
                      </span>
                    </div>
                    <ul className="header-middle-right-menu">
                      <li>
                        <Link id="login" to="/login">
                          <FontAwesomeIcon icon={faArrowRightToBracket} />
                          Đăng nhập
                        </Link>
                      </li>
                      <li>
                        <Link id="signup" to="/signup">
                          <FontAwesomeIcon icon={faUserPlus} /> Đăng ký
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="header-middle-right-item open"
                    onClick={openCart}
                  >
                    <div className="cart-icon-menu">
                      <FontAwesomeIcon icon={faBasketShopping} />
                      <span className="count-product-cart">0</span>
                    </div>
                    <span>Giỏ hàng</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <nav className="header-bottom">
          <div className="container">
            <ul className="menu-list">
              <li className="menu-list-item">
                <a href="/#" className="menu-link">
                  Trang chủ
                </a>
              </li>
              <li className="menu-list-item" onClick={showCategory}>
                <a href="javascript:;" className="menu-link">
                  PC &amp; Laptop
                </a>
              </li>
              <li className="menu-list-item" onClick={showCategory}>
                <a href="javascript:;" className="menu-link">
                  Console &amp; Handheld
                </a>
              </li>
              <li className="menu-list-item" onClick={showCategory}>
                <a href="javascript:;" className="menu-link">
                  Keyboard &amp; Mouse
                </a>
              </li>
              <li className="menu-list-item" onClick={showCategory}>
                <a href="javascript:;" className="menu-link">
                  Speaker &amp; Headphone
                </a>
              </li>
              <li className="menu-list-item" onClick={showCategory}>
                <a href="javascript:;" className="menu-link">
                  Ổ cứng &amp; RAM
                </a>
              </li>
              <li className="menu-list-item" onClick={showCategory}>
                <a href="javascript:;" className="menu-link">
                  khác
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="advanced-search">
          <div className="container">
            <div className="advanced-search-category">
              <span>Phân loại </span>
              <select
                name=""
                id="advanced-search-category-select"
                onChange={searchProducts}
              >
                <option>Tất cả</option>
                <option>PC &amp; Laptop</option>
                <option>Console &amp; Handheld</option>
                <option>Keyboard &amp; Mouse</option>
                <option>Speaker &amp; Headphone</option>
                <option>Ổ cứng &amp; RAM</option>
                <option>Khác</option>
              </select>
            </div>
            <div className="advanced-search-price">
              <span>Giá từ</span>
              <input
                type="number"
                placeholder="tối thiểu"
                id="min-price"
                onChange={searchProducts}
              />
              <span>đến</span>
              <input
                type="number"
                placeholder="tối đa"
                id="max-price"
                onChange={searchProducts}
              />
              <button id="advanced-search-price-btn">
                <FontAwesomeIcon icon={faMagnifyingGlassDollar} />
              </button>
            </div>
            <div className="advanced-search-control">
              <button id="sort-ascending" onClick={searchProducts}>
                <FontAwesomeIcon icon={faArrowUpShortWide} />
              </button>
              <button id="sort-descending" onClick={searchProducts}>
                <FontAwesomeIcon icon={faArrowDownWideShort} />
              </button>
              <button id="reset-search" onClick={searchProducts}>
                <FontAwesomeIcon icon={faArrowRotateRight} />
              </button>
              <button onClick={closeSearchAdvanced}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Header;
