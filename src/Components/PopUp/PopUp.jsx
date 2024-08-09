import { useState } from "react";
import './PopUp.css'
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectStore } from '../../slices/storeslice';

function PopUp() {
  const [isOpen, setIsOpen] = useState(true); // State to manage popup visibility
 
  const dispatch = useDispatch()
  const closePopup = () => {
    setIsOpen(false); 
  };

  if (!isOpen) return null; // If the popup is not open, don't render it


  
const handleSelectStore = (storeId) => {
  dispatch(selectStore(storeId)); 
  closePopup(); 
}


  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50"></div>

      {/* Modal Content */}
      <div className="fixed top-[10%] left-1/2 transform -translate-x-1/2 shadow-md bg-white w-[90%] max-w-2xl z-50">
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          &#x2715; {/* X symbol */}
        </button>
        <p className="ml-4 mt-2 mb-2 text-gray-500">Choose the Nearest Store</p>
        <hr />
        <div className="flex flex-col md:flex-row justify-center gap-6 p-4">
          <div className="bg-white border border-gray-300 p-4 w-full md:w-60 relative group">
            <NavLink className="mb-4">
              <img
                src="https://lavishlook.in/onlinestore/api/uploads/Wenty.jpg"
                alt="Store 1"
                className="w-full h-32 object-cover rounded-lg"
              />
            </NavLink>
            <div className="text-center">
              <p className="text-sm text-[#6c757d]">
                Green Farm Products Wentworthville NSW
              </p>
              <p className="text-sm text-[#6c757d]">
                Shop 13/326 Great Western Hwy,..
              </p>
              <button
               onClick={() => handleSelectStore(1)}
                className="btan addcart p-2">Select</button>
            </div>
          </div>

          <div className="bg-white border border-gray-300 p-4 w-full md:w-60 relative group">
            <NavLink className="mb-4">
              <img
                src="https://lavishlook.in/onlinestore/api/uploads/deewhy.jpg"
                alt="Store 2"
                className="w-full h-32 object-cover rounded-lg"
              />
            </NavLink>
            <div className="text-center">
              <p className="text-sm text-[#6c757d]">
                Green Farm Products Dee Why NSW
              </p>
              <p className="text-sm text-[#6c757d]">
                838A Pittwater Rd Dee Why NSW ..
              </p>
              <button
               onClick={() => handleSelectStore(2)} 
               
               className="btan addcart p-2">Select</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUp;
