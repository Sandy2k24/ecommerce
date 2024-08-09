import { useState } from "react";
import { Outlet } from "react-router-dom";
import PopUp from "./Components/PopUp/PopUp"
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
// import  Login  from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

export default function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      {/* Add your NavBar and Menu components here if needed */}
      {/* <NavBar /> */}
      {/* <Menu /> */}

      {showPopup && <PopUp />}
      {/* all the other elements */}
      <NavBar />
      {/* <Login/> */}
      <Signup/>
      {/* <Menu /> */}
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
