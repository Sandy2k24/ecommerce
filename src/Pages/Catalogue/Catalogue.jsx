import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import AccordionMenu from "./AccordionMenu/AccordionMenu";
import Card from "../../Components/Card/Card";

export const Catalogue = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            {/*------------ Accordion Menu ----------------*/}
            <AccordionMenu />
          </div>
          <div className="col-9">
            {/*------------ Slider ----------------*/}
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
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
          <Card/>
        </div>
      </div>
    </>
  );
};

export default Catalogue