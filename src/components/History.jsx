import React from "react";

const History = ({ itemsInLocalStorage }) => {
  let historyObject = {};
  let allKeys = Object.keys(itemsInLocalStorage);
  let validKeys = allKeys.filter((x) => {
    return x !== "Total Budget Amount";
  });
  return (
    <React.Fragment>
      <table className="table table-secondary">
        <thead>
          <tr className="fw-bold table-primary">
            <td>Amount</td>
            <td>Type</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {validKeys.map((x) => {
            historyObject = JSON.parse(localStorage.getItem(x));
            return (
              <tr key={x}>
                <td>{parseInt(historyObject.amount).toLocaleString()}</td>
                <td>{historyObject.inputType}</td>
                <td>{historyObject.inputCategory}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default History;
