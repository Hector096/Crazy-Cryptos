import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Crypto from './Crypto';

function App() {
  return (
    <div className="bg-light">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:crypto" component={Crypto} />
      </Switch>
    </div>
  );
}

export default App;
