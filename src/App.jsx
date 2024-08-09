import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PopUp from "./Components/PopUp/PopUp";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Card from "./Components/Card/Card";
import ForgetPass from "./Components/ForgetPass/Forgetpass";
import  Login  from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { useSelector } from "react-redux";

export default function App() {
  const [showPopup, setShowPopup] = useState(true);
  const storeId = useSelector((state) => state.store.selectedStore);
  
useEffect(()=>{
if(storeId){
  setShowPopup(false)
  console.log(storeId)
}
else{
  setShowPopup(true)
}
},[storeId])
  return (
    <>
      {/* Add your NavBar and Menu components here if needed */}
      {/* <NavBar /> */}
      {/* <Menu /> */}

      {showPopup && <PopUp />}
      {/* all the other elements */}
      <NavBar />
      {/* <Card/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <ForgetPass/> */}
      {/* <Menu /> */}
      <div id="detail" style={{ paddingTop: "120px" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
