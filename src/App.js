import './App.css';
import FilmsPage from './components/FilmsPage';
import FilmDetailsPage from './components/FilmDetailsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={FilmsPage}/>
          <Route exact path="/films/:id" component={FilmDetailsPage}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
