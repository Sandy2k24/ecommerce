
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Card = ({ title, price, imageUrl }) => {

    return (
      <div className="bg-white border border-gray-300 p-4 w-full md:w-60 relative group">
      <NavLink className="mb-4">
        <img
          src=""
          alt="Chicken img"
          className="w-full h-32 object-cover rounded-lg"
        />
      </NavLink>
      <div className="text-center">
        <p className="text-lg text-[#6c757d]">
          Title
        </p>
        <p className="text-sm text-[#6c757d]">
          quantity        </p>
        <p>Amount : $ 86.40</p>
        <button className="btan addcart p-2 hover: bottom:0">Add</button>
      </div>
    </div>




    );
};

export default Card;