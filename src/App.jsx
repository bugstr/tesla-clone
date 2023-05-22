import React, { useState } from "react";
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
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app">
      <Router>
        {/* <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> */}
        {/* <HeaderBlock /> */}
        {isMenuOpen && <Menu />}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderBlock />
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
              </>
            }
          ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
        {/* {user ? <Navigate to='/teslaaccount'/> : <Login/>} */}
      </Router>
    </div>
  );
}

export default App;
