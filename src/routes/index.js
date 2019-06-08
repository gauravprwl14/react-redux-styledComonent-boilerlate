import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

const routesConfig = [
    {
        path: "/",
        component: Home,
        name: "Landing"
    }
];

const AppRoutes = () => {
    return (
      <Router>
        <Switch>
          {routesConfig.map(config => {
                    return (
                      <Route
                        exact={config.exact || true}
                        key={`${config.name}`}
                        path={config.path}
                        render={props => {
                                const ComponentToRender = config.component;
                                return <ComponentToRender {...props} />;
                            }}
                      />
                    );
                })}
        </Switch>
      </Router>
    );
};

export default AppRoutes;
