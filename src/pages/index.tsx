import { useState } from "react";
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
  const [filteredAsteroids, setFilteredAsteroids] = useState(
    Array.from(asteroids).splice(0, LIMIT)
  );

  return (
    <>
      <Header />
      <Filters />
      <Asteroids items={filteredAsteroids} />
      <Footer />
    </>
  );
};

export default Home;

export async function getServerSideProps(): Promise<{ props: Props }> {
  try {
    const { data } = await fetchAsteroidsInfo(new Date().toLocaleDateString());
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
}
