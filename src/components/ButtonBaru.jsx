import React from "react";

const ButtonBaru = ({ handleClick, varian }) => {
  if (varian === "blue") {
    return (
      <>
        <button style={{ backgroundColor: varian }} onClick={handleClick}>
          Add
        </button>
      </>
    );
  } else if (varian === "red")
    return (
      <>
        <button style={{ backgroundColor: varian }} onClick={handleClick}>
          Add
        </button>
      </>
    );
};

export default ButtonBaru;
