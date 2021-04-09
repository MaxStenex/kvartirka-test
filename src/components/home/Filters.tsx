import React from "react";

export const Filters = () => {
  return (
    <section className="filters">
      <div className="container">
        <div className="filters__wrapper">
          <div className="filters__danger">
            <input
              className="filters__danger-input"
              id="filters__danger-input"
              type="checkbox"
            />
            <label htmlFor="filters__danger-input">Показать только опасные</label>
          </div>
          <div className="filters__distance">
            <span>Расстояние</span>
            <div className="filters__distance-type filters__distance-type--active">
              в километрах,
            </div>
            <div className="filters__distance-type ">в дистанциях до луны</div>
          </div>
        </div>
      </div>
    </section>
  );
};
