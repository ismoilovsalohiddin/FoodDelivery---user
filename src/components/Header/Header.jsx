import React from "react";
import { Link } from "react-router-dom";
import cls from "./Header.module.scss";
import HeaderLogo from "assets/img/logo.svg";
import locationIcon from "assets/img/locationIcon.svg";
import Russian from "assets/img/Russian.svg";
import ChevronDown from "assets/img/ChevronDown.svg";
import cart from "assets/img/shopping-cart.svg";
import user from "assets/img/user.svg";

export const Header = () => {
  return (
    <div className={cls.header}>
      <div className={cls.header__content}>
        <Link className={cls.header__logo} to="/">
          <img src={HeaderLogo} alt="logo" />
        </Link>
        <nav className={cls.header__nav}>
          <ul className={cls.header__list}>
            <li className={cls.header__list_item}>
              <Link className={cls.header__list_link} to="/menu">Меню</Link>
            </li>
            <li className={cls.header__list_item}>
              <Link className={cls.header__list_link} to="/branches">Филиалы</Link>
            </li>
            <li className={cls.header__list_item}>
              <Link className={cls.header__list_link} to="/about">О нас</Link>
            </li>
            <li className={cls.header__list_item}>
              <Link className={cls.header__list_link} to="/contacts">Контакты</Link>
            </li>
          </ul>
        </nav>
        <div className={cls.header__userLocation}>
          <div className={cls.header__userLocation_content}>
            <div className={cls.header__userLocation_icon}>
              <img src={locationIcon} alt="icon" />
            </div>
            <div className={cls.header__userLocation_text}>
              <p className={cls.header__userLocation_parag}>Доставка или Самовызов</p>
              <p className={cls.header__userLocation_link}>Выберите способ получения</p>
            </div>
          </div>
        </div>
        <div className={cls.header__siteLanguage}>
          <img src={Russian} alt="icon" width="24" height="24"/>
          <img src={ ChevronDown } alt="icon" />
        </div>
        <div className={cls.header__userCart}>
          <img src={cart} alt="icon" />
          <p>0 <span>сум</span></p>
        </div>
        <div className={cls.header__userProfile}>
          <img src={user} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
