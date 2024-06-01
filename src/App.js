import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppProvider } from "./context/AppContext";
import Budget from "./components/Budget";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";
import RemainingBudget from "./components/Remaining";
import { useState } from "react";

const App = () => {
    const [currencySelected, setCurrency] = useState("£");
    function handleCurrency(currency) {
        setCurrency(currency);
        console.log(currency);
    }

  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
            <div className="col-sm">
                <select onChange={e => handleCurrency(e.target.value)} id="selectCurrency" name="currency" style={{background: "#BCDB8F", borderRadius: "10px", color: "black"}}>
                    <option value="$">$ Dollar</option>
                    <option value="£" selected>£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
            </div>
          <div className="col-sm">
            <Budget currency={currencySelected}/>
          </div>
          <div className="col-sm">
            <RemainingBudget currency={currencySelected} />
          </div>
          <div className="col-sm">
            <ExpenseTotal currency={currencySelected} />
          </div>
        </div>
        <h3 className="mt-3">Allocation</h3>
        <div className="row ">
          <div className="col-sm">
            <ExpenseList currency={currencySelected} />
          </div>
        </div>
        <h3 className="mt-3">Change allocation</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AllocationForm currency={currencySelected}/>
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
