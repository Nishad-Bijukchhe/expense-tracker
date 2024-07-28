import React from "react";

const UserInputCategory = ({ inputType, setInputCategory }) => {
  if (inputType === "income") {
    return (
      <select
        className="btn btn-primary"
        name="input-category"
        onChange={(e) => {
          setInputCategory(e.target.value);
        }}
      >
        <option value="job">Job</option>
        <option value="rent">Rent</option>
        <option value="interest">Interest</option>
      </select>
    );
  } else if (inputType === "expense") {
    return (
      <select
        className="btn btn-primary"
        name="input-category"
        onChange={(e) => {
          setInputCategory(e.target.value);
        }}
      >
        <option value="food">Food</option>
        <option value="rent">Rent</option>
        <option value="travel">Travel</option>
        <option value="loan">Loan</option>
      </select>
    );
  } else {
    return (
      <select
        className="btn btn-primary"
        name="input-category"
        onChange={(e) => {
          setInputCategory(e.target.value);
        }}
      >
        <option value="house-loan">House Loan</option>
        <option value="car-loan">Car Loan</option>
        <option value="business-loan">Business Loan</option>
      </select>
    );
  }
};

export default UserInputCategory;
