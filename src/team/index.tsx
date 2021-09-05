/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.scss";
import "./style1280.scss";
import { useTranslation } from 'react-i18next';
import twitterImg from "../assets/twitter.png";
import telegramImg from "../assets/telegram.png";
import AwesomeSwiper from "react-awesome-swiper";
const swiperConfig = {
  // loop: true,
  // autoplay: {
  //   delay: 3000,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: true,
  // },
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
  const title = t("Team Members");
  const desc =
    "The Ares Protocol Team combines knowledge, experience andpassion for cryptocurrencies. ";
  const list = [
    {
      position: t("Founder&Researcher"),
      name: t("Andy"),
      desc: t("Early investor of Polkadot. 10 years’ experience in Internet entrepreneurship. 5 years’ experience in the blockchain industry. Expert in economic modelling and distributed businesses."),
    },
    {
      position: t("Co-founder & CTO"),
      name: t("Keric"),
      desc: t("6 years’ experience in blockchain development. Proficient in public chain and parallel chain development. Participated in the development of multiple blockchain projects. Expert in Go and Rust. Early Follower of Polkadot."),
    },
    {
      position: t("COO"),
      name: t("Mory"),
      desc: t("Blockchain researchers. 5 years of experience in blockchain, expert in community building and community marketing, early participant of Polkadot."),
    },
    {
      position: t("Senior Software Engineer"),
      name: t("Nick"),
      desc: t("3 years' experience in blockchain development. Proficient in public chain development. Participated in the development of multiple blockchain projects. Expert in go，C++, and RUST."),
    },
    {
      position: t("Core Develop"),
      name: t("Sander Ruvins"),
      desc: t("Sander Ruvins Over 10 years of experiences in Development and Management, real time database products and exchange platform products expert. Currently focused on Blockchain Development and Cross-chain Technologies."),
    },
    {
      position: t("Core Develop"),
      name: t("Tiago Boat"),
      desc: t("Tiago Boat, more than 8 years of experience in-large-scale computing and algorithm, 5 years of cloud service experience, with many patents such as consensus algorithm and blockchain transaction."),
    },
    {
      position: t("Brand Advisor"),
      name: t("Emily"),
      desc: t("Graduated from master degree in journalism and communication and worked in the marketing department of Tencent. 4 years of experience in the field of blockchain and served as the co-founder of a blockchain medium. Early contributor of Polkadot and its ecosystem. She has managed to hold 50 online and offline activities so far."),
    },
    {
      position: t("UI Designer"),
      name: t("Rauli"),
      desc: t("Computer engineering graduate, specialized in graphic design and Adobe System tools, 8 years of experience in brand design and UX/UI design. Passionate about marketing, advertising and new technologies."),
    },
    {
      position: t("Community Advisor"),
      name: t("Erwin"),
      desc: t("With more than 2 years of experience in  blockchain industry, he has served as the head of the marketing division of a blockchain media. He is a KOL with a fan base of 10,000 and has extensive experience in community developing and operation."),
    },
    {
      position: t("Community / Growth Manger"),
      name: t("Vivian"),
      desc: t("She has 2 years of practical experience in community operation, systematic community developing knowledge from 0-1, responsible for absorbing visitors, retention / activation, transformation, and building fission module for the community. Good at creating KOL-oriented,  KOC assisted high-quality community operation model and high conversion rate of the system. "),
    },
    {
      position: t("Head of Russian market"),
      name: t("Фея/Feya"),
      desc: t("Graduated from Taras Shevchenko National University of Kyiv，master degree.  Worked for marketing in Ukraine for 6 years. Sufficient in marketing and operation skills, adept in languages such as  Russian, Ukranian, English and Chinese."),
    },
    {
      position: t("Head of Asia Pacific market"),
      name: t("Jasper"),
      desc: t("A marketing expert with 10 years of technical support experience in Japan and South Korea. He is experienced in strategic marketing in global scale and business development. He was an enthusiast for the fields of technical support, content editing and activity arrangement."),
    },
    {
      position: t("Overseas Community Manger"),
      name: t("Krali"),
      desc: t("He is adept in English and Mandarin. He has  2 years of experience in media and community operation. He is familiar with social media's marketing strategy and content editing, and highly sensitive to hotspots in the blockchain industry."),
    }
  ];
  const number = 3;
  const slides = Math.ceil(list.length / number) as number;
  return (
    <section className="team" id='Team'>
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
                          {/* <div className="top">
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
                          </div> */}
                          <h2 className="team-name">{name}</h2>
                          <h2 className="team-position">{position}</h2>
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
