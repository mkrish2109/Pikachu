import React from "react";

function PaginationButons(props) {
  function handleNextClick() {
    props.setPage((p) => {
      return ++p;
    });
  }
  function handlePrevClick(p) {
    props.setPage((p) => {
      if (p > 0) {
        const page = --p;
        props.setPage(page);
      } else return 51;
    });
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 0 20px 0",
        gap: "5px",
      }}>
      <button
        style={{
          backgroundColor: "#78A083",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          color: "black",
        }}
        onClick={
          handlePrevClick
          // setPage(page);
        }>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <div style={{ display: "flex", gap: "5px" }}>
        <button
          style={{
            backgroundColor: "#50727B",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
            color: "black",
            borderRadius: "50%",
          }}
          onClick={
            handlePrevClick
            // setPage(page);
          }>
          {props.page}
        </button>
        <button
          style={{
            backgroundColor: "#50727B",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "50%",
            color: "black",
          }}
          onClick={handleNextClick}>
          {props.page + 1}
        </button>
      </div>
      <button
        style={{
          backgroundColor: "#78A083",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          color: "black",
        }}
        onClick={handleNextClick}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default PaginationButons;
