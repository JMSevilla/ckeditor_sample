import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom'
import RouteHelper from "./router/routehelper.js"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <HashRouter>
    <RouteHelper />
  </HashRouter>,
 document.getElementById("root")
)
