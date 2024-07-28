import React, { useState } from "react";
import History from "./components/History";
import UserInput from "./components/UserInput";
//import LocalStorageTest from "./components/LocalStorageTest";

const App = () => {
  //STATE FOR TOTAL BUDGET
  const [totalBudgetAmount, setTotalBudgetAmount] = useState(
    Number(localStorage.getItem("Total Budget Amount"))
  );

  //GET ALL LOCAL-STORAGE ITEMS
  let itemsInLocalStorage = { ...localStorage };

  return (
    <React.Fragment>
      {/* TOTAL BUDGET */}
      <div className="total-budget">
        <label>
          <h1>Total Budget is: Rs.{totalBudgetAmount}</h1>
        </label>
      </div>

      {/* USER INPUT */}
      <UserInput setTotalBudgetAmount={setTotalBudgetAmount} />

      {/* <LocalStorageTest /> */}

      {/* HISTORY OF TRANSACTIONS */}
      <History itemsInLocalStorage={itemsInLocalStorage} />
    </React.Fragment>
  );
};

export default App;
