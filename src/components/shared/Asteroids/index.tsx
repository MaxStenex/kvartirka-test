import React from "react";
import { AsteroidType } from "../../../types";
import { Asteroid } from "./Asteroid";

type Props = {
  items: AsteroidType[];
};

export const Asteroids: React.FC<Props> = ({ items }) => {
  return (
    <div className="asteroids">
      <div className="container">
        <ul className="asteroids__list">
          {items.map((ast) => (
            <Asteroid
              key={ast.id}
              id={ast.id}
              name={ast.name}
              date={ast.date}
              distanceInKm={ast.distanceInKm}
              distanceToMoons={ast.distanceToMoons}
              size={ast.size}
              isDangerous={ast.isDangerous}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
