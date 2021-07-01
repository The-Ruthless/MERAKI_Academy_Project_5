import React from "react";
import { Route } from "react-router-dom";

import './App.css'
import Header from "./components/header";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import Home from "./components/home";
import Advertisements from "./components/advertisements";
import Advertisement from "./components/advertisement";
import Profile from "./components/profile";
import Favorites from "./components/favorites";
import PlaceAdv from "./components/placeAdvertisement";
import Login from "./components/auth/login";
import Signup from "./components/auth/signUp";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Route path="/Home" render={() => <Home />} />
      <Home />
      <Route path="/advertisements" render={() => <Advertisements />} />
      <Route path="/advertisement" render={() => <Advertisement />} />
      <Route path="/Profile" render={() => <Profile />} />
      <Route path="/favorites" render={() => <Favorites />} />
      <Route path="/placeAdv" render={() => <PlaceAdv />} />
      <Route path="/login" render={() => <Login />} />
      <Route path="/signup" render={() => <Signup />} />
      <Footer />
    </div>
  );
};

export default App;
