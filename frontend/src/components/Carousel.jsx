import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Carousel() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/carousel(1).jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel(3).jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel(4).jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
