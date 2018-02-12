import React from "react";
import ReactDOM from "react-dom";
import DeeDo from "./DeeDo";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<DeeDo />, document.getElementById("root"));
registerServiceWorker();
