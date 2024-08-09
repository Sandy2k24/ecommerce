import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  return (
    <div className="lg:px-[15px] lg:mx-[33px]">
      <div className=" lg:mt-[30px] flex flex-col p-6 bg-gray-100 rounded-lg shadow-md">
        {/* {-------Product main details------------} */}
        <div className="flex flex-col md:flex-row gap-6 ">
          {/* div11 */}
          <div className="flex flex-col md:flex-row gap-4  lg:w-1/2  lg:px-[15px]">
            <div className="hidden md:flex flex-col gap-4">
              <img
                src="https://via.placeholder.com/100x100"
                alt="Product Image 1"
                className="w-full h-auto object-cover"
              />
              <img
                src="https://via.placeholder.com/100x100"
                alt="Product Image 2"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 ">
              <img
                src="https://via.placeholder.com/900x500"
                alt="Product Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* div13 */}
          <div className="flex flex-col gap-4   lg:w-1/2 lg:px-[15px]">
            <h1 className="text-xl font-bold">Product Title</h1>
            <p className="text-gray-700">In Stock</p>
            <p className="text-gray-700">Dealer: XYZ</p>
            <p className="text-lg font-semibold">Price: $100.00</p>
            <p className="text-lg font-semibold">Amount: 1</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* {-------Product description------------} */}
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Product Title</h2>
          <p className="text-gray-700 mt-2">
            Description of the product goes here. This should be informative and
            provide details about the product's features and benefits.
          </p>
        </div>

        {/* {-------You May Also Like -----------} */}

        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <div className="flex flex-col md:w-1/2">
            <h3 className="text-xl font-semibold">Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
              <div className="flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="Image 1"
                  className="w-full h-auto object-cover"
                />
                <p className="text-sm mt-1">Image 1</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="Image 2"
                  className="w-full h-auto object-cover"
                />
                <p className="text-sm mt-1">Image 2</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="Image 3"
                  className="w-full h-auto object-cover"
                />
                <p className="text-sm mt-1">Image 3</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="Image 4"
                  className="w-full h-auto object-cover"
                />
                <p className="text-sm mt-1">Image 4</p>
              </div>
            </div>
          </div>

          {/* Mobile View Adjustments */}
          <div className="md:hidden flex flex-col gap-2">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Image 1 Mobile"
              className="w-full h-auto object-cover"
            />
            <img
              src="https://via.placeholder.com/300x200"
              alt="Image 2 Mobile"
              className="w-full h-auto object-cover"
            />
            <img
              src="https://via.placeholder.com/300x200"
              alt="Image 3 Mobile"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    // <div className="flex flex-col p-6 bg-gray-100 rounded-lg shadow-md">
    //   {/* div1 */}
    //   <div className="flex flex-col md:flex-row gap-6">
    //     {/* div11 */}
    //     <div className="flex flex-col md:w-1/2">
    //       {/* div11-1: Desktop Images */}
    //       <div className="hidden md:flex flex-col gap-4 mb-4">
    //         <img
    //           src="https://via.placeholder.com/400x300"
    //           alt="Product Image Desktop 1"
    //           className="w-full h-auto object-cover"
    //         />
    //         <img
    //           src="https://via.placeholder.com/400x300"
    //           alt="Product Image Desktop 2"
    //           className="w-full h-auto object-cover"
    //         />
    //       </div>

    //       {/* div11-2: Image Visible in Both Views */}
    //       <div className="flex flex-col gap-4">
    //         <img
    //           src="https://via.placeholder.com/400x300"
    //           alt="Product Image Both"
    //           className="w-full h-auto object-cover"
    //         />
    //       </div>
    //     </div>

    //     {/* div12 */}
    //     <div className="flex flex-col gap-4 md:w-1/2">
    //       <h1 className="text-2xl font-bold">Product Title</h1>
    //       <p className="text-gray-700">In Stock</p>
    //       <p className="text-gray-700">Dealer: XYZ</p>
    //       <p className="text-lg font-semibold">Price: $100.00</p>
    //       <p className="text-lg font-semibold">Amount: 1</p>
    //       <button className="bg-blue-500 text-white px-4 py-2 rounded">
    //         Add to Cart
    //       </button>
    //     </div>
    //   </div>

    //   {/* div2 */}
    //   <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
    //     <h2 className="text-2xl font-semibold">Product Description</h2>
    //     <p className="text-gray-700 mt-2">
    //       This section contains the description of the product. It should
    //       provide detailed information about the features, specifications, and
    //       benefits of the product.
    //     </p>
    //   </div>

    //   {/* div3 */}
    //   <div className="mt-6 flex flex-col md:flex-row gap-4">
    //     {/* div3 for Desktop */}
    //     <div className="hidden md:flex flex-col md:w-1/2">
    //       <h3 className="text-xl font-semibold">Gallery</h3>
    //       <div className="grid grid-cols-2 gap-2 mt-2">
    //         <div className="flex flex-col items-center">
    //           <img
    //             src="https://via.placeholder.com/100x100"
    //             alt="Gallery Image 1"
    //             className="w-full h-auto object-cover"
    //           />
    //           <p className="text-sm mt-1">Image 1</p>
    //         </div>
    //         <div className="flex flex-col items-center">
    //           <img
    //             src="https://via.placeholder.com/100x100"
    //             alt="Gallery Image 2"
    //             className="w-full h-auto object-cover"
    //           />
    //           <p className="text-sm mt-1">Image 2</p>
    //         </div>
    //         <div className="flex flex-col items-center">
    //           <img
    //             src="https://via.placeholder.com/100x100"
    //             alt="Gallery Image 3"
    //             className="w-full h-auto object-cover"
    //           />
    //           <p className="text-sm mt-1">Image 3</p>
    //         </div>
    //         <div className="flex flex-col items-center">
    //           <img
    //             src="https://via.placeholder.com/100x100"
    //             alt="Gallery Image 4"
    //             className="w-full h-auto object-cover"
    //           />
    //           <p className="text-sm mt-1">Image 4</p>
    //         </div>
    //       </div>
    //     </div>

    //     {/* div3 for Mobile */}
    //     <div className="md:hidden flex flex-col gap-2">
    //       <h3 className="text-xl font-semibold">Gallery</h3>
    //       <img
    //         src="https://via.placeholder.com/300x200"
    //         alt="Gallery Image Mobile 1"
    //         className="w-full h-auto object-cover"
    //       />
    //       <img
    //         src="https://via.placeholder.com/300x200"
    //         alt="Gallery Image Mobile 2"
    //         className="w-full h-auto object-cover"
    //       />
    //       <img
    //         src="https://via.placeholder.com/300x200"
    //         alt="Gallery Image Mobile 3"
    //         className="w-full h-auto object-cover"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};
export default SingleProduct;
