import React from "react";
import { Link } from "react-router-dom";

function Button({ children, type, onClick, disabled, to }) {
  const base =
    "inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  // const base =
  //   "inline-block rounded-full bg-yellow-400 px-4 py-2 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:py-2";

  const style = {
    primary: base + " px-4 py-2 sm:py-2",
    small: base + "  px-3 py-1 sm:py-3 sm:px-2 text-xs ",
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
