import React, { useState } from "react";
import Income from "./components/Income";
import Expense from "./components/Expense";
import Loan from "./components/Loan";
import LocalStorageTest from "./components/LocalStorageTest";
// import UserInput from "./components/UserInput";

const App = () => {
  //OBJECT FOR TOTAL BUDGET
  let totalBudget = 0;

  //OBJECT FOR HISTORY
  let history = { amount: 0, inputType: "", inputCategory: "" };

  //INCOME SUBMIT
  const incomeSubmitHandler = (e) => {
    e.preventDefault();
    history = {
      amount: e.target[0].value,
      inputType: "income",
      inputCategory: e.target[1].value,
    };
    localStorage.setItem(Math.random(), history);

    //RETRIVE TOTAL AMOUNT
    totalBudget = Number(localStorage.getItem("Total Budget Amount"));
    //ADD INCOME AMOUNT AND TOTAL AMOUNT
    totalBudget += history.amount;
    localStorage.setItem("Total Budget Amount", totalBudget);
  };

  //EXPENSE SUBMIT
  const expenseSubmitHandler = (e) => {
    e.preventDefault();
    //setTotalBudgetAmount(Number(totalBudgetAmount) - Number(expenseAmount));
  };

  //LOAN SUBMIT
  const loanSubmitHandler = (e) => {
    e.preventDefault();
    //setTotalBudgetAmount(Number(totalBudgetAmount) + Number(loanAmount));
  };

  return (
    <React.Fragment>
      {/* TOTAL BUDGET */}
      <div className="total-budget">
        <label>
          <h1>Total Budget is:</h1>
          Rs.0
        </label>
      </div>

      {/* USER INPUT */}
      {/* <UserInput /> */}

      <Income incomeSubmitHandler={incomeSubmitHandler} />

      <Expense expenseSubmitHandler={expenseSubmitHandler} />

      <Loan loanSubmitHandler={loanSubmitHandler} />

      {/* <LocalStorageTest /> */}
    </React.Fragment>
  );
};

export default App;
