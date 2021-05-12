import './App.css';
import Home from './pages/home'
import Me from './pages/me'
import { Route, Switch} from 'react-router-dom'
import Menu from './components/header/header'

function App() {
  return (
    <div className="App">
      <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/who" component={Me} />
        </Switch>
    </div>
  );
}

export default App;
