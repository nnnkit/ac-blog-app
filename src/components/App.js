import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
function App(props) {
  return (
    <>
      <Header />
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
    </>
  );
}

export default App;
