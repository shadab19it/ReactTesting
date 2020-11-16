import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.scss";
// import components
import Header from "../component/Header";
// import Pages
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import Main from "../pages/Main";

const MyRoutes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/pages/one' component={PageOne} />
        <Route exact path='/pages/two' component={PageTwo} />
      </Switch>
    </Router>
  );
};

export default MyRoutes;
