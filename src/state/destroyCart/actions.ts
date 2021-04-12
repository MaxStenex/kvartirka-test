import { AsteroidType } from "../../types";

export enum DestroyCartActions {
  ADD_IN_CART = "ADD_IN_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  CALL_BRUCE = "CALL_BRUCE",
}

export type DestroyCartActionTypes =
  | AddInCartActionType
  | RemoveFromCartActionType
  | CallBruceActionType;

type AddInCartActionType = {
  type: DestroyCartActions.ADD_IN_CART;
  payload: {
    asteroid: AsteroidType;
  };
};

export const addInCart = (asteroid: AsteroidType): AddInCartActionType => ({
  type: DestroyCartActions.ADD_IN_CART,
  payload: {
    asteroid,
  },
});

type RemoveFromCartActionType = {
  type: DestroyCartActions.REMOVE_FROM_CART;
  payload: {
    asteroidId: number;
  };
};

export const removeFromCart = (asteroidId: number): RemoveFromCartActionType => ({
  type: DestroyCartActions.REMOVE_FROM_CART,
  payload: {
    asteroidId,
  },
});

type CallBruceActionType = {
  type: DestroyCartActions.CALL_BRUCE;
};

export const callBruce = (): CallBruceActionType => ({
  type: DestroyCartActions.CALL_BRUCE,
});
