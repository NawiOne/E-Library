import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Sign from "./pages/Sign";
// import Login from "./components/Login";
import App from './App';
import {Provider} from 'react-redux';
import * as serviceWorker from "./serviceWorker";
import reduxStore from './redux/store';

const AppRedux = () => {
  return(
    <Provider store={reduxStore}>
    <App/>
  </Provider>
  )
  
}


ReactDOM.render(
  <React.StrictMode>
    <AppRedux/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
