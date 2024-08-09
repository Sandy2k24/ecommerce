import  { useState } from 'react';

function Login() {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null; // Don't render if the popup is closed

  return (
    <div className="fixed inset-0 flex items-start justify-center bg-gray-800 bg-opacity-50 z-50 p-10">
      <form noValidate className="w-[95%] md:w-[70%] lg:w-[60%] xl:w-[50%] bg-white transform translate-y-[-5%] relative">
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
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
            <p className="text-red-500 hidden">Password is required</p>
          </div>
          <div className="flex flex-col items-end mt-4 space-y-2">
            <p className="text-gray-600 hover:cursor-pointer">Forgot Password?</p>
            <p className="text-gray-600">
              or <span className="text-red-500 hover:cursor-pointer">create an account</span>
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
