import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  const activeStyle = { boxShadow: "0px 0px 10px #fbbf24" };

  return (
    <header>
      <h1>Minido</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/create" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              New Note
            </NavLink>
          </li>
          <li>
            <NavLink to="/todo" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Todos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
