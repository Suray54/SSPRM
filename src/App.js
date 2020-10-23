import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./components/pages/about/about.components";
import Contact from "./components/pages/contact/contact.components";
import Homepage from "./components/pages/homepage/homepage.components";
import Portfolio from "./components/pages/portfolio/portfolio.components";
import Services from "./components/pages/services/services.components";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/SSPRM" component={Homepage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/services" component={Services} />
      </Switch>
    </div>
  );
}

export default App;
