import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Menu from "./components/Menu";
import HeaderBlock from "./components/HeaderBlock";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Signup from "./components/Signup";
import TeslaAccount from "./components/TeslaAccount";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        //user is signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {/* <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> */}
        {/* <HeaderBlock /> */}
        {/* {isMenuOpen && <Menu />} */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {isMenuOpen && <Menu />}
                <HeaderBlock />
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
              </>
            }
          ></Route>

          <Route
            path="/login"
            element={
              user ? (
                <Navigate to="/teslaaccount" />
              ) : (
                <Route path="/login" element={<Login />}></Route>
              )
            }
          ></Route>

          <Route path="/signup" element={<Signup />}></Route>

          <Route
            path="/teslaaccount"
            element={
              !user ? (
                <Navigate to="/login" />
              ) : (
                <Route
                  path="/teslaaccount"
                  element={
                    <>
                      <TeslaAccount
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                      />
                      {isMenuOpen && <Menu />}
                    </>
                  }
                ></Route>
              )
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
