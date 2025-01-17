"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from 'next/image';

import reactime from '../images/products/reactime2.png'
import gia from '../images/products/Gia-View-NN.png'
import cogntor from '../images/products/Cogntor.png'
import workbrew from '../images/products/Workbrew.png'
import superreader from '../images/products/super-reader.png'

const CardSlider = () => {
  const cards = [
        { id: 1, title: "Reactime", subtitle: "Debug and Visualize React Apps", color: "rgba(255, 87, 51, 0.8)", image: reactime, link: 'https://github.com/open-source-labs/Reactime' },
        { id: 2, title: "Gia", subtitle: "Create Custom ML Models", color: "rgba(128, 0, 128, 0.8)", image: gia, link: 'https://github.com/ljn16/Gia' },
        { id: 3, title: "Cogntor", subtitle: "Measure Attention", color: "rgba(51, 255, 87, 0.8)", image: cogntor, link: 'https://github.com/ljn16/Cogntor--s' },
        { id: 4, title: "Work Brew", subtitle: "Find Cafes - measure and filter for sound, wifi speed", color: "rgba(51, 87, 255, 0.8)", image: workbrew, link: 'https://github.com/Work-Brew-Inc/Work-Brew' },
        { id: 5, title: "Super Reader", subtitle: "Reading - ADHD | Dyslexia", color: "rgba(243, 255, 51, 0.8)", image: superreader},
  ];

  return (
    <div className="w-4/5">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                1400: {
                    slidesPerView: 2,
                },
            }}
        navigation
        loop={true}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div
                className="h-72 md:h-[50vh] rounded-lg flex flex-col justify-between items-center text-white font-bold shadow-lg p-1"
                style={{ backgroundColor: card.color }}
            >
                <div className=" text-2xl">{card.title}</div>
                <div className="text-md text-center">{card.subtitle}</div>
                <Image 
                    src={card.image} 
                    alt={card.title} 
                    width={300} 
                    className="w-full h-5/6 rounded-lg" 
                    // layout="responsive" 
                />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;