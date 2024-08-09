import { useState } from 'react';
import './Signup.css'

function Signup() {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null; // Don't render if the popup is closed

  return (
    <div className="fixed inset-0 flex items-start justify-center bg-gray-800 bg-opacity-50 z-50 p-9">
      <div className="w-[76.5%] md:w-[56.7%] lg:w-[48.6%] xl:w-[40.5%] bg-white transform translate-y-[-5%] relative">
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

        <form noValidate className="p-3 space-y-3">
          <div className="space-y-3">
            <input
              type="email"
              name="email"
              spellCheck="false"
              autoCapitalize="off"
              required
              className="w-[90%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 placeholder-bold"
              placeholder="Email"
            />
            <p className="text-red-500 hidden">Email is required</p>
            <input
              type="password"
              name="password"
              required
              className="w-[90%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 placeholder-bold"
              placeholder="Password"
            />
            <p className="text-red-500 hidden">Password is required</p>
            <input
              type="text"
              name="full_name"
              spellCheck="false"
              autoCapitalize="off"
              required
              className="w-[90%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 placeholder-bold"
              placeholder="First Name"
            />
            <p className="text-red-500 hidden">First Name is required</p>
            <input
              type="text"
              name="lname"
              spellCheck="false"
              autoCapitalize="off"
              required
              className="w-[90%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 placeholder-bold"
              placeholder="Last Name"
            />
            <p className="text-red-500 hidden">Last Name is required</p>
            <div className="flex space-x-4">
              <select
                name="ccode"
                spellCheck="false"
                autoCapitalize="off"
                required
                className="w-[27%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
              >
                {/* options */}
              </select>
              <input
                type="number"
                name="phone"
                required
                className="w-[63%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 placeholder-bold"
                placeholder="Mobile Number"
              />
              <p className="text-red-500 hidden">Phone Number is required</p>
            </div>

            <select
              name="gender"
              required
              className="w-[90%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
            >
              <option value="" disabled selected>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <div className="flex items-start space-x-2 mb-1">
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
                or <span className="text-red-500 hover:cursor-pointer">create an account</span>
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
