import { Profiler } from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Setting from "./Setting";
import Signup from "./Signup";
import SinglePost from "./SinglePost";
function App(props) {
  return (
    <>
      <Header />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/singlepost">
        <SinglePost />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/settings">
        <Setting />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </>
  );
}

export default App;
