import React from "react";
import Stats from "./Stats";
import Types from "./Types";

function MoreInfo(props) {
  // console.log(props);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        padding: "16px 40px",
      }}>
      <Stats stats={props.stats} />
      <Types types={props.types} />
    </div>
  );
}

export default MoreInfo;
