import { useState,useEffect } from 'react';
import SITE_CONFIG from "../../controller.js";
import axios from 'axios';
import Signup from '../Signup/Signup.jsx';
function Login({openLogin,setOpenLogin,setIslogin}) {
  // const [openLogin, setOpenLogin] = useState(true);
  const [openSignup,setOpenSignup] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  useEffect(() => {
    let auth = localStorage.getItem('AuthToken');
    let user= localStorage.getItem('User')
    if(auth && user){
      setIslogin(true);
      closePopup();
    }else{
      setIslogin(false)
    }
  }, [])
  const closePopup = () => {
    setOpenLogin(false);
  };
  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const handleOpenSignup = () =>{
    setOpenSignup(true)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(credentials);
    
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    try {
      if (!credentials.email && !credentials.password) {
        console.error("All fields are required", { autoClose: 500, theme: 'colored' })
      }
      else if (!emailRegex.test(credentials.email)) {
        console.error("Please enter a valid email", { autoClose: 500, theme: 'colored' })
      }
      else if (credentials.password.length < 5) {
        console.error("Please enter valid password", { autoClose: 500, theme: 'colored' })
      }
      else if (credentials.email && credentials.password) {
        
          const sendAuth = await axios.post(`${SITE_CONFIG.apiIPMongo}/api/admin/login`,
          {
            email: credentials.email,
            password: credentials.password,
            
          },{
            headers:{
              Authorization:`Bearer ${SITE_CONFIG.apiToken}`
            }
          })
        const receive = await sendAuth.data
        if (receive.success === true) {
          
          
          localStorage.setItem('AuthToken', receive.authToken)
          localStorage.setItem('User', receive.userid) 
          setIslogin(true)
          closePopup();
        } else {
          console.error("Invalid Credentials", { autoClose: 500, theme: 'colored' })
        }
      }
    }
    catch (error) {
     console.error("Invalid Credentials", { autoClose: 500, theme: 'colored' })
    }

  }
  if (!openLogin) return null; // Don't render if the popup is closed
  if(openSignup) return (<Signup openSignup= {openSignup} setOpenSignup= {setOpenSignup} setIslogin={setIslogin}/>);
  return (
    <div className="fixed inset-0 flex items-start justify-center bg-gray-800 bg-opacity-50 z-50 p-10">
      <form noValidate onSubmit={handleSubmit} className="w-[95%] md:w-[70%] lg:w-[60%] xl:w-[50%] bg-white transform translate-y-[-5%] relative">
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          &#x2715; {/* X symbol */}
        </button>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">Login</h2>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleOnChange}
              spellCheck="false"
              autoCapitalize="off"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
            <p className="text-red-500 hidden">Email is required</p>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleOnChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
            <p className="text-red-500 hidden">Password is required</p>
          </div>
          <div className="flex flex-col items-end mt-4 space-y-2">
            <p className="text-gray-600 hover:cursor-pointer">Forgot Password?</p>
            <p className="text-gray-600">
              or <span className="text-red-500 hover:cursor-pointer" onClick={handleOpenSignup}>create an account</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center p-4 border-t border-gray-200">
          <button type="submit" className="bg-[#2BBBAD] text-white py-2 px-4">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
