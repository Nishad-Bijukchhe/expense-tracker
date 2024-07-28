import React, { useState } from "react";
import UserInputCategory from "./UserInputCategory";
import inputTypes from "../constants/inputTypes";
import { inputCategoriesOfIncome } from "../constants/inputCategories";

const UserInput = ({ setTotalBudgetAmount }) => {
  //INPUT TYPE STATE VARIABLE
  const [inputType, setInputType] = useState("income");

  //INPUT CATEGORY STATE VARIABLE
  const [inputCategory, setInputCategory] = useState("job");

  //HISTORY OBJECT

  //TRANSACTION SUBMIT || FORM SUBMISSION
  const transactionSubmitHandler = (e) => {
    e.preventDefault();

    //TESTING CONSTANTS
    console.log("inputTypes: ", inputTypes);
    console.log("inputCategoriesOfIncome: ", inputCategoriesOfIncome);

    //INPUT DATA
    let history = {
      amount: e.target[0].value,
      inputType: e.target[1].value,
      inputCategory: inputCategory,
    };

    //ADD DATA TO LOCALSTORAGE
    localStorage.setItem(Math.random(), JSON.stringify(history));

    //GET AND UPDATE TOTAL BUDGET
    let totalBudget = Number(localStorage.getItem("Total Budget Amount"));
    if (history.inputType === "income" || history.inputType === "loan") {
      totalBudget += Number(history.amount);
      localStorage.setItem("Total Budget Amount", totalBudget);
      setTotalBudgetAmount(totalBudget);
    } else {
      totalBudget -= Number(history.amount);
      localStorage.setItem("Total Budget Amount", totalBudget);
      setTotalBudgetAmount(totalBudget);
    }
  };

  return (
    <React.Fragment>
      {/* AMOUNT OF MONEY */}
      <form className="m-2" onSubmit={transactionSubmitHandler}>
        <div>
          <label className="form-label">Amount</label>
        </div>

        <div>
          <input
            className="form-control me-5 ms-1 mb-2"
            type="number"
            placeholder="Enter amount of money"
          />
        </div>
        <label className="form-label">Transaction Type</label>
        <div className="mb-2">
          <select
            name="input-type"
            id="inputType"
            className="btn btn-primary"
            onChange={(e) => {
              setInputType(e.target.value);
              if (e.target.value === "expense") {
                setInputCategory("food");
              } else {
                setInputCategory("house-loan");
              }
            }}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
            <option value="loan">Loan</option>
          </select>
        </div>
        <label className="form-label">Transaction Category</label>
        <div>
          <UserInputCategory
            inputType={inputType}
            setInputCategory={setInputCategory}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default UserInput;
