import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ title, price, imageUrl, variation }) => {
  const [quantity, setQuantity] = useState(0);
  const [weight, setWeight] = useState(1);

  const handleAddClick = () => {
    setQuantity(1); // Set to 1 to show quantity controls
  };

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 0));
  };

  const handleSliderChange = (event) => {
    setWeight(parseFloat(event.target.value).toFixed(1)); // Convert to decimal with 1 decimal place
  };

  return (
    <div className="bg-white p-4 w-full md:w-60 lg:w-72 xl:w-80 relative group">
      <NavLink className="mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover"
        />
      </NavLink>
      <div className="text-center relative group">
        <p className="text-lg text-[#6c757d]">{title}</p>
        
        {/* Display KG based on variation */}
        <p className="text-sm text-[#6c757d]">{variation === "slider" ? `${weight} KG` : "0 KG"}</p>
        
        {/* Conditional Rendering based on variation */}
        {variation === "quantity" && (
          <>
            <p className="text-sm text-[#BE0500] mt-2 font-bold">${price}</p>
            {quantity === 0 ? (
               <button
               className="absolute bottom-0 left-0 bg-[#BE0500] text-white px-6 py-2 rounded transition-transform transform translate-y-full group-hover:translate-y-0 transition-all duration-300"
               onClick={handleAddClick}
             >
                Add
              </button>
            ) : (
              <div className="flex items-center justify-center mt-2">
                <button
                  className="px-2 py-1 border bg-[#BE0500] text-white font-bold rounded-full"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <span className="mx-4 font-bold">{quantity}</span>
                <button
                  className="px-2 py-1 border bg-[#BE0500] text-white font-bold rounded-full"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
            )}
          </>
        )}

        {variation === "slider" && (
          <>
            <input
              type="range"
              min="1"
              max="15"
              step="0.1"  // Set step to 0.1 for decimal values
              value={weight}
              onChange={handleSliderChange}
              className="w-full mt-2"
              style={{
                background: `linear-gradient(to right, #BE0500 0%, #BE0500 ${(weight - 1) * 100 / 14}%, #D8e0F3 ${(weight - 1) * 100 / 14}%, #D8e0F3 100%)`
              }}
            />
            <p className="text-sm text-[#BE0500] mt-2 font-bold">Amount: ${(price * weight).toFixed(2)}</p>
            <button
              className="bg-[#BE0500] text-white px-4 py-2 rounded mt-2"
              onClick={handleAddClick}
            >
              Add
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
