import React from "react";
import ReactDOM from "react-dom";
import AppBootUp from "./AppBootUp.test";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AppBootUp />, div);
    ReactDOM.unmountComponentAtNode(div);
});
