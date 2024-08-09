import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Card from "../Card/Card.jsx";
import {
  TruckIcon,
  ShieldCheckIcon,
  TagIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { SubCatHome } from "./SubCatHome.jsx";
import { FeatureItem } from "./FeatureItem.jsx";

const slides = [
  {
    image: "http://13.127.97.224/images/goatrack-31.jpg",
    heading1: "Cuts of meat for your BBQ's, dinners, special events and more.",
  },
  {
    image: "http://13.127.97.224/images/pexels-kristya-nugraha-329778-5045090.jpg",
    headingImg: "Green Farm Products (Halal Certified)",
    heading1: "Providing Beef, Lamb, Chicken and Goat",
    headingBtn: "CHECK OUR WIDE RANGE OF MEAT",
  },
  {
    image: "http://13.127.97.224/images/455604204slider-image3.jpg",
    headingImg: "Delivering Meats Sydney Wide",
    heading1: "VISIT US IN STORE OR BUY MEAT ONLINE",
    headingBtn: "CONTACT US FOR BULK ORDERING",
  },
];

const categories = [
  {
    id: 1,
    title: "Category 1",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJ7DjXXnxeODU1wdJd08ZOb-AD6zxra6XLQ&s",
  },
  {
    id: 2,
    title: "Category 2",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJ7DjXXnxeODU1wdJd08ZOb-AD6zxra6XLQ&s",
  },
  {
    id: 3,
    title: "Category 3",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJ7DjXXnxeODU1wdJd08ZOb-AD6zxra6XLQ&s",
  },
  {
    id: 4,
    title: "Category 4",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJ7DjXXnxeODU1wdJd08ZOb-AD6zxra6XLQ&s",
  },
  {
    id: 5,
    title: "Category 5",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJ7DjXXnxeODU1wdJd08ZOb-AD6zxra6XLQ&s",
  },
  {
    id: 6,
    title: "Category 6",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJ7DjXXnxeODU1wdJd08ZOb-AD6zxra6XLQ&s",
  },
  {
    id: 7,
    title: "Category 7",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJ7DjXXnxeODU1wdJd08ZOb-AD6zxra6XLQ&s",
  },
  {
    id: 8,
    title: "Category 8",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJ7DjXXnxeODU1wdJd08ZOb-AD6zxra6XLQ&s",
  },
];

const heading = ["CHICKEN", "LAMB", "GOAT", "BEEF", "MINCEW"];

const subCategories = [
  {
    id: 1,
    title: "All Chicken",
    imageUrl: "http://13.127.97.224/images/whole_chicken_1.jpg",
  },
  {
    id: 2,
    title: "Chicken Boneless",
    imageUrl: "http://13.127.97.224/images/whole_chicken_1.jpg",
  },
  {
    id: 3,
    title: "Marinated Chicken",
    imageUrl: "http://13.127.97.224/images/whole_chicken_1.jpg",
  },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCategoryPage, setCurrentCategoryPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    if (index < 0) {
      setCurrentSlide(slides.length - 1); // Loop to the last slide
    } else if (index >= slides.length) {
      setCurrentSlide(0); // Loop to the first slide
    } else {
      setCurrentSlide(index);
    }
  };

  const handleCategoryPageChange = (direction) => {
    const totalPages = Math.ceil(categories.length / 6);
    if (direction === "next") {
      setCurrentCategoryPage((prevPage) => (prevPage + 1) % totalPages);
    } else {
      setCurrentCategoryPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    }
  };

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  const displayedCategories = categories.slice(
    currentCategoryPage * 6,
    (currentCategoryPage + 1) * 6
  );

  return (
    <>
      {/* Image Carousel */}
      <div className="relative w-full overflow-hidden" style={{ height: "50vh" }}>
        {/* Carousel Container */}
        <div
          className="relative flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)`, height: '100%' }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full flex justify-center items-center relative"
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover"
              />
              {/* Heading Overlay */}
              {slide.headingImg && (
                <h1 className="absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs md:text-sm lg:text-lg xl:text-2xl font-bold bg-opacity-50 p-2 rounded">
                  {slide.headingImg}
                </h1>
              )}
              {slide.heading1 && (
                <h1 className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs md:text-sm lg:text-lg xl:text-4xl font-bold text-center bg-opacity-50 p-2 rounded">
                  {slide.heading1}
                </h1>
              )}
              {slide.headingBtn && (
                <Link to="/contact">
                  <button className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs md:text-sm lg:text-base font-bold p-2 md:p-3" style={{ background: '#2bbbad' }}>
                    {slide.headingBtn}
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 px-4 py-2 text-white bg-gray-800 bg-opacity-50 hover:bg-gray-700 rounded-full transition-colors duration-300"
          onClick={() => goToSlide(currentSlide - 1)}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 px-4 py-2 text-white bg-gray-800 bg-opacity-50 hover:bg-gray-700 rounded-full transition-colors duration-300"
          onClick={() => goToSlide(currentSlide + 1)}
        >
          &#10095;
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-400"} transition-colors duration-300`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* Top Picked Section */}
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold mb-4">TOP PICKED</h1>
        <Link to="/all-products" className="text-md text-red-500">
          View all
        </Link>
      </div>
      <div className="flex justify-center mb-8">
        <Card
          title="Card Title"
          price="$20.00 /kg"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJ7DjXXnxeODU1wdJd08ZOb-AD6zxra6XLQ&s"
          buttonText="Buy now"
          onButtonClick={handleButtonClick}
        />
      </div>

      {/* Shop by Category */}
      <div className="relative overflow-hidden bg-gradient-to-br from-red-600 to-yellow-400 py-8 my-8">
        <h1 className="text-center text-3xl font-bold mb-4 uppercase text-[#212529]">
          Shop by category
        </h1>
        <p className="text-center mb-8">Find everything you need in one go</p>
        <div className="flex justify-center items-center">
          <button
            className="px-4 py-2 text-white rounded-full"
            onClick={() => handleCategoryPageChange("prev")}
          >
            &#10094;
          </button>
          <div className="flex flex-nowrap overflow-x-auto scrollbar-hide">
            {displayedCategories.map((category) => (
              <div
                key={category.id}
                className="p-10 rounded-lg flex flex-col items-center sm:w-50 flex-shrink-0"
              >
                <img
                  src={category.imageUrl}
                  alt="Category"
                  className="w-40 h-40 rounded-full object-cover mb-4"
                />
                <h2 className="text-md font-semibold text-center">
                  {category.title}
                </h2>
              </div>
            ))}
          </div>
          <button
            className="px-4 py-2 text-white rounded-full"
            onClick={() => handleCategoryPageChange("next")}
          >
            &#10095;
          </button>
        </div>
      </div>

            {/* Banner Section */}
            <div className="flex flex-wrap py-6">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            className="w-full h-auto max-h-60 object-cover"
            src="http://13.127.97.224/images/whole_chicken_1.jpg"
            alt="Chicken Drumsticks"
          />
        </div>
      </div>

      {/* Subcategories */}
      <div className="relative overflow-hidden my-8">
        {heading.map((title, index) => (
          <SubCatHome
            key={index}
            heading={title}
            subCategories={subCategories}
          />
        ))}
      </div>

      {/* Featured Items */}
      <div className="flex flex-col md:flex-row md:gap-6 gap-10 md:justify-between m-8">
        <FeatureItem
          icon={<TruckIcon className="w-6 h-6 text-red-500" />}
          title="Free Shipping"
          description="On orders over $1000"
        />
        <FeatureItem
          icon={<ShieldCheckIcon className="w-6 h-6 text-red-500" />}
          title="Safe Online Payment"
          description="Secure transactions"
        />
        <FeatureItem
          icon={<TagIcon className="w-6 h-6 text-red-500" />}
          title="Value for Money"
          description="100% Fresh & Halal Certified"
        />
        <FeatureItem
          icon={<PhoneIcon className="w-6 h-6 text-red-500" />}
          title="Support"
          description="431-695-219"
        />
      </div>



      {/* Image Section */}
      <div className="flex flex-col gap-2 md:flex-row md:gap-0 mb-20">
  <div className="w-full md:w-1/2 flex items-center justify-center">
    <img
      className="w-full h-auto max-h-80 object-cover"
      src="http://13.127.97.224/images/whole_chicken_1.jpg"
      alt="Chicken Drumsticks"
    />
  </div>
  <div className="w-full md:w-1/2 flex items-center justify-center">
    <img
      className="w-full h-auto max-h-80 object-cover"
      src="http://13.127.97.224/images/whole_chicken_1.jpg"
      alt="Chicken Wings"
    />
  </div>
</div>
    </>
  );
};

export default HomePage;
