import React from "react";
import DetailsTable from "./DetailsTable";

function Details(props) {
  const { description, height, weight, abilities } = props;
  return (
    <div className="grid grid-rows-2">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum,
        quae culpa rerum sequi consequuntur hic nostrum illo temporibus quam
        unde vitae impedit inventore corporis ipsam veritatis tempore saepe
        praesentium.
      </p>
      <DetailsTable height={height} weight={weight} abilities={abilities} />
    </div>
  );
}

export default Details;
