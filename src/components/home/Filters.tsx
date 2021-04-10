import React, { useState } from "react";
import { DistanceType } from "../../types";
import { useRouter } from "next/router";

const filters = [
  { id: 1, type: DistanceType.KILOMETERS, text: "в километрах" },
  { id: 2, type: DistanceType.TO_MOON, text: "в дистанциях до луны" },
];

export const Filters = () => {
  const router = useRouter();

  const [isOnlyDangerous, setIsOnlyDangerous] = useState(
    router.query.dangerous === "true"
  );
  const [activeDistanceType, setActiveDistanceType] = useState(
    router.query.distance === "moon" ? DistanceType.TO_MOON : DistanceType.KILOMETERS
  );

  const onDangerInputClick = () => {
    const query = { ...router.query };
    if (isOnlyDangerous) {
      setIsOnlyDangerous(false);
      delete query.dangerous;
      router.push(
        {
          query,
        },
        undefined,
        { shallow: true }
      );
    } else {
      setIsOnlyDangerous(true);
      router.push(
        {
          query: {
            ...query,
            dangerous: true,
          },
        },
        undefined,
        { shallow: true }
      );
    }
  };

  const onDistanceTypeClick = () => {
    const query = { ...router.query };
    if (activeDistanceType === DistanceType.TO_MOON) {
      setActiveDistanceType(DistanceType.KILOMETERS);
      delete query.distance;
      router.push(
        {
          query,
        },
        undefined,
        { shallow: true }
      );
    } else {
      setActiveDistanceType(DistanceType.TO_MOON);
      router.push(
        {
          query: {
            ...query,
            distance: "moon",
          },
        },
        undefined,
        { shallow: true }
      );
    }
  };

  return (
    <section className="filters">
      <div className="container">
        <div className="filters__wrapper">
          <div className="filters__danger">
            <input
              className="filters__danger-input"
              id="filters__danger-input"
              type="checkbox"
              checked={isOnlyDangerous}
              onChange={onDangerInputClick}
            />
            <label htmlFor="filters__danger-input">Показать только опасные</label>
          </div>
          <div className="filters__distance">
            <span>Расстояние</span>
            {filters.map((f) => (
              <button
                key={f.id}
                className={`filters__distance-type ${
                  activeDistanceType === f.type ? " filters__distance-type--active" : ""
                }`}
                onClick={() => {
                  f.type !== activeDistanceType && onDistanceTypeClick();
                }}
              >
                {f.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
