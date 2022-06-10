import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import configStore from './redux/configureStore';
// import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <Provider store={configStore}>
  <App />
  //   </Provider>
);
