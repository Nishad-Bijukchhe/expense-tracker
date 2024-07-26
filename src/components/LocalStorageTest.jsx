import React from "react";

const LocalStorageTest = () => {
  //FORM DATA OBJECT
  let formData = {};

  //FORM HANDLER | SAVE FORM DATA
  const saveData = (e) => {
    e.preventDefault();
    formData = { number: e.target[0].value, name: e.target[1].value };
    localStorage.setItem(123, JSON.stringify(formData));
    console.log(formData);
  };

  //SHOW LOCAL DATA
  const showLocalData = () => {
    console.log(JSON.parse(localStorage.getItem(123)));
  };

  return (
    <React.Fragment>
      {/* <form className="form mt-4" onSubmit={saveData}>
        <label htmlFor="input" className="form-label">
          Number
        </label>
        <input
          type="number"
          className="form form-control"
          placeholder="Enter any number"
        />
        <label htmlFor="input" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form form-control"
          placeholder="Enter any name"
        />
        <button className="btn btn-primary" type="submit">
          Store locally
        </button>
      </form> */}
      {/* <button className="btn btn-danger" onClick={showLocalData}>
        Show Local Data
      </button> */}

      <div>
        <button
          className="btn btn-success"
          onClick={() => {
            localStorage.setItem("Total Budget Amount", 0);
          }}
        >
          Initiate Total Amount in localStorage
        </button>

        <button className="btn btn-warning">Clear Local Storage</button>
      </div>
    </React.Fragment>
  );
};

export default LocalStorageTest;
