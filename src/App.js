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
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/lyka'>
          <Lyka />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
