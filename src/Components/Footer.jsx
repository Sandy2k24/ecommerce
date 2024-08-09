import React from "react";
import logo from "../assets/logo.png";
import vis_icon from "../assets/visa_icon.png";
import American_Express_icon from "../assets/American_icon.png";
import MasterCard_icon from "../assets/Mastercard_icon2.png";
import { useMediaQuery } from "react-responsive";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <footer style={{ backgroundColor: 'rgb(222, 226, 230)' }}  className=" w-full text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left pt-[50px]">
      <div className="text-center  mt-[48px]  lg:mx-[50px] px-[15px] ">
        <div className="grid-1 grid lg:gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- green  section --> */}
          <div className="mb-[16px] lg:w-[300px] lg:px-[17px] text-sm  lg:text-left   ">
            <h6 className=" flex items-center justify-center lg:justify-start  mb-[16px]  uppercase ">
              <a href="/ecommerce/home">
                <img src={logo} alt="Logo" className="h-[74px] w-[200px] " />
              </a>
            </h6>
            <span className=" flex items-center justify-center lg:justify-start mb-[20px] whitespace-nowrap text-sm ">
              <FaLocationDot className="text-black "/> Shop 13, 326 Great Western Hwy,
              <span className=" lg:hidden">Wentworthville</span>
            </span>
            <p className="mb-[20px] text-sm hidden lg:inline-block ">
              Wentworthville
            </p>
            <p className="flex mb-[20px] text-sm items-center justify-center  lg:justify-start">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              431695219
            </p>  
            <p className="flex lg:flex-col items-center text-sm mb-[16px]  justify-center lg:justify-start lg:items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-1 lg:mb-[14px] h-4 w-4 text-black"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              contact@greenfarmmeatnswhalal.com.au
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className=" mb-[24px] px-[15px] lg:ml-[20px]  lg:text-left">
            <h6 className="mb-[10px] flex justify-center lg:justify-left font-bold   md:justify-start text-black">
              Useful Links
            </h6>
            <p className="mb-[10px]">
              <a className="text-neutral-600 dark:text-neutral-200 text-sm">
                Your Account
              </a>
            </p>
            <p className="mb-[10px]">
              <a className="text-neutral-600 dark:text-neutral-200 text-sm">
                Privacy & Terms
              </a>
            </p>
            <p className="mb-[10px]">
              <a className="text-neutral-600 dark:text-neutral-200 text-sm">
                About
              </a>
            </p>
            <p>
              <a className="text-neutral-600 dark:text-neutral-200 text-sm  ">
                Contact
              </a>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="  mb-[24px] px-[15px]  lg:text-left">
            <h6 className="mb-[10px]  flex justify-center font-bold  md:justify-start   text-black">
              Useful Links
            </h6>
            <p className="mb-[10px] ">
              <a className="text-neutral-600 dark:text-neutral-200  text-sm">
                Home
              </a>
            </p>

            <p className="mb-[10px] ">
              <a className="text-neutral-600 dark:text-neutral-200 text-sm">
                Orders
              </a>
            </p>
            <p className="mb-[10px] ">
              <a className="text-neutral-600 dark:text-neutral-200  text-sm">
                Cart
              </a>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div className=" mb-[24px]   lg:text-left ">
            <h6 className="  flex justify-center font-bold  md:justify-start  text-black">
              Join Our Newsletter Now
            </h6>

            <p className="mb-[20px] flex items-center justify-center md:justify-start leading-9  text-sm">
              Get E-mail updates about our latest shop and special offers.
            </p>
            <div className="flex flex-col items-center md:items-start w-full lg:w-[300px]">
              <div className="flex flex-rows md:flex-row md:items-center w-full max-w-md md-2 lg:mx-0">
                <input
                  type="email"
                  placeholder="Enter your E-mail"
                  className=" w-3/4 px-2 lg:px-1 py-[14px]  focus:ring-2 outline-none focus:ring-blue-200"
                />
                <button
                  type="submit"
                  className=" py-[14px]  w-1/3 lg:w-1/2 border-2 border-red-700 text-white text-sm font-semibold  bg-red-700 "
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-100 "></div>
      {/* <!--Copyright section--> */}
      <div
        className={`lg:mx-[54px] py-[9px] px-[24px] text-center border  ${
          isDesktop ? "flex justify-center items-center " : "flex-col"
        }`}
      >
        <div
          className={`${
            isDesktop ? "flex-grow text-left " : " text-left"
          } `}
        >
          <span className="text-xs">Copyright © 2024 All rights reserved</span>
          <a
            className="font-semibold text-neutral-600 dark:text-neutral-400"
            href="https://tw-elements.com/"
          ></a>
        </div>

        <div
          className={`${
            isDesktop
              ? "flex  gap-2 items-center"
              : "flex justify-center items-center "
          }`}
        >
          <img src={vis_icon} alt="ATM Card 1" className="h-10" />
          <img src={American_Express_icon} alt="ATM Card 2" className="h-10" />
          <img src={MasterCard_icon} alt="ATM Card 3" className="h-10" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
