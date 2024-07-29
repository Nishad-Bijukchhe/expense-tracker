import React from "react";

const SelectTransaction = ({ mappingData, updateFunction }) => {
  const mappingDataValues = Object.values(mappingData);
  const dataList = mappingDataValues.map((item) => {
    return (
      <option value={item} key={item}>
        {item}
      </option>
    );
  });
  updateFunction(mappingDataValues[0]);

  return (
    <select
      className="btn btn-primary m-2"
      name="input"
      onChange={(e) => {
        updateFunction(e.target.value);
      }}
    >
      {dataList}
    </select>
  );
};

export default SelectTransaction;
