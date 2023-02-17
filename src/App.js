import Login from "./components/login/login";
import React, { Component } from "react";
import { HotelSearch } from "./components/Hotelsearch/hotelSearch";
import SignUp from "./components/signUp/SignUp";
function App() {
  return (
    <div className="App">
      {/* <HotelSearch /> */}
      <SignUp />
    </div>
  );
}
export default App;
