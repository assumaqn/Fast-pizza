import React from "react";
import { Link } from "react-router-dom";

function Button({ children, type, onClick, disabled, to }) {
  const base =
    "inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const style = {
    primary: base + " px-4 py-2 sm:py-2",
    small: base + "  px-4 py-2 md:py-2.5 md:px-5 text-xs ",
    secondary:
      "inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-2",
  };

  if (to)
    return (
      <Link className={style[type]} to={to}>
        Order pizzas
      </Link>
    );
  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;
