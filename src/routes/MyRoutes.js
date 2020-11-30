import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.scss";
// import components
import Header from "../component/Header";
import AllPosts from "../component/Pagination/AllPosts";
// import Pages
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
// import Main from "../pages/Main";
import StarBucksLanding from "../component/StartBucksLanding/StartBugs";
import SearchList from "../component/SearchList/SearchList";
import TopScrollBar from "../component/TopScrollbar/TopScrollBar";
import CallbackMemo from "../component/Callback_memo/CallbackMemo";

export function slowImport(value, ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

// imports with Code-Spliting
const Main = React.lazy(() => slowImport(import("../pages/Main"), 2000));

const MyRoutes = () => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Switch>
          <Route
            exact
            path='/main'
            render={() => (
              <Suspense fallback={<div>Loadding...</div>}>
                <Main />
              </Suspense>
            )}
          />
          <Route exact path='/' component={PageOne} />
          {/* <Route exact path='/main' component={Main} /> */}
          <Route exact path='/pages/two' component={PageTwo} />
          <Route exact path='/pages/allposts' component={AllPosts} />
          <Route exact path='/pages/startbucks' component={StarBucksLanding} />
          <Route exact path='/pages/search-list' component={SearchList} />
          <Route exact path='/pages/top-scroll-bar' component={TopScrollBar} />
          <Route exact path='/pages/callback-memo' component={CallbackMemo} />
        </Switch>
      </div>
    </Router>
  );
};

export default MyRoutes;
