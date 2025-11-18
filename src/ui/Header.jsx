import { Link } from "react-router-dom";
import React from "react";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Kumneger G</p>
    </header>
  );
}

export default Header;
