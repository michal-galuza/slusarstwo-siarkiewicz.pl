import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./views/Home/Home";
import Galery from "./views/galery/Galery";
import Contact from "./views/contact/Contact";
import About from "./views/about/About";
const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/galeria" component={Galery} />
    <Route path="/kontakt" component={Contact} />
    <Route path="/o-nas" component={About} />
  </Switch>
);
export default Routes;
