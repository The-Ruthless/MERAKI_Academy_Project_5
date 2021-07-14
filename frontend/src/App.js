import React, { useState } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import "./fontawosem";
import Header from "./components/header";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import Home from "./components/home";
import Advertisements from "./components/advertisements";
import Advertisement from "./components/advertisement";
import Profile from "./components/profile";
import Favorites from "./components/favorites";
import PlaceAdv from "./components/placeAdv/placeadv";
import Login from "./components/auth/login";
import Signup from "./components/auth/signUp";
// require("dotenv").config();

const App = () => {
  const [showType, setShowType] = useState("all");
  const [category, setCategory] = useState("motors");
  const [subCategory, setSubCategory] = useState("birds");
  const [redirect, setRedirect] = useState("");
  return (
    <div className="App">
      <Header redirect={redirect} setRedirect={setRedirect} />
      <Navigation
        setShowType={setShowType}
        setCategory={setCategory}
        setSubCategory={setSubCategory}
      />
      <Route
        exact
        path="/"
        render={() => (
          <Home
            setShowType={setShowType}
            setCategory={setCategory}
            setSubCategory={setSubCategory}
          />
        )}
      />
      <Route
        path="/advertisements"
        render={() => (
          <Advertisements
            showType={showType}
            category={category}
            subCategory={subCategory}
          />
        )}
      />
      <Route path="/advertisement/:id" render={() => <Advertisement />} />
      <Route path="/Profile" render={() => <Profile />} />
      <Route path="/favorites" render={() => <Favorites />} />
      <Route path="/placeAdv" render={() => <PlaceAdv />} />
      <Route path="/login" render={() => <Login setRedirect={setRedirect} />} />
      <Route path="/signup" render={() => <Signup />} />
      <Footer />
    </div>
  );
};

export default App;
