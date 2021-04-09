import { Filters } from "../components/home/Filters";
import { Asteroids } from "../components/shared/Asteroids";
import { Footer } from "../components/shared/Footer";
import { Header } from "../components/shared/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Filters />
      <Asteroids />
      <Footer />
    </>
  );
}
