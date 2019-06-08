import React from "react";
import { Provider } from "react-redux";
import AppRoutes from "../../routes";
import reduxStore from "../../store/index";

function AppBootUp() {
    return (
      <div className="App">
        <Provider store={reduxStore}>
          <AppRoutes />
        </Provider>
      </div>
    );
}

export default AppBootUp;
