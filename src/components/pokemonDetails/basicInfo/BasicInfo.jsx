import React from "react";
import Title from "./Title";
import Image from "./Image";
import Details from "./Details";

function BasicInfo({ data }) {
  if (!data) return null;

  const {
    id,
    name,
    sprites: {
      other: {
        "official-artwork": { front_default },
      },
    },
    height,
    weight,
    abilities,
  } = data;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <Title id={id} name={name} />
      <div className="grid grid-cols-2 px-[50px] md:grid-cols-2 max-sm:grid-cols-1">
        <Image name={name} img={front_default} />
        <Details height={height} weight={weight} abilities={abilities} />
      </div>
    </div>
  );
}

export default BasicInfo;
