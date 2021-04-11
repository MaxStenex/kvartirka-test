import React from "react";
import NextLink from "next/link";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__info">
            <NextLink href="/">
              <a className="header__app-name">ARMAGGEDON V</a>
            </NextLink>
            <div className="header__about">
              Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
            </div>
          </div>
          <nav className="header__nav">
            <ul className="header__links">
              <li className="header__link header__link--active">
                <a href="/">Астероиды</a>
              </li>
              <li className="header__link">
                <a href="/">Уничтожение</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
