import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { fetchAsteroidsInfo } from "../api";
import { Filters } from "../components/home/Filters";
import { Asteroids } from "../components/shared/Asteroids";
import { Footer } from "../components/shared/Footer";
import { Header } from "../components/shared/Header";
import { AsteroidType } from "../types";

type Props = {
  asteroids: AsteroidType[];
};

const LIMIT = 10;

const Home: React.FC<Props> = ({ asteroids }) => {
  const router = useRouter();
  const [offset, setOffset] = useState(LIMIT);
  const [filteredAsteroids, setFilteredAsteroids] = useState(
    Array.from(asteroids).slice(0, LIMIT)
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (router.query.dangerous === "true") {
      setFilteredAsteroids(
        Array.from(asteroids)
          .slice(0, offset)
          .filter((ast) => ast.isDangerous === true)
      );
    } else {
      setFilteredAsteroids(Array.from(asteroids).slice(0, offset));
    }
  }, [router.query.dangerous, asteroids]);

  useEffect(() => {
    const loadMoreHandler = () => {
      if (offset > asteroids.length) {
        return;
      }

      if (
        scrollRef.current &&
        scrollRef.current.getBoundingClientRect().top <= window.innerHeight
      ) {
        if (router.query.dangerous === "true") {
          setFilteredAsteroids((p) =>
            [...p, ...Array.from(asteroids).slice(offset, offset + LIMIT)].filter(
              (ast) => ast.isDangerous === true
            )
          );
        } else {
          setFilteredAsteroids((p) => [
            ...p,
            ...Array.from(asteroids).slice(offset, offset + LIMIT),
          ]);
        }
        setOffset((prev) => prev + LIMIT);
      }
    };

    window.addEventListener("scroll", loadMoreHandler);
    window.addEventListener("load", loadMoreHandler);
    return () => {
      window.removeEventListener("scroll", loadMoreHandler);
      window.removeEventListener("load", loadMoreHandler);
    };
  }, [offset, asteroids, scrollRef.current, router.query.dangerous]);

  return (
    <>
      <Header />
      <Filters />
      <Asteroids items={filteredAsteroids} />
      <div ref={scrollRef} className="__scroll"></div>
      <Footer />
    </>
  );
};

export default Home;

export const getServerSideProps = async (): Promise<{ props: Props }> => {
  try {
    const { data } = await fetchAsteroidsInfo(new Date());
    const asteroidsArrs: Array<any> = Object.values(data.near_earth_objects);
    const asteroids: AsteroidType[] = [];

    asteroidsArrs.map((arr) => {
      arr.map((i: any) => {
        asteroids.push({
          id: parseInt(i.id),
          name: i.name,
          date: i.close_approach_data[0].close_approach_date,
          distanceInKm: parseInt(i.close_approach_data[0].miss_distance.kilometers),
          distanceToMoons: parseInt(i.close_approach_data[0].miss_distance.lunar),
          size: parseInt(
            i.estimated_diameter.meters.estimated_diameter_min +
              i.estimated_diameter.meters.estimated_diameter_max / 2
          ),
          isDangerous: i.is_potentially_hazardous_asteroid,
        });
      });
    });

    return { props: { asteroids } };
  } catch (error) {
    return { props: { asteroids: [] } };
  }
};
