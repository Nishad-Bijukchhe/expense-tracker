import React, { useState } from "react";
import Income from "./components/Income";
import Expense from "./components/Expense";
import Loan from "./components/Loan";
import LocalStorageTest from "./components/LocalStorageTest";
import History from "./components/History";
// import UserInput from "./components/UserInput";

const App = () => {
  //STATE FOR TOTAL BUDGET
  const [totalBudgetAmount, setTotalBudgetAmount] = useState(
    Number(localStorage.getItem("Total Budget Amount"))
  );
  //GET ALL LOCAL-STORAGE ITEMS
  let itemsInLocalStorage = { ...localStorage };

  //VARIABLE FOR TOTAL BUDGET
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
    localStorage.setItem(Math.random() , JSON.stringify(history));

    //RETRIVE TOTAL AMOUNT
    totalBudget = Number(localStorage.getItem("Total Budget Amount"));
    //ADD INCOME AMOUNT AND TOTAL AMOUNT
    totalBudget += Number(history.amount);
    localStorage.setItem("Total Budget Amount", totalBudget);
    setTotalBudgetAmount(totalBudget);
  };

  //EXPENSE SUBMIT
  const expenseSubmitHandler = (e) => {
    e.preventDefault();
    history = {
      amount: e.target[0].value,
      inputType: "expense",
      inputCategory: e.target[1].value,
    };
    localStorage.setItem(Math.random(), JSON.stringify(history));

    //RETRIVE TOTAL AMOUNT
    totalBudget = Number(localStorage.getItem("Total Budget Amount"));
    //SUBTRACT EXPENSE AMOUNT FROM TOTAL AMOUNT
    totalBudget -= Number(history.amount);
    localStorage.setItem("Total Budget Amount", totalBudget);
    setTotalBudgetAmount(totalBudget);
  };

  //LOAN SUBMIT
  const loanSubmitHandler = (e) => {
    e.preventDefault();
    history = {
      amount: e.target[0].value,
      inputType: "loan",
      inputCategory: e.target[1].value,
    };
    localStorage.setItem(Math.random(), JSON.stringify(history));

    //RETRIVE TOTAL AMOUNT
    totalBudget = Number(localStorage.getItem("Total Budget Amount"));
    //ADD INCOME AMOUNT AND TOTAL AMOUNT
    totalBudget += Number(history.amount);
    localStorage.setItem("Total Budget Amount", totalBudget);
    setTotalBudgetAmount(totalBudget);
  };

  return (
    <React.Fragment>
      {/* TOTAL BUDGET */}
      <div className="total-budget">
        <label>
          <h1>Total Budget is: Rs.{totalBudgetAmount}</h1>
        </label>
      </div>

      {/* USER INPUT */}
      {/* <UserInput /> */}

      <Income incomeSubmitHandler={incomeSubmitHandler} />

      <Expense expenseSubmitHandler={expenseSubmitHandler} />

      <Loan loanSubmitHandler={loanSubmitHandler} />

      {/* <LocalStorageTest /> */}

      {/* HISTORY OF TRANSACTIONS */}
      <History itemsInLocalStorage={itemsInLocalStorage} />
    </React.Fragment>
  );
};

export default App;
