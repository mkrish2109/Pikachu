import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const ref = useRef();

  var ti = gsap.timeline();

  useGSAP(() => {
    ti.from("h1", {
      y: -100,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
    });
  });

  useGSAP(() => {
    ti.from("li", {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.3,
    });
  });

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
      <ul ref={ref} className="flex m-0 p-0 list-none gap-4 cursor-pointer">
        {links.map((value) => {
          return (
            <Link to={value.to}>
              <li className="list-none text-lg font-semibold hover:text-[#2d3e47]">
                {value.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
