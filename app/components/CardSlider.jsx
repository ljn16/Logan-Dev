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
        { id: 1, title: "Reactime", subtitle: "Time-travel debugging", color: "rgba(255, 87, 51, 0.9)", image: reactime },
        { id: 2, title: "Gia", subtitle: "Graphical interface analysis", color: "rgba(128, 0, 128, 0.9)", image: gia },
        { id: 3, title: "Cogntor", subtitle: "Cognitive tutor", color: "rgba(51, 255, 87, 0.9)", image: cogntor },
        { id: 4, title: "Work Brew", subtitle: "Work management tool", color: "rgba(51, 87, 255, 0.9)", image: workbrew },
        { id: 5, title: "Super Reader", subtitle: "Reading assistant", color: "rgba(243, 255, 51, 0.9)", image: superreader },
  ];

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
                slidesPerView={3}
        navigation
        loop={true}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div
              className="card"
              style={{ backgroundColor: card.color }}
            >
                            <div className="card-title">{card.title}</div>
                            <div className="card-subtitle">{card.subtitle}</div>
                            <Image src={card.image} alt={card.title} className="card-image" layout="responsive" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .slider-container {
          width: 80%;
          margin: auto;
        }
        .card {
          height: 400px;
          border-radius: 10px;
          display: flex;
                    flex-direction: column;
                    justify-content: space-between;
          align-items: center;
          font-size: 1.5rem;
          color: white;
          font-weight: bold;
                    padding: 20px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
        }
                .card-image {
                    max-width: 100%;
                    max-height: 100px;
                }
                .card-title {
                    margin-bottom: 10px;
                }
                .card-subtitle {
                    font-size: 1rem;
                    margin-bottom: 10px;
                }
      `}</style>
    </div>
  );
};

export default CardSlider;