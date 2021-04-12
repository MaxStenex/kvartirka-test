import React, { useContext } from "react";
import { Destroy } from "../components/destroy-cart/Destroy";
import { Asteroids } from "../components/shared/Asteroids";
import { Header } from "../components/shared/Header";
import { DestroyCartContext } from "../state/destroyCart/context";

const DestroyCartPage = () => {
  const { destroyCartState } = useContext(DestroyCartContext);

  return (
    <>
      <Header />
      <div className="destroy-cart">
        <Asteroids items={destroyCartState.asteroids} />
        <Destroy isDisabled={destroyCartState.asteroids.length === 0} />
      </div>
    </>
  );
};

export default DestroyCartPage;
