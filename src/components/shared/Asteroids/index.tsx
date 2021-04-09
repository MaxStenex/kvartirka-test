import React from "react";
import { Asteroid } from "./Asteroid";

export const Asteroids = () => {
  return (
    <div className="asteroids">
      <div className="container">
        <ul className="asteroids__list">
          <Asteroid
            name="2020 QQ"
            date="3 марта 2022"
            distance="2 866 012 км"
            size={850}
            isDangerous={true}
          />
          <Asteroid
            name="2021 ER"
            date="2 ноября 2022"
            distance="3 331 012 км"
            size={100}
            isDangerous={false}
          />
        </ul>
      </div>
    </div>
  );
};
