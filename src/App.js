import Navigation from './components/Nav/Nav.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        {/* <Route exact path='/' component={Main} />
        <Route exact path='/' component={Portfolio} />
        <Route exact path='/' component={Contact} /> */}
      </div>
    </Router>
  );
}

export default App;
