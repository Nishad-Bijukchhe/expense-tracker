import React, { useState } from "react";
//import UserInputCategory from "./UserInputCategory";
import inputTypes from "../constants/inputTypes";
import {
  inputCategoriesOfIncome,
  inputCategoriesOfExpense,
  inputCategoriesOfLoan,
} from "../constants/inputCategories";
import SelectTransaction from "./SelectTransaction";

const UserInput = ({ setTotalBudgetAmount }) => {
  //INPUT TYPE STATE VARIABLE
  const [inputTransactionType, setInputTransactionType] = useState("Income");

  //INPUT CATEGORY STATE VARIABLE
  const [inputTransactionCategory, setInputTransactionCategory] =
    useState("Job");

  //TRANSACTION SUBMIT || FORM SUBMISSION
  const transactionSubmitHandler = (e) => {
    e.preventDefault();

    //INPUT DATA
    let history = {
      amount: e.target[0].value,
      inputType: e.target[1].value,
      inputCategory: inputTransactionCategory,
    };

    console.log(history);

    //ADD DATA TO LOCALSTORAGE
    // localStorage.setItem(Math.random(), JSON.stringify(history));

    //GET AND UPDATE TOTAL BUDGET
    // let totalBudget = Number(localStorage.getItem("Total Budget Amount"));
    // if (history.inputType === "Income" || history.inputType === "Loan") {
    //   totalBudget += Number(history.amount);
    //   localStorage.setItem("Total Budget Amount", totalBudget);
    //   setTotalBudgetAmount(totalBudget);
    // } else {
    //   totalBudget -= Number(history.amount);
    //   localStorage.setItem("Total Budget Amount", totalBudget);
    //   setTotalBudgetAmount(totalBudget);
    // }
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
          <SelectTransaction
            mappingData={inputTypes}
            updateFunction={setInputTransactionType}
          />
          <br />

          {inputTransactionType === "Income" ? (
            <SelectTransaction
              mappingData={inputCategoriesOfIncome}
              updateFunction={setInputTransactionCategory}
            />
          ) : inputTransactionType === "Expense" ? (
            <SelectTransaction
              mappingData={inputCategoriesOfExpense}
              updateFunction={setInputTransactionCategory}
            />
          ) : (
            <SelectTransaction
              mappingData={inputCategoriesOfLoan}
              updateFunction={setInputTransactionCategory}
            />
          )}
        </div>

        <div>
          {/* <UserInputCategory
            inputType={inputType}
            setInputCategory={setInputCategory}
          /> */}
        </div>
        <button type="submit" className="btn btn-primary mt-3 ms-2">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default UserInput;
