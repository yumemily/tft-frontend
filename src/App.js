import React, { useState, useEffect } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import { DndProvider } from "react-dnd"

import { HTML5Backend } from "react-dnd-html5-backend"
import {Navbar, Container, NavbarBrand} from "react-bootstrap"


import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import TopTen from "./views/TopTen"
import Player from "./views/Player"
import Index from "./views/Index"
import CompBuilder from "./views/CompBuilder"
import Comps from "./views/Comps"
import Pupdate from "./views/Pupdate"
import User from './views/User';
import Profile from './views/Profile';
import Favorites from './views/Favorites';
import SignInSide from './views/SignInSide';
import SignUpSide from './views/SignUpSide';
import ForgotPw from './views/ForgotPw';

import champions from "./champions"
import itemIcons from "./items"

import NoMore from "./components/NoMore"
import AuthRoute from "./components/AuthRoute"
import MyNav from "./components/MyNav"
import MySpinner from "./components/MySpinner"



function App() {

  const [player, setPlayer] = useState(null)
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(async () => {
    await checkUser()
  }, [])

  const checkUser = async () => {
    // extracting token from url
    const urlToken = window.location.href.split("?token=")[1]
      ? window.location.href.split("?token=")[1].replace("#_=_", "")
      : null;

    // get token from storage or urlToken
    const token = localStorage.getItem("token") || urlToken;
    console.log(token)

    // if there is no token, we don't need to do anything else, just set our app state as LOADED
    if (!token) {
      setLoaded(true);
      return;
    }

    // if there is token, we will fetch user information from api server using the token.
    try {
      const url = process.env.REACT_APP_SERVER + "/users/me";
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(res)
      // if we get user object from response, it means token is correct, we save it back to storage, as well as setState our user to the value we just got from the response
      if (res.status === 200) {
        const data = await res.json();
        console.log("DATA", data)
        localStorage.setItem("token", token);
        setUser(data.data);
      } else {
        // token is not valid, clear the token so that we don't have to check again
        setUser(null)
        localStorage.removeItem("token");
      }
    } catch (err) {
      console.log(err);
    }
    // finally set our app state to LOADED
    setLoaded(true);
  };

  if (!loaded) return (<MySpinner></MySpinner>)

  return (
    <DndProvider backend={HTML5Backend}>

      <MyNav user={user} setUser={setUser} />

      <Switch>
        <AuthRoute
          exact
          user={user}
          path="/edit-profile"
          component={User} />
        <AuthRoute path="/profile/favorites" setUser={setUser} user={user} component={Favorites} />
        <AuthRoute path="/profile" setUser={setUser} user={user} component={Profile} />
        <Route
          path="/emails/:token"
          component={Pupdate} />
        <Route path="/password-reset" render={() => <ForgotPw setUser={setUser} user={user} />} />
        <NoMore
          exact
          path="/login"
          user={user}
          setUser={setUser}
          component={SignInSide}
        />
        <NoMore
          exact
          path="/sign-up"
          user={user}
          setUser={setUser}
          component={SignUpSide}
        />
        <Route path="/comps" render={() => <Comps user={user} />} />
        <Route path="/comp-builder/:id" render={() => <CompBuilder />} />
        <Route path="/comp-builder" render={() => <CompBuilder />} />
        <Route path="/leaderboard/players/:id" render={() => <Player player={player} />} />
        <Route path="/leaderboard" render={() => <TopTen setPlayer={setPlayer} />} />
        <Route path="/" component={Index} />
      </Switch>
 
      <footer className="my-footer">
      <div className="container pt-2">
          <div className="divider"></div>
          <span class="text-muted" style={{fontSize: 10}}>TFT Helper isn't endorsed or sponsored by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc. Game content and materials are trademarks and copyrights of their respective companies, publisher and its licensors. TFT Helper is not affiliated with the game companies, publisher and its licensors.</span>
      </div>
      </footer>

    </DndProvider>
  );
}


export default App;
