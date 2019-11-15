import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import App from "./../App";
import Consultar from "./../Components/Consultar";
import Actualizar from "../Components/Actualizar";
import Home from "./../Components/Home";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/consultar" component={Consultar} />
      <Route exact path="/actualizar" component={Actualizar} />
    </Switch>
  </App>
);

export default AppRoutes;
