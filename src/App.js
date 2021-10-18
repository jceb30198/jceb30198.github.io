import Navigation from './components/Nav/Nav.js';
import Footer from './components/Footer/Footer.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/pages/Main/Main';
import Portfolio from './components/pages/Portfolio/Portfolio';
import './App.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path='/' component={Main} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;