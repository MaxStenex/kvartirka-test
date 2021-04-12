import { createContext } from "react";
import { DestroyCartActionTypes } from "./actions";
import { DestroyCartStateType, destroyCartInitialState } from "./reducer";

type DestroyCartContextType = {
  destroyCartState: DestroyCartStateType;
  destroyCartDispatch: (action: DestroyCartActionTypes) => void;
};

export const DestroyCartContext = createContext<DestroyCartContextType>({
  destroyCartState: destroyCartInitialState,
  destroyCartDispatch: () => null,
});
