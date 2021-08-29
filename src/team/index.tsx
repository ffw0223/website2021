/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.scss";
import { useTranslation } from 'react-i18next';
import twitterImg from "../assets/twitter.png";
import telegramImg from "../assets/telegram.png";
import AwesomeSwiper from "react-awesome-swiper";
const swiperConfig = {
  loop: true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination-team",
    bulletElement: "li",
    hideOnClick: true,
    clickable: true,
  },
  on: {
    slideChange: function () {},
  },
};
function Team() {
  const { t } = useTranslation();
  let swiperRef = null;
  const title = "Team Members";
  const desc =
    "The Ares Protocol Team combines knowledge, experience andpassion for cryptocurrencies. ";
  const list = [
    {
      img: "",
      twitter: "https://swiperjs.com/react",
      telegram: "https://swiperjs.com/react",
      position: "CTO",
      name: "Keric",
      desc: "6 years’ experience in blockchain development. Proficient in public chain and parallel chain development. ",
    },
    {
      img: "",
      twitter: "https://swiperjs.com/react",
      telegram: "https://swiperjs.com/react",
      position: "Researcher",
      name: "Andy",
      desc: "Early investor of Polkadot. 10 years’ experience in Internet entrepreneurship. 5 years’ experience in the blockchain industry. ",
    },
    {
      img: "",
      twitter: "https://swiperjs.com/react",
      telegram: "https://swiperjs.com/react",
      position: "Core developer",
      name: "Sander Ruvins",
      desc: "Sander Ruvins Over 10 years of experiences in Development and Management.",
    },
    {
      img: "",
      twitter: "https://swiperjs.com/react",
      telegram: "https://swiperjs.com/react",
      position: "Core 1developer",
      name: "Sander2 Ruvins",
      desc: "Sander 1Ruvins Over 10 years of experiences in Development and Management.",
    },
  ];
  const number = 3;
  const slides = Math.ceil(list.length / number) as number;
  return (
    <section className="team">
      <div className="team-con">
        <AwesomeSwiper
          ref={(ref) => (swiperRef = ref)}
          config={swiperConfig}
          className="team-swiper"
        >
          <div className="swiper-wrapper">
            {new Array(slides).fill(null).map((slide, index) => {
              const newList: any[] = [];
              list.forEach((t, sindex) => {
                if (!index && sindex < index * number + number) {
                  newList.push(t);
                }
                if (
                  index > 0 &&
                  sindex < index * number + number &&
                  sindex >= (index - 1) * number + number
                ) {
                  newList.push(t);
                }
              });
              return (
                <div className="swiper-slide" key={index}>
                  <h2 className="title">{title}</h2>
                  <p className="desc">{desc}</p>
                  <div className="warp">
                    {newList.map((data, sindex) => {
                      const { img, twitter, telegram, position, name, desc } =
                        data;
                      return (
                        <div className="item" key={`${index}${sindex}`}>
                          <div className="top">
                            <div className="left">
                              <img className="headImg" src={img} alt="" />
                              <p className="position">
                                <span className="info"></span>{" "}
                                <span className="text">{position}</span>
                              </p>
                            </div>
                            <div className="right">
                              <a href={twitter} target="_blank">
                                <img
                                  className="twitter"
                                  src={twitterImg}
                                  alt=""
                                />
                              </a>
                              <a href={telegram} target="_blank">
                                <img
                                  className="telegram"
                                  src={telegramImg}
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <h2 className="team-name">{name}</h2>
                          <p className="team-desc">{desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </AwesomeSwiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination-team"></div>
      </div>
    </section>
  );
}

export default Team;
