import Navigation from './components/Nav/Nav.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/pages/main/Main';
import Portfolio from './components/pages/portfolio/Portfolio';
import './App.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path='/' component={Main} />
        <Route exact path='/portfolio' component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;