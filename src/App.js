
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Reports from './Reports';
import Product from './Product';
import Message from './Message';
import Team from './Team';
import Main from './Main';



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <Route exact path="/"><Main /></Route>
        <Route  path="/home"><Home /></Route>
        <Route path="/reports"><Reports /></Route>
        <Route path="/products"component={Product} ></Route>
        <Route path="/team" component={Team}></Route>
        <Route path="/messages" component={Message}></Route>
      </Switch>
      </Router>  
    </div>
  );
}

export default App;
