import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faShoppingCart, faClipboardCheck, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    // Example state for cart items; replace with actual data logic
    const [cartItems, setCartItems] = useState([
        // Example item
        {
            id: 1,
            name: "GOAT CUTLETS",
            price: "$35.00",
            imageUrl: "http://13.127.97.224/images/goatrack-31.jpg"
        }
    ]);

    return (
        <div className="container mx-auto p-2 md:p-8 max-w-4xl">
            {/* Conditional Rendering */}
            {cartItems.length > 0 ? (
                <>
                    {/* Cart Steps */}
                    <div className='flex flex-col sm:flex-row justify-between'>
                        <h2 className="text-xs md:text-2xl font-semibold ml-6">Cart({cartItems.length})</h2>
                        <div className="flex items-center justify-center space-x-4 ml-6 mt-1">
                            {/* Step 1: Your Cart */}
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faShoppingCart} className="text-red-500" />
                                <div className='text-xs md:text-sm'>Your Cart</div>
                            </div>

                            <div className="flex-grow h-px bg-gray-800"></div>

                            {/* Step 2: Confirm Order */}
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faClipboardCheck} className="text-gray-500" />
                                <div className='text-xs md:text-sm'>Confirm Order</div>
                            </div>

                            <div className="flex-grow h-px bg-gray-800"></div>

                            {/* Step 3: Payment */}
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faCreditCard} className="text-gray-500" />
                                <div className='text-xs md:text-sm'>Payment</div>
                            </div>
                        </div>
                    </div>

                    {/* Cart Items */}
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8 mt-4">
                        {/* Left Section - Cart Items */}
                        <div className="lg:col-span-7">
                            {cartItems.map(item => (
                                <div key={item.id} className="mt-2 md:mt-6">
                                    <div className="p-4 rounded-lg md:p-6">
                                        <div className="flex justify-between">
                                            <h3 className="text-xs font-semibold md:text-sm">
                                                Basket <span className="text-gray-500 text-xs md:text-sm">({cartItems.length} item{cartItems.length > 1 ? 's' : ''})</span>
                                            </h3>
                                            <h3 className="text-xs font-semibold md:text-sm">{item.price}</h3>
                                        </div>

                                        <div className="flex flex-col mt-4 md:mt-6 md:flex-row">
                                            <div className='flex justify-start'>
                                                <img
                                                    src={item.imageUrl}
                                                    alt={item.name}
                                                    className="w-20 h-20 rounded object-cover flex "
                                                />
                                                <div className="p-4">
                                                    <h4 className="text-xs md:text-sm font-semibold">{item.name}</h4>
                                                    <p className="text-gray-600 text-xs md:text-sm font-semibold">{item.price} / 1 KG</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-end space-x-4 md:mt-8 md:ml-auto">
                                                <button className="text-green-500 hover:text-green-700">
                                                    <FontAwesomeIcon icon={faEdit} />
                                                </button>
                                                <button className="text-red-500 hover:text-red-700">
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Section - Summary and Options */}
                        <div className="lg:col-span-5">
                            <div className="p-4 space-y-6 md:p-6 md:space-y-8">
                                {/* Authentication */}
                                <div className='mt-2'>
                                    <h3 className="text-md font-semibold">Authentication</h3>
                                    <p className="mt-2">
                                        <a href="#" className="text-red-500 underline">Log in</a> to see the best offers and cashback deals
                                    </p>
                                </div>

                                {/* Apply Coupon */}
                                <div>
                                    <div className="flex justify-between">
                                        <h3 className="text-md font-semibold">Apply Coupon</h3>
                                        <a href="#" className="inline-block mt-2 text-sm text-red-500">View deals</a>
                                    </div>
                                    <div className="flex mt-2">
                                        <input
                                            type="text"
                                            placeholder="Enter coupon code"
                                            className="flex-grow rounded-l-lg focus:outline-none"
                                        />
                                        <button className="p-2 text-gray-600 border-none rounded-r-lg">APPLY</button>
                                    </div>
                                </div>

                                {/* Payment Details */}
                                <div>
                                    <h3 className="text-md font-semibold">Payment Details</h3>
                                    <div className="mt-4">
                                        <div className="flex justify-between mb-3">
                                            <span>Item Total</span>
                                            <span>$35.00</span>
                                        </div>
                                        <hr />
                                        <div className="flex justify-between mt-2 mb-3">
                                            <span>Delivery Charges</span>
                                            <span>$0</span>
                                        </div>
                                        <hr />
                                        <div className="flex justify-between mt-2 font-semibold">
                                            <span>Total Amount</span>
                                            <span>$35.00</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Special Notes */}
                                <div>
                                    <h3 className="text-md">Special Notes</h3>
                                    <textarea
                                        className="w-full p-1 mt-2 border rounded-md focus:outline-none"
                                    ></textarea>
                                </div>

                                {/* Delivery Options */}
                                <div>
                                    <h3 className="text-md font-semibold">Delivery Options</h3>
                                    <div className="mt-2">
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="delivery" defaultChecked />
                                            <span className="text-md">At Home 🏠</span>
                                        </label>
                                        <label className="flex items-center mt-2 space-x-2">
                                            <input type="radio" name="delivery" />
                                            <span className="text-md">Self Pickup 🏬</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Receive At */}
                                <div>
                                    <h3 className="text-md font-semibold">Receive at</h3>
                                    <div className="mt-3">
                                        <select className="w-full focus:outline-none">
                                            <option>TODAY - FRIDAY, AUGUST 9TH 2024</option>
                                            <option>TOMORROW - SATURDAY, AUGUST 10TH 2024</option>
                                            {/* Additional options can be added here */}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="w-full flex justify-center items-center">
                    <div className="text-center">
                        <img
                            src="https://t3.ftcdn.net/jpg/04/76/93/14/360_F_476931472_LAGw6ZUxORq3FtjP9gRR8YLJcfrCrIFs.jpg"
                            alt="Empty cart"
                            className="w-64 mx-auto"
                        />
                        <h6 className="text-sm mb-10">No Items Found</h6>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
