import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListfilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListfilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
