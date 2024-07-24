import React from "react";

const Income = ({
  setIncomeAmount,
  setIncomeCategory,
  incomeSubmitHandler,
}) => {
  return (
    <React.Fragment>
      <div className="income mt-4 mb-4">
        <label className="form-label">Income</label>
        <form onSubmit={incomeSubmitHandler}>
          <input
            type="number"
            id="income"
            placeholder="Enter your income"
            className="form-control"
            onChange={(e) => setIncomeAmount(e.target.value)}
          ></input>
          <select
            name="income-type"
            onChange={(e) => setIncomeCategory(e.target.value)}
          >
            <option value="job">Job</option>
            <option value="rent">Rent</option>
            <option value="interest">Interest</option>
          </select>
          <button className="btn btn-primary" type="submit">
            Enter
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Income;
