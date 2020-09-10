import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Category from './Category';
import Headphone from './Headphone';
import Tv from './Tv';
import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    //Will run only once when app component loads
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        //User logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        //User logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })

  }, [])

  return (
    <Router>
      <div className="app">

        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/headphone">
            <Header />
            <Headphone />
          </Route>

          <Route path="/television">
            <Header />
            <Tv />
          </Route>

          <Route path="/">
            <Header />
            {/* <Home /> */}
            <Category />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
