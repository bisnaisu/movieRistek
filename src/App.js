import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar'
import Home from './pages/Home/Home'
import FrontPage from './pages/FrontPage/index'
import About from './pages/About'

function App() {
  return (
    <div className="App">
    <BrowserRouter>

    <Switch>
              <Route path="/" component={FrontPage} exact />
              <Route path="/about" component={About} />
              <Route path="/home" component={Home} />
      </Switch>

    </BrowserRouter>
      
    </div>
  );
}

export default App;
