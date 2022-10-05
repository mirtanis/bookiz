import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiperCSS.css";
import { Navigation, Pagination } from "swiper";

function HelpSwiper() {
  return (
    <Content>
      <SwipeContainer>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          watchOverflow={true}
          navigation={true}
          centeredSlides={true}
          initialSlide={0}
          slidesPerView={1}
          spaceBetween={0}
          allowTouchMove={false}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img
                src="assets/images/help1.PNG"
                alt="도움 이미지1"
                width="1440"
                height="600"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="assets/images/help2.PNG"
                alt="도움 이미지2"
                width="1440"
                height="600"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="assets/images/help3.PNG"
                alt="도움 이미지3"
                width="1440"
                height="600"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </SwipeContainer>
    </Content>
  );
}

export default HelpSwiper;

const Content = styled.div``;
const SwipeContainer = styled.div`
  .swiper {
    border-radius: 20px;
  }
`;
