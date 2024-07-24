import React from "react";

const UserInputCategory = ({ inputType }) => {
  return (
    <React.Fragment>
      {inputType}
      {/* USING SWITCH STATEMENT */}
      {() => {
        switch (inputType) {
          case "income":
            return (
              <select name="input-category">
                <option value="job">Job</option>
                <option value="rent">Rent</option>
                <option value="interest">Interest</option>
              </select>
            );
            break;

          case "expense":
            return (
              <select name="input-category">
                <option value="food">Food</option>
                <option value="rent">Rent</option>
                <option value="travel">Travel</option>
                <option value="loan">Loan</option>
              </select>
            );
            break;

          default:
            return (
              <select name="input-category">
                <option value="house-loan">House Loan</option>
                <option value="car-loan">Car Loan</option>
                <option value="business-loan">Business Loan</option>
              </select>
            );
            break;
        }
      }}

      {/* USING IF ELSE */}
      {() => {
        if (inputType === "income") {
          return (
            <select name="input-category">
              <option value="job">Job</option>
              <option value="rent">Rent</option>
              <option value="interest">Interest</option>
            </select>
          );
        } else if (inputType === "expense") {
          return (
            <select name="input-category">
              <option value="food">Food</option>
              <option value="rent">Rent</option>
              <option value="travel">Travel</option>
              <option value="loan">Loan</option>
            </select>
          );
        } else {
          return (
            <select name="input-category">
              <option value="house-loan">House Loan</option>
              <option value="car-loan">Car Loan</option>
              <option value="business-loan">Business Loan</option>
            </select>
          );
        }
      }}
      
    </React.Fragment>
  );
};

export default UserInputCategory;
