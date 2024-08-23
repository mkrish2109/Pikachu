import React from "react";
import Stats from "./Stats";
import Types from "./Types";

function MoreInfo(props) {
  // console.log(props);
  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1  gap-4 px-10 py-4">
      <Stats stats={props.stats} />
      <Types types={props.types} />
    </div>
  );
}

export default MoreInfo;
