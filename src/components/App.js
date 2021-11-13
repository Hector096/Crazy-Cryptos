import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <div className="bg-light">
      <Header />
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
    </div>
  );
}

export default App;
