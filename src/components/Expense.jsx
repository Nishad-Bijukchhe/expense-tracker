import React from "react";

const Expense = ({
  expenseSubmitHandler,
}) => {
  return (
    <React.Fragment>
      <div className="expense mb-4">
        <label className="form-label">Expense</label>
        <form onSubmit={expenseSubmitHandler}>
          <input
            type="number"
            id="expense"
            placeholder="Enter your expense"
            className="form-control"
          ></input>
          <select
            name="expense-type"
          >
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="travel">Travel</option>
            <option value="loan">Loan</option>
          </select>
          <button type="submit" className="btn btn-primary">
            Enter
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Expense;
