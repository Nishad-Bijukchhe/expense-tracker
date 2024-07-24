import React, { useState } from "react";
import UserInputCategory from "./UserInputCategory";

const UserInput = () => {
  //INPUT TYPE STATE VARIABLE
  const [inputType, setInputType] = useState("income");

  //INPUT AMOUNT HANDLER
  const inputAmountHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  //INPUT TYPE HANDLER
  const inputTypeHandler = (e) => {
    e.preventDefault();
    setInputType(e.target.value);
  };

  return (
    <React.Fragment>
      {/* AMOUNT OF MONEY */}
      <form>
        <div>
          <label className="form-label">Amount</label>
        </div>
        <input
          className="form-control me-5 ms-1"
          type="number"
          placeholder="Enter amount of money"
          onChange={inputAmountHandler}
        />
        <select
          name="input-type"
          id="inputType"
          className="btn btn-warning"
          onChange={inputTypeHandler}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
          <option value="loan">Loan</option>
        </select>
      </form>
      <UserInputCategory inputType={inputType} />
    </React.Fragment>
  );
};

export default UserInput;
