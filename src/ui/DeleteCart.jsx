import { useDispatch } from "react-redux";
import React from "react";
import Button from "./Button";
import { deleteItem } from "../features/cart/cartSlice";

function DeleteCart({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteCart;
