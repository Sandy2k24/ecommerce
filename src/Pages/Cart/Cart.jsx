import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faShoppingCart, faClipboardCheck, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    return (
        <div className="container mx-auto p-2 md:p-8 max-w-4xl">
            <div className='flex justify-between'>
                    <h2 className="text-xl font-semibold md:text-2xl">Cart (1)</h2>
                    <div className="flex items-center justify-center space-x-4">
                            {/* Step 1: Your Cart */}
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faShoppingCart} className="text-red-500" />
                                <div>Your Cart</div>
                            </div>

                            <div className="flex-grow h-px bg-gray-300"></div>

                            {/* Step 2: Confirm Order */}
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faClipboardCheck} className="text-gray-500" />
                                <div>Confirm Order</div>
                            </div>

                            <div className="flex-grow h-px bg-gray-300"></div>

                            {/* Step 3: Payment */}
                            <div className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faCreditCard} className="text-gray-500" />
                                <div>Payment</div>
                            </div>
                        </div>
                    </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8">
                {/* Left Section - Cart Items */}
                <div className="lg:col-span-7">
                    
                    <div className="mt-4 md:mt-6">
                        <div className="p-4 rounded-lg md:p-6">
                            <div className="flex justify-between">
                                <h3 className="text-md font-semibold md:text-lg">
                                    Basket <span className="text-gray-500 text-md md:text-lg">(1 item)</span>
                                </h3>
                                <h3 className="text-md font-semibold md:text-lg">$35.00</h3>
                            </div>

                            <div className="flex flex-col items-center mt-4 md:mt-6 md:flex-row">
                                <img
                                    src="http://13.127.97.224/images/goatrack-31.jpg"
                                    alt="Goat Cutlets"
                                    className="w-24 h-24 rounded object-cover"
                                />
                                <div className="mt-4 md:ml-4 md:mt-0">
                                    <h4 className="text-md font-semibold">GOAT CUTLETS</h4>
                                    <p className="text-gray-600">$35.00 / 1 KG</p>
                                </div>
                                <div className="flex items-center mt-4 space-x-4 md:mt-0 md:ml-auto">
                                    <button className="text-green-500 hover:text-green-700">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button className="text-red-500 hover:text-red-700">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>

                {/* Right Section - Summary and Options */}
                <div className="lg:col-span-5">
                    <div className="p-4 space-y-6 md:p-6 md:space-y-8">
                       
                        {/* Authentication */}
                        <div>
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
        </div>
    );
};

export default Cart;
