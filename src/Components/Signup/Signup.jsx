import { useEffect, useState } from 'react';
import './Signup.css'
import SITE_CONFIG from "../../controller.js";
import axios from 'axios';
import { countries } from 'countries-list';
function Signup({openSignup,setOpenSignup,setIslogin}) {
  // const [openSignup, setOpenSignup] = useState(true);
  const countryCodes = Object.keys(countries).map((code) => ({
    code: `+${countries[code].phone}`,
    label: `${countries[code].name} (+${countries[code].phone})`,
  }));
  const genderOptions = [
    { id: "1", value: 'male'},
    { id: "0", value: 'female' },
    { id: "2", value: 'other'}
];

  const [credentials, setCredentials] = useState({ first_name: "",
  last_name: '',
  email: "",
  mobile: '', 
  password: "",
  country_code: "", 
  gender: "" ,
  type: "user",
  status: "",
  lat: "",
  lng: "",
  cover: "",
  verified: "1",
  "date": new Date().toDateString,
  address: "[]"
  })
  const closePopup = () => {
    setOpenSignup(false);
  };
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
  const handleOpenLogin = () =>{
    setOpenSignup(false)
  }
  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    let phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/gm;
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    try {
      if (!credentials.email && !credentials.first_name && !credentials.password && !credentials.mobile && !credentials.last_name) {
        console.error("All fields are required", { autoClose: 500, theme: 'colored' })
      }
      else if (credentials.first_name.length < 1 || credentials.last_name.length < 1) {
        console.error("Please enter valid name", { autoClose: 500, theme: 'colored' })
      }
      else if (emailRegex.test(credentials.email)===false) {
        console.error("Please enter valid email", { autoClose: 500, theme: 'colored' })
      }
      else if (phoneRegex.test(credentials.mobile)===false) {
        console.error("Please enter a valid phone number", { autoClose: 500, theme: 'colored' })
        console.log(1);
      }
      else if (credentials.password.length < 5) {
        console.error("Please enter password with more than 5 characters", { autoClose: 500, theme: 'colored' })
      }
      else if (credentials.gender==="") {
        console.error("Please select the gender", { autoClose: 500, theme: 'colored' })
      }
      else if (credentials.email && credentials.first_name && credentials.last_name && credentials.mobile && credentials.password) {
        
        const sendAuth = await axios.post(`${SITE_CONFIG.apiIPMongo}/api/admin/register`,      
          {
            first_name: credentials.first_name,
            last_name: credentials.last_name,
            email: credentials.email,
            mobile: credentials.mobile,
            password: credentials.password,
            country_code:credentials.country_code,
            gender:credentials.gender
          },{
            headers:{
              Authorization:`Bearer ${SITE_CONFIG.apiToken}`
            }
          })
          
        const receive = await sendAuth.data
        if (receive.success === true) {
          // console.success("Registered Successfully", { autoClose: 500, theme: 'colored' })
          // setIslogin(true)
          closePopup();
          
        }
        else {
          console.log();
          
          console.error("Something went wrong, Please try again", { autoClose: 500, theme: 'colored' })
          
        }
      }
    } catch (error) {
      console.error("Error Occured Please Try again later", { autoClose: 500, theme: 'colored' })

    }

  }
  if (!openSignup) return null; // Don't render if the popup is closed

  return (
    <div className="fixed inset-0 flex items-start justify-center bg-gray-800 bg-opacity-50 z-50 p-9 ">
      <div className="w-[76.5%] md:w-[65%] lg:w-[48.6%] xl:w-[40.5%] bg-white transform translate-y-[-5%] relative ">
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          &#x2715; {/* X symbol */}
        </button>
        <div className="flex items-center justify-center p-3 border-b border-gray-200">
          <h3 className="text-lg font-bold">Signup</h3>
        </div>

        <form noValidate onSubmit={handleSubmit} className="p-3 space-y-3">
          <div className="space-y-3">
            <input
              type="email"
              name="email"
              spellCheck="false"
              autoCapitalize="off"
              value={credentials.email}
              onChange={handleOnChange}
              required
              className="w-[90%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 placeholder-bold"
              placeholder="Email"
            />
            <p className="text-red-500 hidden">Email is required</p>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleOnChange}
              required
              className="w-[90%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 placeholder-bold"
              placeholder="Password"
            />
            <p className="text-red-500 hidden">Password is required</p>
            <input
              type="text"
              name="first_name"
                  value={credentials.first_name}
                  onChange={handleOnChange}
              spellCheck="false"
              autoCapitalize="off"
              required
              className="w-[90%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 placeholder-bold"
              placeholder="First Name"
            />
            <p className="text-red-500 hidden">First Name is required</p>
            <input
              type="text"
              name="last_name"
                  value={credentials.last_name}
                  onChange={handleOnChange}
              spellCheck="false"
              autoCapitalize="off"
              required
              className="w-[90%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 placeholder-bold"
              placeholder="Last Name"
            />
            <p className="text-red-500 hidden">Last Name is required</p>
            <div className="flex space-x-4">
              <select
                name="country_code"
                value={credentials.country_code}
                onChange={handleOnChange}
                spellCheck="false"
                autoCapitalize="off"
                required
                className="w-[27%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
              >
                {/* options */}
                {countryCodes.map((option,index) => (
                    
                    <option key={index} value={option.code}>{option.label}</option>
                  ))}
              </select>
              <input
                type="number"
                name="mobile"
                value={credentials.mobile}
                onChange={handleOnChange}
                required
                className="w-[60%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 placeholder-bold"
                placeholder="Mobile Number"
              />
              <p className="text-red-500 hidden">Phone Number is required</p>
            </div>

            <select
              name="gender"
              value={credentials.gender}
              onChange={handleOnChange}
              required
              className="w-[90%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
            >
              <option value="" disabled >Select Gender</option>
              <option value="1">Male</option>
              <option value="0">Female</option>
              <option value="2">Other</option>
            </select>

            <div className="flex items-start space-x-2 mb-1 w-[]">
              <input type="checkbox" className="mt-1" />
              <p className="text-sm" style={{ fontSize: '11px' }}>
                By clicking on the I agree button click, download or if you use the Application, you agree to be bound by the 
                <a href="#" className="text-blue-500 underline" style={{ textDecorationColor: '#000000' }}>
                  EULA certificate
                </a> 
                and <a href="#" className="text-blue-500 underline" style={{ textDecorationColor: '#000000' }}>
                  Privacy Policy
                </a> of this app.
              </p>
            </div>

            <div className="flex justify-end">
              <p className="text-gray-600 text-sm">
                or <span className="text-red-500 hover:cursor-pointer" onClick={handleOpenLogin}>login to your account</span>
              </p>
            </div>

            <div className="flex justify-center p-3 border-t border-gray-200">
              <button type="submit" className="bg-[#2BBBAD] text-white py-2 px-4">
                Signup
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
