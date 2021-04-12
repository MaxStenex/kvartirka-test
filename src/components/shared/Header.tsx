import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

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
              <li
                className={`header__link ${
                  router.pathname === "/" ? " header__link--active" : ""
                }`}
              >
                <NextLink href="/">
                  <a>Астероиды</a>
                </NextLink>
              </li>
              <li
                className={`header__link ${
                  router.pathname === "/destroy-cart" ? " header__link--active" : ""
                }`}
              >
                <NextLink href="/destroy-cart">
                  <a>Уничтожение</a>
                </NextLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
