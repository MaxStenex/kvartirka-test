import React, { useContext } from "react";
import { callBruce } from "../../state/destroyCart/actions";
import { DestroyCartContext } from "../../state/destroyCart/context";

type Props = {
  isDisabled: boolean;
};

export const Destroy: React.FC<Props> = ({ isDisabled }) => {
  const { destroyCartDispatch } = useContext(DestroyCartContext);
  const onBruceButtonClick = () => {
    destroyCartDispatch(callBruce());
    alert("Бригада Брюса вылетает спасать планету!");
  };

  return (
    <div className="destroy-cart__destroy">
      <div className="container">
        <button
          onClick={onBruceButtonClick}
          disabled={isDisabled}
          className="destroy-cart__bruce-btn"
        >
          Вызвать Брюса Уиллиса
        </button>
      </div>
    </div>
  );
};
