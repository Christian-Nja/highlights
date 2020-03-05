import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { MainPage } from "./components/templates/MainPage";

import "./css/main.css";

ReactDOM.render(<MainPage />, document.getElementById("reactBody"));
