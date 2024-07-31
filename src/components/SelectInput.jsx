import React from "react";

const SelectInput = ({ options, updateFunction }) => {
  return (
    <select
      className="btn btn-default m-2"
      name="input"
      onChange={(e) => {
        updateFunction(e.target.value);
      }}
    >
      {Object.entries(options).map((option, index) => (
        <option value={option[0]} key={index}>
          {option[1]}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
