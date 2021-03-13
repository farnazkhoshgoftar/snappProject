import React from "react";
import { Route ,   BrowserRouter as Router, } from "react-router-dom";
import Home from '../pages/home';
import Blog from '../pages/Blog';

const Routes = () => {
  return (
    <Router>
        <Route exact path="/">
            <Home/>
        </Route>
        
        <Route path="/blog">
            <Blog/>
        </Route>
    </Router>
  );
};

export default Routes;
