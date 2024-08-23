import React from "react";

function Image({ img, name }) {
  return (
    <div>
      <img src={img} alt={name} />
    </div>
  );
}

export default Image;
