import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListfilters from "./ExpenseListFilters";

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListfilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
