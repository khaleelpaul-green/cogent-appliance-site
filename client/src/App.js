import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import Error from './pages/Error';
import Contact from './pages/Contact';
import Gallery from './pages/Gallary';
import Bio from './pages/Bio';

function App() {
  return (
    <Router>
      <div>
         <Switch>
          <Route exact path="/">
            <Header/>
            <Home />
          </Route>
          <Route path="/contact">
            <Header/>
            <Contact />
          </Route>
          <Route path="/gallery">
            <Header/>
            <Gallery />
          </Route>
          <Route path="/about">
            <Header/>
            <Bio/>
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
