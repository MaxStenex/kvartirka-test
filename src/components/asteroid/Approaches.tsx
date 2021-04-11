import React from "react";
import { CloseApproach } from "../../types";
import { formatDate } from "../../utils/formatDate";

type Props = {
  approaches: CloseApproach[];
};

export const Approaches: React.FC<Props> = ({ approaches }) => {
  return (
    <>
      <h2 className="approaches__title">Все сближения</h2>
      <ul className="approaches__list">
        {approaches.map((a) => {
          const splitedDate = a.fullDate.split(" ");
          return (
            <li className="approaches__item approach">
              <div className="approach__section">
                <div className="approach__section-title">Скорость</div>
                <div className="approach__dots"></div>
                <div className="approach__data">{a.speed} км/ч</div>
              </div>
              <div className="approach__section">
                <div className="approach__section-title">Дата</div>
                <div className="approach__dots"></div>
                <div className="approach__data">
                  {formatDate(splitedDate[0])} в {splitedDate[1]}
                </div>
              </div>
              <div className="approach__section">
                <div className="approach__section-title">Расстояние до земли</div>
                <div className="approach__dots"></div>
                <div className="approach__data">{a.distanceInKm} км</div>
              </div>
              <div className="approach__section">
                <div className="approach__section-title">Орбита</div>
                <div className="approach__dots"></div>
                <div className="approach__data">{a.orbitingBody}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
