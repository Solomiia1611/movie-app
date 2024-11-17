import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Головна</Link></li>
        <li><Link to="/add">Додати фільм</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
