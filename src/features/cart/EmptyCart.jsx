import LinkButton from "../../ui/LinkButton";
import React from "react";

function EmptyCart() {
  return (
    <div className="py-6">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-10 px-6 py-5 text-center font-bold text-stone-800">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
