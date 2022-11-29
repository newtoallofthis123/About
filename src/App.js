import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home'
import About from './pages/about'
import Skills from './pages/skills'
import Projects from './pages/projects'
import Navbar from './pages/navBar';
import Lyka from './pages/lyka';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/About'>
          <Home />
        </Route>
        <Route path='/About/about'>
          <About />
        </Route>
        <Route path='/About/projects'>
          <Projects />
        </Route>
        <Route path='/About/skills'>
          <Skills />
        </Route>
        <Route path='/About/lyka'>
          <Lyka />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
