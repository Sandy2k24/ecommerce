
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, price, imageUrl }) => {

    return (
        <div className="relative group overflow-hidden cursor-pointer border border-red-700">
  <div className="w-full h-48 overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
  </div>
  <div className="p-4 transition-all duration-300 ease-in-out group-hover:h-40">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="font-bold" style={{ color: '#be0500' }}>Amount: {price}</p>
  </div>
  <Link>
    <button className="absolute bottom-0 left-0 right-0 bg-[#be0500] p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Buy Now
    </button>
  </Link>
</div>


    );
};

export default Card;