import React from "react";

function Title(props) {
  const { name, id } = props;
  return (
    <div>
      <h2 className="flex gap-4 justify-center text-capitalize text-2xl font-semibold">
        <span>#{id}</span>
        <span>{name}</span>
      </h2>
    </div>
  );
}

export default Title;
