import { useReducer } from "react";
import { DestroyCartContext } from "../state/destroyCart/context";
import {
  destroyCartInitialState,
  destroyCartReducer,
} from "../state/destroyCart/reducer";
import "../styles/_app.scss";

function MyApp({ Component, pageProps }) {
  const [destroyCartState, destroyCartDispatch] = useReducer(
    destroyCartReducer,
    destroyCartInitialState
  );

  return (
    <DestroyCartContext.Provider value={{ destroyCartState, destroyCartDispatch }}>
      <Component {...pageProps} />
    </DestroyCartContext.Provider>
  );
}

export default MyApp;
