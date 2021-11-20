import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="bg-light">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:crypto" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
