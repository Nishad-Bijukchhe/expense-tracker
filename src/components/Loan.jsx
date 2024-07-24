import React from "react";

const Loan = ({
  setLoanAmount,
  setLoanCategory,
  loanSubmitHandler,
}) => {
  return (
    <React.Fragment>
      <div className="loan">
        <label className="form-label">Loan</label>
        <form onSubmit={loanSubmitHandler}>
          <input
            type="number"
            id="loan"
            placeholder="Enter your loan amount"
            className="form-control"
            onChange={(e) => setLoanAmount(e.target.value)}
          ></input>
          <select
            name="loan-type"
            onChange={(e) => setLoanCategory(e.target.value)}
          >
            <option value="house">House Loan</option>
            <option value="car">Car Loan</option>
            <option value="business">Business Loan</option>
          </select>
          <button type="submit" className="btn btn-primary">
            Enter
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Loan;
