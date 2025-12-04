import React from "react";
import { formatCurrency } from "../../utiles/helpers";
import Button from "../../ui/Button";
import DeleteCart from "../../ui/DeleteCart";
import UpdateQuantity from "../../ui/UpdateQuantity";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-6">
        <p>{formatCurrency(totalPrice)}</p>
        <UpdateQuantity id={pizzaId} />
        <DeleteCart pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
