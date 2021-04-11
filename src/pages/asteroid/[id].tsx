import { GetServerSidePropsContext } from "next";
import React from "react";
import { fetchAsteroidInfoById } from "../../api";
import { Approaches } from "../../components/asteroid/Approaches";
import { Asteroid } from "../../components/shared/Asteroids/Asteroid";
import { Header } from "../../components/shared/Header";
import { AsteroidType, CloseApproach } from "../../types";

type Props = {
  approaches: CloseApproach[];
  asteroidInfo: AsteroidType | null;
};

const AsteroidPage: React.FC<Props> = ({ asteroidInfo, approaches }) => {
  return (
    <>
      <Header />
      <div className="approaches">
        <div className="container">
          <Asteroid
            key={asteroidInfo.id}
            id={asteroidInfo.id}
            name={asteroidInfo.name}
            date={asteroidInfo.date}
            distanceInKm={asteroidInfo.distanceInKm}
            distanceToMoons={asteroidInfo.distanceToMoons}
            size={asteroidInfo.size}
            isDangerous={asteroidInfo.isDangerous}
          />
          <Approaches approaches={approaches} />
        </div>
      </div>
    </>
  );
};

export default AsteroidPage;

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext): Promise<{ props: Props }> => {
  try {
    const id: number = parseInt(params.id as string);
    const { data } = await fetchAsteroidInfoById(id);

    return {
      props: {
        asteroidInfo: {
          id: parseInt(data.id),
          name: data.name,
          size: parseInt(
            data.estimated_diameter.meters.estimated_diameter_min +
              data.estimated_diameter.meters.estimated_diameter_max / 2
          ),
          isDangerous: data.is_potentially_hazardous_asteroid,
        },
        approaches: data.close_approach_data.map((approach: any) => ({
          speed: parseInt(approach.relative_velocity.kilometers_per_hour),
          fullDate: approach.close_approach_date_full,
          distanceInKm: parseInt(approach.miss_distance.kilometers),
          orbitingBody: approach.orbiting_body,
        })),
      },
    };
  } catch (error) {
    return {
      props: {
        asteroidInfo: null,
        approaches: [],
      },
    };
  }
};
