import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import AccordionMenu from "./AccordionMenu/AccordionMenu";
import Card from "../Card/Card";

export const Catalogue = () => {

  const data = [
    {
      title: "meat",
      price: "25",
      imageUrl: "http://13.127.97.224/images/pexels-kristya-nugraha-329778-5045090.jpg",
      // quantity: "4",
      variation: "slider"
    },
    {
      title: "meat",
      price: "25",
      imageUrl: "http://13.127.97.224/images/goatrack-31.jpg",
      // quantity: "4",
      variation: "quantity"
    },
    {
      title: "meat",
      price: "25",
      imageUrl: "http://13.127.97.224/images/goatrack-31.jpg",
      // quantity: "4",
      variation: "quantity"
    },
    // Add more items as needed
  ];

  return (
    <>
      <div className="container ">
        <div className="row lg:mx-[50px] lg:px-[15px]  ">
          <div className="col-3 hidden lg:inline-block">
            {/*------------ Accordion Menu ----------------*/}
            <AccordionMenu />
          </div>
          <div className="col-9">
            {/*------------ Slider ----------------*/}
            <div className="hidden lg:inline">
              <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
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
            {/*------------ Filter functionality ----------------*/}
            <div
              style={{ color: "rgb(33, 37, 41)" }}
              className="flex flex-col lg:flex-row items-end lg:items-start lg:justify-end gap-4 p-4 my-[25px]"
            >
              {/* Filter buttons */}
            </div>
            {/*------------ Cards ----------------*/}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
              {data.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  variation={item.variation}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalogue;
