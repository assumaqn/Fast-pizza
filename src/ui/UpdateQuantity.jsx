import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import React from "react";
import {
  decreaseItem,
  getCurrentQuantityById,
  increaseItem,
} from "../features/cart/cartSlice";
function UpdateQuantity({ id }) {
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <Button type="round" onClick={() => dispatch(increaseItem(id))}>
        +
      </Button>
      <span>{currentQuantity}</span>

      <Button type="round" onClick={() => dispatch(decreaseItem(id))}>
        -
      </Button>
    </div>
  );
}

export default UpdateQuantity;
