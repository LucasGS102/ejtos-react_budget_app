import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = (props) => {
  const { budget } = useContext(AppContext);
  const {expenses} = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0)
  
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    if(event.target.value > 20000) alert("The value cannot exceed 20000!")
    else if(event.target.value < totalExpenses) alert("The value cannot be less than the expenses!")
    else setNewBudget(event.target.value);
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget: {props.currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
