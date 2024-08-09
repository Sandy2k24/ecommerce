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
    <footer className=" w-full bg-zinc-200 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left pt-[50px]">
      <div className="text-center mt-[48px]  mx-[45px] px-[15px] ">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- green  section --> */}
          <div className="mb-[24px] lg:w-[280px]   text-sm  lg:text-left   ">
            <h6 className=" flex items-center justify-center lg:justify-start  mb-[10px]  uppercase ">
              <a href="/ecommerce/home">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-[74px] w-[200px] lg:h-[60px]"
                />
              </a>
            </h6>
            <span className=" flex items-center justify-center lg:justify-start mb-[20px] whitespace-nowrap text-xs gap-2">
              <FaLocationDot /> Shop 13, 326 Great Western Hwy,
            </span>
            <p className="mb-[20px] text-xs">Wentworthville</p>
            <p className="flex mb-[20px] text-xs items-center justify-center  lg:justify-start">
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
            <p className="flex items-center text-xs mb-[20px]  justify-center lg:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              contact@greenfarmmeatnswhalal.com.au
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className=" mb-[24px] px-[15px] lg:ml-[20px]  lg:text-left">
            <h6 className="mb-[10px] flex justify-center lg:justify-left font-bold uppercase md:justify-start">
              Useful Links
            </h6>
            <p className="mb-[20px]">
              <a className="text-neutral-600 dark:text-neutral-200">
                Your Account
              </a>
            </p>
            <p className="mb-[20px]">
              <a className="text-neutral-600 dark:text-neutral-200">
                Privacy & Terms
              </a>
            </p>
            <p className="mb-[22px]">
              <a className="text-neutral-600 dark:text-neutral-200">About</a>
            </p>
            <p>
              <a className="text-neutral-600 dark:text-neutral-200">Contact</a>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="mb-[24px] px-[15px]  lg:text-left">
            <h6 className="mb-[22px]  flex justify-center font-bold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-[22px] ">
              <a className="text-neutral-600 dark:text-neutral-200">Home</a>
            </p>

            <p className="mb-[22px] ">
              <a className="text-neutral-600 dark:text-neutral-200">Orders</a>
            </p>
            <p className="mb-[22px] ">
              <a className="text-neutral-600 dark:text-neutral-200">Cart</a>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div className=" mb-[24px]  lg:text-left ">
            <h6 className="mb-[22px]  flex justify-center font-bold uppercase md:justify-start">
              Join Our Newsletter Now
            </h6>

            <p className="mb-[22px] flex items-center justify-center md:justify-start">
              Get E-mail updates about our latest shop and special offers.
            </p>
            <div className="flex flex-col items-center md:items-start w-full">
              <div className="flex flex-rows md:flex-row md:items-center w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your E-mail"
                  className=" w-2/3 px-1 py-3 border border-gray-300   focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className=" py-3  w-1/3 lg:w-2/3 text-white text-sm font-semibold  bg-red-700 "
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-100 my-2"></div>
      {/* <!--Copyright section--> */}
      <div
        className={`lg:mx-[54px] py-[10px] px-[15px] text-center border ${
          isDesktop ? "flex justify-center items-center " : "flex-col"
        }`}
      >
        <div
          className={`${
            isDesktop ? "flex-grow text-left " : "mb-4 text-left"
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
