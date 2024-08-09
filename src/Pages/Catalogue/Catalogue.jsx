import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination, Autoplay } from "swiper/modules";
import AccordionMenu from "./AccordionMenu/AccordionMenu";
import Card from "../../Components/Card/Card";

export const Catalogue = () => {
  return (
    <>
      <div className="container ">
        <div className="row lg:mx-[50px] lg:px-[15px]  pt-[108px] lg:pt-[130px]">
          <div className="col-3 hidden lg:inline-block">
            {/*------------ Accordion Menu ----------------*/}
            <AccordionMenu />
          </div>
          <div className="col-9 ">
            {/*------------ Slider ----------------*/}
            <div className="hidden lg:inline">
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper "
              >
                <SwiperSlide>
                  <img
                    src="http://13.127.97.224/images/pexels-kristya-nugraha-329778-5045090.jpg"
                    alt="..."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="http://13.127.97.224/images/goatrack-31.jpg"
                    alt="..."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="http://13.127.97.224/images/455604204slider-image3.jpg"
                    alt="..."
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            {/*------------ Filter fuctionality ----------------*/}
            <div
              style={{ Color: "rgb(33, 37, 41)" }}
              className=" flex flex-col lg:flex-row items-end lg:items-start lg:justify-end gap-4 p-4 my-[25px]  "
            >
              <div className="flex flex-wrap lg:flex-row gap-2 lg:gap-4">
                <p className="relative text-gray-800 py-[3px] px-[15px] rounded-md font-   border-1 border-transparent  transition-colors duration-300 focus:outline-none">
                  Short by:
                </p>
                <button className=" px-[15px] py-[3px] text-sm relative text-gray-800 rounded-md border-1 border-transparent hover:border-red-700 hover:text-red-700 transition-colors duration-300 focus:outline-none  active:text-red-700">
                  <span className="absolute inset-0 border-1 border-transparent rounded-md transition-colors duration-300 group-hover:border-red-700 group-hover:text-red-700"></span>
                  Popularity
                </button>
                <button className=" px-[15px] py-[3px] text-sm relative text-gray-800 rounded-md   border-1 border-transparent hover:border-red-700 hover:text-red-700 transition-colors duration-300 focus:outline-none  active:text-red-700">
                  <span className="absolute inset-0   border-1 border-transparent rounded-md transition-colors duration-300 group-hover:border-red-700 group-hover:text-red-700"></span>
                  High to Low
                </button>
                <button className=" px-[15px] py-[3px] text-sm relative text-gray-800 rounded-md   border-1 border-transparent hover:border-red-700 hover:text-red-700 transition-colors duration-300 focus:outline-none  active:text-red-700">
                  <span className="absolute inset-0   border-1 border-transparent rounded-md transition-colors duration-300 group-hover:border-red-700 group-hover:text-red-700"></span>
                  Low to High
                </button>
                <button className=" px-[15px] py-[3px] text-sm relative text-gray-800 rounded-md   border-1 border-transparent hover:border-red-700 hover:text-red-700 transition-colors duration-300 focus:outline-none  active:text-red-700">
                  <span className="absolute inset-0   border-1 border-transparent rounded-md transition-colors duration-300 group-hover:border-red-700 group-hover:text-red-700"></span>
                  A TO Z
                </button>
                <button className=" px-[15px] py-[3px] text-sm relative text-gray-800 rounded-md   border-1 border-transparent hover:border-red-700 hover:text-red-700 transition-colors duration-300 focus:outline-none  active:text-red-700">
                  <span className="absolute inset-0   border-1 border-transparent rounded-md transition-colors duration-300 group-hover:border-red-700 group-hover:text-red-700"></span>
                  Z TO A
                </button>
                <button className=" px-[15px] py-[3px] text-sm relative text-gray-800 rounded-md   border-1 border-transparent hover:border-red-700 hover:text-red-700 transition-colors duration-300 focus:outline-none  active:text-red-700">
                  <span className="absolute inset-0   border-1 border-transparent rounded-md transition-colors duration-300 group-hover:border-red-700 group-hover:text-red-700"></span>
                  % OFF High to Low
                </button>
              </div>
            </div>
          </div>
          <Card/>
        </div>
      </div>
    </>
  );
};

export default Catalogue;
