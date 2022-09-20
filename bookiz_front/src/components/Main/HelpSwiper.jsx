import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import helpimg1 from "../../assets/images/help1.PNG";
import helpimg2 from "../../assets/images/help2.PNG";
import helpimg3 from "../../assets/images/help3.PNG";

function HelpSwiper() {
  return (
    <Content>
      <SwipeContainer>
        <Swiper
          watchOverflow={true}
          navigation={true}
          centeredSlides={true}
          initialSlide={0}
          slidesPerView={1}
          spaceBetween={0}
          allowTouchMove={false}
          modules={[Navigation]}
          className="mySwiper"
        >
          {/* {data.map((auction, idx) => ( */}
          <SwiperSlide
          // key={idx}
          >
            <div>
              <img
                src={helpimg1}
                alt="도움 이미지1"
                width="1440"
                height="600"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={helpimg2}
                alt="도움 이미지2"
                width="1440"
                height="600"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src={helpimg3}
                alt="도움 이미지3"
                width="1440"
                height="600"
              />
            </div>
          </SwiperSlide>
          {/* ))} */}
        </Swiper>
      </SwipeContainer>
    </Content>
  );
}

export default HelpSwiper;

const Content = styled.div``;
const SwipeContainer = styled.div``;
