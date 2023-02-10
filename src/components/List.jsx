import React from "react";

const List = ({ datas }) => {
  return (
    <>
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
