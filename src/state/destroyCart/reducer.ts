import { AsteroidType } from "../../types";
import { DestroyCartActions, DestroyCartActionTypes } from "./actions";

export type DestroyCartStateType = {
  asteroids: AsteroidType[];
};

export const destroyCartInitialState = {
  asteroids: [],
};

export const destroyCartReducer = (
  state = destroyCartInitialState,
  action: DestroyCartActionTypes
): DestroyCartStateType => {
  switch (action.type) {
    case DestroyCartActions.ADD_IN_CART: {
      return { ...state, asteroids: [...state.asteroids, action.payload.asteroid] };
    }
    case DestroyCartActions.REMOVE_FROM_CART: {
      return {
        ...state,
        asteroids: [...state.asteroids].filter(
          (ast) => ast.id !== action.payload.asteroidId
        ),
      };
    }
    case DestroyCartActions.CALL_BRUCE: {
      return { ...state, asteroids: [] };
    }

    default: {
      return state;
    }
  }
};
