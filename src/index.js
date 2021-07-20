import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import "react-day-picker/lib/style.css";
import "./firebase/firebase";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

render(<p>Loading...</p>, document.getElementById("root"));

store.dispatch(startSetExpenses()).then(() => {
  render(jsx, document.getElementById("root"));
});
