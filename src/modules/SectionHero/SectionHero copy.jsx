import st from './SectionHero.module.css';
import yoBaoHeader from '../../img/yo_bao-header.svg';
import hero0 from '../../img/hero_0.jpg';
import hero2 from '../../img/hero_2.jpg';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

register();

export const SectionHero = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log('swiper: ', swiper);
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    // <section className={st.section_hero}>
    <section className={`${st.section_hero} container`}>
      <div className={st.section_hero_wrap}>
        <h1 className='visually-hidden'>Yo Bao Дух китайской еды</h1>
        {/* <img src={yoBaoHeader} alt='hero-slider illustration main' /> */}

        <swiper-container
          ref={swiperElRef}
          slides-per-view='1'
          navigation='true'
          pagination='true'
          loop='true'
        >
          <swiper-slide>
            <img className={st.slide_image} src={yoBaoHeader} alt='hero-slider illustration main' />
          </swiper-slide>

          <swiper-slide>
            <img className={st.slide_image} src={hero0} alt='hero-slider delivery 0' />
          </swiper-slide>

          <swiper-slide>
            <img className={st.slide_image} src={yoBaoHeader} alt='hero-slider illustration main' />
          </swiper-slide>

          <swiper-slide>
            <img className={st.slide_image} src={hero2} alt='hero-slider delivery 2' />
          </swiper-slide>
        </swiper-container>
      </div>
    </section>
  );
};
