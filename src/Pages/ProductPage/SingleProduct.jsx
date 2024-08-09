import { useState, useEffect } from "react";
import { FaWeight } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const SingleProduct = () => {
  const [cardAdded, setCardAdded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(1);

  // Function to handle image click
  const handleImageClick = (imageIndex) => {
    setSelectedImage(imageIndex);
  };

  // Border styles
  const getBorderStyle = (imageIndex) => {
    if (selectedImage === imageIndex) {
      return "2px solid #be0500"; // Border color when selected
    }
    return "1px solid rgb(211, 211, 211)"; // Default border color
  };
  return (
    <div className="lg:px-[15px] lg:mx-[33px]">
      <div className=" lg:mt-[30px] flex flex-col  bg-white ">
        {/* {-------Product main details------------} */}
        <div className="flex flex-col md:flex-row  ">
          {/* div11 */}
          <div className="flex flex-col md:flex-row  lg:px-[15px]">
            <div className="hidden md:flex flex-col">
              <img
                src="https://via.placeholder.com/90x90"
                alt="Product Image 1"
                className="w-[100px] h-[100px] mb-[20px] p-1 rounded-md"
                style={{ border: getBorderStyle(1) }}
                onClick={() => handleImageClick(1)}
              />
              <img
                src="https://via.placeholder.com/90x90"
                alt="Product Image 2"
                className="w-[100px] h-[100px] mb-[20px]  p-1 rounded-md"
                style={{ border: getBorderStyle(2) }}
                onClick={() => handleImageClick(2)}
              />
            </div>
            <div className="flex flex-col px-[15px] ">
              <img
                src="https://via.placeholder.com/900x500"
                alt="Product Image"
                className="w-[490px] h-[490px] object-cover"
              />
            </div>
          </div>

          {/* div13 */}
          <div
            style={{
              color: "rgb(33, 37, 41)",
              lineHeight: "30px",
            }}
            className="  flex flex-col text-left  px-[15px] lg:px-[0] text-base mb-[16px]"
          >
            <h1
              style={{ fontSize: "20px" }}
              className="font-bold uppercase mb-[16px] pt-[5px]"
            >
              Product Title
            </h1>
            <p
              style={{ color: "rgb(0,161,0)", fontSize: "16px" }}
              className="font-bold"
            >
              In Stock
            </p>
            <p
              style={{ fontSize: "14px", fontWeight: "400px" }}
              className="mb-[10px] "
            >
              Sold by{" "}
              <span style={{ color: "rgb(0,142,204)", fontWeight: "400px" }}>
                xyz
              </span>{" "}
            </p>
            <p
              style={{
                color: "rgb(248,59,83)",
                fontSize: "20px",
                fontWeight: "700",
              }}
              className="font-semibold"
            >
              Price: $100.00 / Kg
            </p>
            <p
              style={{
                color: "rgb(0,128,0)",
                fontSize: "20px",
                fontWeight: "700",
              }}
              className="font-semibold mb-[20px]"
            >
              Amount :{" "}
              <span
                style={{
                  color: "rgb(0,161,0)",
                }}
                className="font-normal"
              >
                {" "}
                $ 14.99
              </span>
            </p>
            {cardAdded && (
              <h2
                style={{ fontSize: "16px", height: "24px" }}
                className="font-bold mb-[20px]"
              >
                Added to The Cart
              </h2>
            )}
            <button
              style={{
                background: "#be0500",
                padding: "5px",
                width: "160px",
              }}
              className=" flex items-center w-1/2 rounded mb-[10px] text-left"
            >
              {/* Text Label */}
              {cardAdded ? (
                <span
                  className="text-base text-white  text-left pl-[10px]"
                  style={{ width: "160px" }}
                >
                  Update the Cart
                </span>
              ) : (
                <span
                  className="text-base text-white  text-left pl-[10px]"
                  style={{ width: "160px" }}
                  onClick={() => setCardAdded(true)}
                >
                  Add to Cart
                </span>
              )}
              {/* Circle with + Symbol */}
              {!cardAdded && (
                <div
                  style={{ background: "rgba(255,255,255,0.3)" }}
                  className="flex items-center justify-center w-6 h-6 text-white rounded-full mr-2"
                >
                  <span className="text-lg font-bold h-8">+</span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* {-------Product description------------} */}
        <div
          style={{
            color: "rgb(33, 37, 41)",
            borderTop: "1px solid rgb(211, 211, 211)",
            borderBottom: "1px solid rgb(211, 211, 211)",
          }}
          className="px-[15px] lg:px-0 py-[20px]"
        >
          <h2
            style={{ fontSize: "16px", height: "24px" }}
            className="font-bold"
          >
            Product Title
          </h2>
          <p
            style={{ fontSize: "14px", fontWeight: "400" }}
            className="ml-[40px]"
          >
            Description of the product goes here. This should be informative and
            provide details about the product's features and benefits.
            Description of the product goes here. This should be informative and
            provide details about the product's features and benefits.
            Description of the product goes here. This should be informative and
            provide details about the product's features and benefits.
          </p>
        </div>

        {/* {-------You May Also Like -----------} */}

        <div className="px-[15px] lg:px-0 py-[20px] mt-6 flex flex-col md:flex-row gap-4">
          <div className="flex flex-col ">
            <h3
              style={{ fontSize: "16px", height: "24px" }}
              className=" font-bold mb-[20px]"
            >
              You May Also Like
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
              <div className="flex flex-col items-center mr-[20px]">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="Image 1"
                  className="w-[170px] h-[170px]  object-cover"
                />
                <p className="text-sm mt-1 uppercase ">Image 1</p>
              </div>
              <div className="flex flex-col items-center mr-[20px]">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="Image 2"
                  className="w-[170px] h-[170px] object-cover"
                />
                <p className="text-sm mt-1 uppercase ">Image 2</p>
              </div>
              <div className="flex flex-col items-center mr-[20px]">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="Image 3"
                  className="w-[170px] h-[170px] object-cover"
                />
                <p className="text-sm mt-1 uppercase ">Image 3</p>
              </div>
              <div className="flex flex-col items-center mr-[20px]">
                <img
                  src="https://via.placeholder.com/100x100"
                  alt="Image 4"
                  className="w-[170px] h-[170px] object-cover"
                />
                <p className="text-sm mt-1 uppercase ">Image 4</p>
              </div>
            </div>
          </div>

          {/* Mobile View Adjustments */}
          {/* <div className="md:hidden flex flex-col gap-2">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
