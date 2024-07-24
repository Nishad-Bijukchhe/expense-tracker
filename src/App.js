import React, { useState } from "react";
import Income from "./components/Income";
import Expense from "./components/Expense";
import Loan from "./components/Loan";
import UserInput from "./components/UserInput";

const App = () => {
  //STATE VARAIBLE FOR TOTAL BUDGET
  const [totalBudgetAmount, setTotalBudgetAmount] = useState(0);

  //STATE VARIABLE FOR INCOME
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [incomeCategory, setIncomeCategory] = useState("job");

  //STATE VARIABLE FOR EXPENSE
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [expenseCategory, setExpenseCategory] = useState("food");

  //STATE VARIABLE FOR LOAN
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanCategory, setLoanCategory] = useState("house");

  //INCOME SUBMIT
  const incomeSubmitHandler = (e) => {
    e.preventDefault();
    setTotalBudgetAmount(Number(totalBudgetAmount) + Number(incomeAmount));
  };

  //EXPENSE SUBMIT
  const expenseSubmitHandler = (e) => {
    e.preventDefault();
    setTotalBudgetAmount(Number(totalBudgetAmount) - Number(expenseAmount));
  };

  //LOAN SUBMIT
  const loanSubmitHandler = (e) => {
    e.preventDefault();
    setTotalBudgetAmount(Number(totalBudgetAmount) + Number(loanAmount));
  };

  return (
    <React.Fragment>
      {/* TOTAL BUDGET */}
      <div className="total-budget">
        <label>
          <h1>Total Budget is:</h1>
          Rs.{totalBudgetAmount}
        </label>
      </div>

      {/* USER INPUT */}
      <UserInput />
      

      {/* <Income
        setIncomeAmount={setIncomeAmount}
        setIncomeCategory={setIncomeCategory}
        incomeSubmitHandler={incomeSubmitHandler}
      /> 

      <Expense
        setExpenseAmount={setExpenseAmount}
        setExpenseCategory={setExpenseCategory}
        expenseSubmitHandler={expenseSubmitHandler}
      />

      <Loan
        setLoanAmount={setLoanAmount}
        setLoanCategory={setLoanCategory}
        loanSubmitHandler={loanSubmitHandler}
      />*/}
    </React.Fragment>
  );
};

export default App;
