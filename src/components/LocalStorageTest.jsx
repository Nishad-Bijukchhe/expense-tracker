import React from "react";

const LocalStorageTest = () => {
  return (
    <React.Fragment>
      <div>
        <button
          className="btn btn-success"
          onClick={() => {
            localStorage.setItem("Total Budget Amount", 0);
          }}
        >
          Initiate Total Amount in localStorage
        </button>

        <button
          className="btn btn-warning"
          onClick={() => {
            localStorage.clear();
          }}
        >
          Clear Local Storage
        </button>
      </div>
    </React.Fragment>
  );
};

export default LocalStorageTest;
