import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { zuzuCountReducer, zuzuReducer } from "./redux/zuzuReduser";

const root = ReactDOM.createRoot(document.getElementById("root"));

const allReducers = combineReducers({ zuzuData: zuzuReducer });

const store = createStore(allReducers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
