import Navigation from './components/Nav/Nav.js';
import Footer from './components/Footer/Footer.js';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/pages/Main/Main';
import Portfolio from './components/pages/Portfolio/Portfolio';
import './App.min.css';

function App() {
  return (
    <div>
      <Navigation />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='#/portfolio' component={Portfolio} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;