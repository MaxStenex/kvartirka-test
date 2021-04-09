import React from "react";

type Props = {
  name: string;
  date: string;
  distance: string;
  size: number;
  isDangerous: boolean;
};

export const Asteroid: React.FC<Props> = ({
  name,
  date,
  distance,
  size,
  isDangerous,
}) => {
  return (
    <li className={`asteroid ${isDangerous ? " asteroid--dangerous" : ""}`}>
      <div className="asteroid__wrapper">
        <div className="asteroid__images">
          <img
            className="asteroid__image asteroid__image--asteroid"
            src={require("../../../images/asteroid.svg")}
            alt="#"
            width={size / 1.5}
          />
          <img
            className="asteroid__image asteroid__image--dino"
            src={require("../../../images/dino.svg")}
            alt="#"
          />
        </div>
        <div className="asteroid__info">
          <h3 className="asteroid__name">
            <a href="/">{name}</a>
          </h3>
          <ul className="asteroid__data-list">
            <li className="asteroid__data-item">
              <h4 className="asteroid__data-title">Дата</h4>
              <div className="asteroid__data-dots"></div>
              <span className="asteroid__data-data">{date}</span>
            </li>
            <li className="asteroid__data-item">
              <h4 className="asteroid__data-title">Расстояние</h4>
              <div className="asteroid__data-dots"></div>
              <span className="asteroid__data-data">{distance}</span>
            </li>
            <li className="asteroid__data-item">
              <h4 className="asteroid__data-title">Размер</h4>
              <div className="asteroid__data-dots"></div>
              <span className="asteroid__data-data">{size}</span>
            </li>
          </ul>
        </div>
        <div className="asteroid__grade">
          Оценка: <span>{isDangerous ? "опасен" : "не опасен"}</span>
          <button>На уничтожение</button>
        </div>
      </div>
    </li>
  );
};
