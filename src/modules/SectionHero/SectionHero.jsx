import st from './SectionHero.module.css';
import yoBaoHeader from '../../img/yo_bao-header.svg';
import hero0 from '../../img/hero_0.jpg';
import hero2 from '../../img/hero_2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y, EffectCube } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';


export const SectionHero = () => {

  return (
    // <section className={st.section_hero}>
    <section className={`${st.section_hero} container`}>
      <div className={st.section_hero_wrap}>
        <h1 className='visually-hidden'>Yo Bao Дух китайской еды</h1>
        {/* <img src={yoBaoHeader} alt='hero-slider illustration main' /> */}

        <Swiper
          className='hero_swiper'
          modules={[Navigation, Pagination, Autoplay, A11y, EffectCube]}
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={() => { }}
          onSwiper={(swiper) => { }}
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: false,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          navigation
          pagination={{ clickable: true }}
          loop='true'
        // initialSlide='1'
        // autoplay
        >
          <SwiperSlide>
            <img className={st.slide_image} src={yoBaoHeader} alt='hero-slider illustration main' />
          </SwiperSlide
          >
          <SwiperSlide>
            <img className={st.slide_image} src={hero2} alt='hero-slider delivery 2' />
          </SwiperSlide>

          {/* <SwiperSlide>
            <img className={st.slide_image} src={yoBaoHeader} alt='hero-slider illustration main' />
          </SwiperSlide>

          <SwiperSlide>
            <img className={st.slide_image} src={hero2} alt='hero-slider delivery 2' />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section >
  );
};
