import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";

import "./stylesheets/main.scss";

import Parking from './components/parking'

// render the main component
ReactDOM.render(
    <Parking></Parking>,
    document.getElementById('app')
);
