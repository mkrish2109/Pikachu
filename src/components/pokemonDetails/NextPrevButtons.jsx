import React from "react";

function NextPrevButtons(props) {
  const { number, setName } = props;
  return (
    <div className="flex justify-content-around px-16 py-4 ">
      <button
        className="bg-blue-700 w-32 max-sm:w-20"
        title="Previous"
        onClick={() => {
          if (number > 1) {
            setName(number - 1);
          } else {
            setName(1025);
          }
        }}>
        <i className="fa-solid fa-chevron-left" style={{ padding: "8px" }}></i>
        Previous
      </button>
      <button
        className="bg-red-600  w-32 max-sm:w-20"
        title="Next"
        onClick={() => {
          if (number < 1025) {
            setName(number + 1);
          } else {
            setName(1);
          }
        }}>
        Next
        <i className="fa-solid fa-chevron-right" style={{ padding: "8px" }}></i>
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
