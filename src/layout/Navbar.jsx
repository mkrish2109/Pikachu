import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    { name: "Home", to: "/" },
    { name: "Pokedex", to: "/pokedex" },
  ];

  return (
    <div className="flex justify-between items-center px-8 py-4 bg-[#78a083] text-white">
      <div>
        <Link to="/">
          <h1 className="text-xl font-bold tracking-wide">Pokedex</h1>
        </Link>
      </div>
      <ul className="flex m-0 p-0 list-none gap-4 cursor-pointer">
        {links.map((value) => {
          return (
            <li className="list-none text-lg font-semibold hover:text-[#2d3e47]">
              <Link to={value.to}>{value.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
