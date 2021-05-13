import './App.css';
import Home from './pages/home'
import Me from './pages/me'
import { Route, Switch} from 'react-router-dom'
import Menu from './components/header/header'
import Why from './pages/why'

function App() {
  return (
    <div className="App">
      <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/who" component={Me} />
          <Route path="/why" component={Why} />
        </Switch>
    </div>
  );
}

export default App;
