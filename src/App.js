import './App.css';
import Home from "./componentes/Home/Home"; 
import PokemonDetails from "./componentes/Pokemon/Pokemondetails"
import {
  BrowserRouter as Router, 
  Switch,
  Route, 
} from "react-router-dom";
import Navbar from './componentes/Navbar/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path = "/details/:id" > 
        <PokemonDetails />
        </Route>
        <Route path = "/">
      <Navbar />
      <Home />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
