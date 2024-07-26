import React from "react";

const History = ({ itemsInLocalStorage }) => {
  let historyObject = {};
  let allKeys = Object.keys(itemsInLocalStorage);
  // console.log("All keys are: ", allKeys);
  let validKeys = allKeys.filter((x) => {
    return x != "Total Budget Amount";
  });
  // console.log("Valid keys are: ", validKeys);
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <td>Amount</td>
            <td>Type</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>2000</td>
            <td>Income</td>
            <td>Job</td>
          </tr> */}
          {validKeys.map((x) => {
            historyObject = JSON.parse(localStorage.getItem(x));
            return (
              <tr key={x}>
                <td>{historyObject.amount}</td>
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
