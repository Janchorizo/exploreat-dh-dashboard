import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import SourceSelector from './SourceSelector';
import EntitySelector from './EntitySelector';
import Home from './Home';
import Explorer from './Explorer';

const App = (props) => {
  return (
    <Router>
      <div id="app">
        <div id="header">
          <div>
            <div>
              <a href="https://www.oeaw.ac.at/acdh/projects/exploreat/" target="blank"><img src="/public/square_logo.png"></img></a>
              <h3>Novel interactive visual tools for non-standard dictionaries</h3>
            </div>
            <div id="links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/sources">Explorer</NavLink>
            </div>
          </div>
        </div>

        <div className="content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/sources" component={SourceSelector}/>
            <Route exact path="/explorer/ontology/:ontology/prefix/:prefix/sparql/:sparql" component={EntitySelector}/>
            <Route exact path="/explorer/ontology/:ontology/prefix/:prefix/sparql/:sparql/entities" component={EntitySelector}/>
            <Route exact path="/explorer/ontology/:ontology/prefix/:prefix/sparql/:sparql/entities/:entities" component={Explorer}/>
            <Route component={Home}/>
          </Switch>
        </div>

        <div id="footer">
          This would be the footer
        </div>
        
      </div>
    </Router>
  
  );
};

export default hot(module)(App)