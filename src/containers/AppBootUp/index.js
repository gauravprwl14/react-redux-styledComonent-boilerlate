import React from "react";
import { Provider } from "react-redux";
import AppRoutes from "../../routes";
import reduxStore from "../../store/index";
import "./styles.scss";

function AppBootUp() {
    return (
        <div className="app-container">
            <Provider store={reduxStore}>
                <AppRoutes />
            </Provider>
        </div>
    );
}

export default AppBootUp;
