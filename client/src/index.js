import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./redux/reducers";
import mySaga from "./redux/sagas";
import App from "./App";
import "antd/dist/antd.min.css";
import GlobalStyles from "@/components/GlobalStyles/GlobalStyles";
import "@/components/GlobalStyles/AntdFix.css";
import AuthContextProvider from "./contexts/AuthContext";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
ReactDOM.render(
  <Provider store={store}>
<AuthContextProvider>
      <GlobalStyles>
        <App />
      </GlobalStyles>
</AuthContextProvider>
  </Provider>,
  document.getElementById("root")
);
