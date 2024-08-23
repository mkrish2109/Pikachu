import React from "react";

function NextPrevButtons(props) {
  const { number, setName } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        // gap: "16px",
        padding: "16px 64px",
      }}>
      <button
        style={{ background: "blue", width: "128px" }}
        title="Previous"
        onClick={() => {
          if (number > 1) {
            setName(number - 1);
          } else {
            setName(1025);
          }
        }}>
        <i class="fa-solid fa-chevron-left" style={{ padding: "8px" }}></i>
        Previous
      </button>
      <button
        style={{ background: "red", width: "128px" }}
        title="Next"
        onClick={() => {
          if (number < 1025) {
            setName(number + 1);
          } else {
            setName(1);
          }
        }}>
        Next
        <i class="fa-solid fa-chevron-right" style={{ padding: "8px" }}></i>
      </button>
    </div>
  );
}

export default NextPrevButtons;

// style={{ width: "200px" }}
//         onClick={() => {
//           if (number > 1) {
//             setName(number - 1);
//           } else {
//             setName(1025);
//           }
//         }}
// style={{ width: "200px" }}

// onClick={() => {
//   if (number < 1025) {
//     setName(number + 1);
//   } else {
//     setName(1);
//   }
// }}
