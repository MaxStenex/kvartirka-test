import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__info">
            <div className="header__app-name">ARMAGGEDON V</div>
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
