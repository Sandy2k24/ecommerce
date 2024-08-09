import React, { useEffect } from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import {
  FaUser,
  FaShoppingCart,
  FaHome,
  FaLocationArrow,
  FaLanguage,
  FaSignOutAlt,
  FaClipboardList,
} from "react-icons/fa";
import { MdArrowDropDown, MdAccountCircle, MdEmail } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { RiInformation2Fill } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import SITE_CONFIG from "../controller";
import Login from "./Login/Login";
const NavBar = () => {
  const [islogin, setIslogin] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);
   let auth = localStorage.getItem('AuthToken');
    let user= localStorage.getItem('User')
    useEffect(()=>{
      if(auth && user){
        setIslogin(true)
      }else{
        setIslogin(false)
      }
    },[])
  // const handleDropdownToggle = (event) => {
  //   const dropdownMenu = event.currentTarget.nextElementSibling;
  //   dropdownMenu.classList.toggle("hidden");
  // };
  const navigate = useNavigate();
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };




    const [dropdowns, setDropdowns] = useState([]);
   
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch categories and store data concurrently
          const [categoriesResponse, storeResponse] = await Promise.all([
            axios.get(`${SITE_CONFIG.apiIP}/api/menu`, {
              headers: { Authorization: `Bearer ${SITE_CONFIG.apiToken}` },
            }),
            axios.get(`${SITE_CONFIG.apiIP}/api/storedata`, {
              headers: { Authorization: `Bearer ${SITE_CONFIG.apiToken}` },
            }),
          ]);
  
          // Extract data from responses
          const categories = JSON.parse(categoriesResponse.data[0].menu);
          const store = storeResponse.data;
  
          // Fetch subcategories for each category
          const subcategoryPromises = categories.map((category) =>
            axios.get(`${SITE_CONFIG.apiIP}/api/subcategory?category=${category.name}`, {
              headers: { Authorization: `Bearer ${SITE_CONFIG.apiToken}` },
            })
          );
  
          const subcategoryResponses = await Promise.all(subcategoryPromises);
          const dropdownsData = [];
  console.log(store)
          // Add store data
         

            dropdownsData.push({
              id: store[0]._id,
              title: store[0].name,
              items: store.map((store_name) => ({ text: store_name.name, href: "/" })),
            });
  
          // Add categories and subcategories
          categories.forEach((category, index) => {
            const subcategories = subcategoryResponses[index].data;
            dropdownsData.push({
              id: category._id,
              title: category.name,
              items: subcategories.map((sub) => ({
                text: sub.name,
                href: `/ecommerce/catalogue`,
              })),
            });
          });
          console.log(dropdownsData)
          setDropdowns(dropdownsData);
        
        } catch (err) {
         console.log(err)
        }
      };
  
      fetchData();
    }, []);
  





  const Dropdown = ({ items }) => (
    <div className="absolute right-0 min-w-48 mt-2 z-50 origin-top-right bg-black text-white">
      {items.map((item, index) => (
        <Link key={index} to={item.href} className="block p-2 text-white ">
          {item.text}
        </Link>
      ))}
    </div>
  );



  // const getAllProducts = async () => {
  //   try {
  //     const response = await axios.post(
  //       ${apiIPMongo}/api/product,
  //       {},
  //       {
  //         headers: {
  //           Authorization: Bearer ${apiToken},
  //         },
  //       }
  //     );
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  // const dropdowns = [
  //   {
  //     id: 1,
  //     title: "Green Farm Product Dee Why",
  //     items: [
  //       { text: "Green Farm Products Wentworthville" },
  //       { text: "Green Farm Product Dee Why" },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "CHICKEN",
  //     items: [
  //       { text: "ALL CHICKEN", href: "/cat" },
  //       { text: "CHICKEN BONELESS", href: "#" },
  //       { text: "MARINATED CHICKEN", href: "#" },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "GOAT",
  //     items: [
  //       { text: "GOAT CHOPS", href: "#" },
  //       { text: "GOAT WITH BONES", href: "#" },
  //       { text: "GOAT BONELESS", href: "#" },
  //       { text: "GOAT CUTS", href: "#" },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: "LAMB",
  //     items: [
  //       { text: "LAMB CHOPS", href: "#" },
  //       { text: "LAMB CUTS", href: "#" },
  //       { text: "LAMB WITH BONES", href: "#" },
  //       { text: "LAMB BONELESS", href: "#" },
  //       { text: "vvv", href: "#" },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     title: "PRAWNS",
  //     items: [{ text: "PRAWNS PACKED", href: "#" }],
  //   },
  //   {
  //     id: 6,
  //     title: "FISH",
  //     items: [
  //       { text: "BASA FILLET", href: "#" },
  //       { text: "bbbb", href: "#" },
  //     ],
  //   },
  // ];

  const handleClick = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  const handleLogin = ()=>{
      setOpenLogin(true)
  }
  
  return (
    <>
    <Login openLogin={openLogin} setOpenLogin={setOpenLogin} setIslogin={setIslogin}/>
    <nav
      style={{ background: "#be0601" }}
      className=" no-scrollbar  lg:bg-gray-100 fixed z-30 w-full"
    >
      <div
        className="  lg:bg-gray-100  h-[58px] lg:h-[70px] container mx-auto flex items-center justify-between lg:justify-evenly px-[12px] lg:px-[40px] gap-20  "
        // style={{ background: "#be0601" }}
      >
        {/* Toggle Icon for Mobile View */}
        <button
          className="lg:hidden p-2 text-white lg:text-black"
          onClick={handleMenuToggle}
        >
          <MdMenu className="text-xl" />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-0 left-0 w-full h-screen p-[20px] z-3  bg-gray-100 shadow-lg divide-y divide-gray-200">
            <div className="text-base ">
              <button
                className=" text-gray-600 hover:text-gray-800 h-[20px] w-[20px] mb-[20px]"
                onClick={handleMenuToggle}
              >
                <RxCross1 className="text-xl" />
              </button>
              <a
                className=" flex items-center gap-2  p-[10px] text-gray-800 hover:bg-gray-200"
                onClick={() => handleNavigation("/ecommerce/home")}
              >
                <FaHome />
                Home
              </a>
              <a
                className=" flex items-center gap-2  p-[10px] text-gray-800 hover:bg-gray-200"
                onClick={() => handleNavigation("/ecommerce/home")}
              >
                <MdAccountCircle />
                Profile
              </a>
              <a
                //href="#"
                className="flex items-center gap-2 p-[10px] text-gray-800 hover:bg-gray-200"
                onClick={() => handleNavigation("/ecommerce/home")}
              >
                <FaClipboardList />
                Orders
              </a>
              <a
                //href="#"
                className="flex items-center gap-2  p-[10px] text-gray-800 hover:bg-gray-200"
                onClick={() => handleNavigation("/ecommerce/home")}
              >
                <FaLocationArrow />
                Address
              </a>
              <a
                //href="#"
                className="flex items-center gap-2  p-[10px] text-gray-800 hover:bg-gray-200"
                onClick={() => handleNavigation("/ecommerce/home")}
              >
                <FaLanguage />
                Language
              </a>
              <a
                //href="#"
                className="flex items-center gap-2  p-[10px] text-gray-800 hover:bg-gray-200"
                onClick={() => handleNavigation("/ecommerce/home")}
              >
                <MdEmail />
                Contact Us
              </a>
              <a
                //href="#"
                className="flex items-center gap-2  p-[10px] text-gray-800 hover:bg-gray-200"
                onClick={() => handleNavigation("/ecommerce/home")}
              >
                <RiInformation2Fill />
                About
              </a>
              <a
                //href="#"
                className="flex items-center gap-2  p-[10px] text-gray-800 hover:bg-gray-200"
                onClick={() => handleNavigation("/ecommerce/logout")}
              >
                <FaSignOutAlt />
                Logout
              </a>
            </div>
          </div>
        )}

        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0 ">
          <NavLink to="/ecommerce/home">
            <img src={logo} alt="Logo" className="h-[38px] lg:h-[60px]" />
          </NavLink>
        </div>

        {/* Search Form */}
        <div className="flex-grow  h-[40px] hidden lg:flex">
          <form className="flex">
            <input
              type="search"
              placeholder="Search for products"
              className="form-input block min-w-[460px]  px-3 py-1 h-[40px]  rounded-md placeholder-gray-500   sm:text-sm"
            />
          </form>
        </div>

        {/* Account and Cart Links */}
        <div className="flex items-center space-x-4 text-sm font-normal text-black  ">
          <div className="relative">
            <button type="button" className="inline-flex items-center gap-2">
              {islogin ? (
                <a
                  className="inline-flex items-center gap-2"
                  onClick={handleDropdownToggle}
                >
                  <FaUser
                    onClick={() => navigate("/profile/user")}
                    className="text-white lg:text-black inline lg:hidden"
                  />
                  <FaUser className="text-black lg:text-black hidden lg:inline" />
                  <p className="hidden lg:inline">Account</p>
                  <MdArrowDropDown className=" hidden lg:inline" />
                </a>
              ) : (
                <a
                  className="inline-flex items-center gap-2  lg:text-black"
                  onClick={handleLogin}
                >
                  <span>
                    <FaUser className=" text-black" />
                  </span>
                  Login/Register
                </a>
              )}
            </button>

            {/* Dropdown Menu */}
            {islogin && (
              <div
                className={`absolute right-0 w-48 mt-2 z-3 origin-top-right bg-black divide-y shadow-lg ring-1 ring-black ring-opacity-5 text-white ${
                  isDropdownOpen ? "block" : "hidden"
                }`}
              >
                <div className="p-1">
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600"
                  >
                    Settings
                  </a>
                  <a
                    href="/orders"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600"
                  >
                    Orders
                  </a>
                  <hr className="my-1 border-gray-200" />
                  <a
                    href="/address"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600"
                  >
                    Address
                  </a>
                  <a
                    href="/logout"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600"
                  >
                    Logout
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Button for big screens (bove 1024px) */}
          <Link to={`/ecommerce/cart`}>
          <button className="hidden lg:inline-flex items-center gap-2 text-black  ">
            <span>
              <FaShoppingCart />
            </span>
            Cart
          </button>
          </Link>

          {/* Button for small screens (below 1024px) */}
          <Link to={`/ecommerce/cart`}>
          <button className="inline-flex lg:hidden items-center text-white">
            <span className="text-xl ">
              <FaShoppingCart />
            </span>
          </button>
          </Link>
        </div>
      </div>

      {/* Search the produucts -2 */}
      <div className="bg-white  h-[40px]  text-base lg:hidden text-white">
        <form className="flex">
          <input
            type="search"
            placeholder="Search for products"
            className="form-input block w-full h-[40px] px-[10px] py-[1px]  placeholder-gray-500 sm:text-sm"
          />
        </form>
      </div>

      <div className="hidden lg:flex bg-gray-100 lg:bg-custom-red h-[50px] relative space-x-4  items-center justify-between lg:justify-evenly text-white  text-base px-[40px]">
        {dropdowns.map(({ id, title, items }) => (
          // <div key={id} className={`relative ${id === 1 ? 'block lg:hidden' : ' hidden lg:block'}`}>
          <div key={id} className="relative ">
            <button
              className="flex items-center gap-2 "
              onClick={() => handleClick(id)}
            >
              {id === 1 && <FaLocationDot />}
              {title}
              <MdArrowDropDown />
            </button>
            {openDropdown === id && <Dropdown items={items} />}
          </div>
        ))}
      </div>
      <div className="lg:hidden bg-stone-300 lg:bg-custom-red h-[40px] relative  mx-auto px-[10px] py-[5px] text-base  items-center justify-between  text-gray-500 ">
        {dropdowns.map(({ id, title, items }) => (
          <div
            key={id}
            className={`relative ${
              id === 1 ? "block lg:hidden" : " hidden lg:block"
            }`}
          >
            <button
              className="flex items-center  text-center gap-2 underline font-bold "
              onClick={() => handleClick(id)}
            >
              {id === 1 && <FaLocationDot />}
              {title}
            </button>
            {/* {openDropdown === id && <Dropdown items={items} />} */}
          </div>
        ))}
      </div>
    </nav>
    </>
  );
};

export default NavBar;
