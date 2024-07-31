import React, { useState } from "react";
import History from "./components/History";
import UserInput from "./components/UserInput";
import CommaSeperation from "./utils/CommaSeperation";
//import LocalStorageTest from "./components/LocalStorageTest";

const App = () => {
  //STATE FOR TOTAL BUDGET
  const [totalBudgetAmount, setTotalBudgetAmount] = useState(
    Number(localStorage.getItem("Total Budget Amount"))
  );

  //GET ALL LOCAL-STORAGE ITEMS
  let itemsInLocalStorage = { ...localStorage };

  return (
    <div className="bg-body-secondary">
      {/* TOTAL BUDGET */}
      <div className="total-budget h1 text-center">
        <label className="">Total Budget is: </label>
        <span className="">{CommaSeperation(totalBudgetAmount)}</span>
      </div>

      {/* USER INPUT */}
      <UserInput setTotalBudgetAmount={setTotalBudgetAmount} />

      {/* <LocalStorageTest /> */}

      {/* HISTORY OF TRANSACTIONS */}
      <History itemsInLocalStorage={itemsInLocalStorage} />
    </div>
  );
};

export default App;
