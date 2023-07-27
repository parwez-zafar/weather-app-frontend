import { useEffect, Fragment } from 'react';
import './App.css';
import WebFont from "webfontloader";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Layout/Header';
import Login from './component/User/Login';
import Register from './component/User/Register';
import FavCity from './component/User/FavCity.js';
import Weather from './component/Weather/Weather.js'
import store from './store';
import { loadUser } from './actions/userAction';
import Convert from './component/Layout/Convert.js'

const App = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
  }, []);
  return (
    <Fragment>
      <Router>

        <Header />


        <Routes>
          <Route exact path="/" element={<Weather />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/fav-city" element={<FavCity />} />
          <Route exact path="/convert" element={<Convert />} />
        </Routes>

      </Router>
    </Fragment>
  )
}

export default App