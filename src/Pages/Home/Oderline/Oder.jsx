import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import sider from '../../../assets/home/slide1.jpg'
import sider2 from '../../../assets/home/slide2.jpg'
import sider3 from '../../../assets/home/slide3.jpg'
import sider4 from '../../../assets/home/slide4.jpg'
import sider5 from '../../../assets/home/slide5.jpg'
import Section from '../../../Component/section/Section';


const Oder = () => {
    return (
        
             <section>
                <Section subheading="From 11:00am to 10:00pm"heading="oder online">

                </Section>
                 <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={sider} alt="" />
        </SwiperSlide>
        <SwiperSlide><img src={sider2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sider3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sider4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sider5} alt="" /></SwiperSlide>
      
      </Swiper>
             </section>
     
    );
};

export default Oder;