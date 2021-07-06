import React from 'react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages
import Recipes from './pages/Recipes';
import Dashboard from './pages/Dashboard';
import SingleRecipe from './pages/SingleRecipe';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header */}
        <SiteHeader />
        
        {/* Pages */}
        <Switch>
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/recipes/:uuid" component={SingleRecipe} />
        </Switch>
      </Router>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}

export default App;
