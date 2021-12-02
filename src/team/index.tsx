/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.scss";
import "./style428.scss";
import "./style1280.scss";
import { useTranslation } from "react-i18next";
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
  const desc = t(
    "Individual commitment to a group effort--that is what makes a team work, a company work, a society work, a civilization work."
  );
  const list = [
    {
      position: t("Founder & Researcher"),
      name: t("Andy Ray"),
      desc: t(
        "Early investor of Polkadot with ten years of experience in Internet fields. Five years of experience in the blockchain industry, expertise in economic modelling and distributed business."
      ),
    },
    {
      position: t("Co-founder & CTO"),
      name: t("Keric Frank"),
      desc: t(
        "Six years of experience in the blockchain industry with proficient public chain and parallel chain development skills. Participated in multiple blockchain projects. Expert in Go and Rust, an early follower of Polkadot."
      ),
    },
    {
      position: t("COO"),
      name: t("Mory Baker"),
      desc: t(
        "Blockchain researcher with five years of experience. Expert in community building and marketing, early participant of Polkadot."
      ),
    },
    {
      position: t("Senior Software Engineer"),
      name: t("Nick Martin"),
      desc: t(
        "Three years of experience in blockchain development. Proficient in public chain development. Participated in multiple blockchain projects. Expert in go, C++, and RUST."
      ),
    },
    {
      position: t("Core Develop"),
      name: t("Sander Ruvins"),
      desc: t(
        "Over ten years of experience in development and management. Expert in real-time products on database and exchange platforms. Currently, focused on blockchain and cross-chain technologies."
      ),
    },
    {
      position: t("Core Develop"),
      name: t("Tiago Boat"),
      desc: t(
        "More than eight years of experience in large-scale computing and algorithm. Five years of cloud service experience with a few patents, such as consensus algorithm and blockchain transaction."
      ),
    },
    {
      position: t("Brand Advisor"),
      name: t("Emily Anderson"),
      desc: t(
        "Mastered in journalism and the art of communication. Worked in the marketing division in Tencent. Four years of experience in the blockchain field, served in a blockchain outlet. Early contributor of Polkadot and held around 50 advertising sessions online and offline about blockchain."
      ),
    },
    {
      position: t("UI Designer & Spanish Market Manager"),
      name: t("Rauli Velaz"),
      desc: t(
        "Computer engineering graduate specialized in graphic design and Adobe System tools. Eight years of experience in brand and UX/UI design. Passionate in marketing, advertising, and new technologies."
      ),
    },
    {
      position: t("Community Consultant"),
      name: t("Erwin Clarke"),
      desc: t(
        "Served as the head of the marketing division of blockchain media. KOL With more than two years of experience in blockchain and 10,000 of a fanbase. Has extensive knowledge in community operation."
      ),
    },
    {
      position: t("Community Manager"),
      name: t("Vivian Carter"),
      desc: t(
        "Expert in launching, cultivating, transforming and activating community with KOL as a core KOC assisted operation model. Has excellent performing record in community feedback."
      ),
    },
    {
      position: t("Head of Russian Market"),
      name: t("Sofia Ivanov"),
      desc: t(
        "Mastered in Taras Shevchenko National University in Kyiv. Worked in the marketing field in Ukraine for six years. Sufficient marketing and operation skills, fluent in Russian, Ukrainian, English."
      ),
    },
    {
      position: t("Head of Asian Market"),
      name: t("Miles Damon"),
      desc: t(
        "A marketing expert with ten years of experience. Worked in strategic marketing in South Korea and Japan. Enthusiast in technical support fields and content editing."
      ),
    },
    {
      position: t("Overseas Community Manger"),
      name: t("Muller Ahmad"),
      desc: t(
        "Adept in English and Mandarin with professional translation skills. Worked over two years in media outlets. Experienced in social media’s marketing strategy, content editing and highly sensitive to the blockchain industry."
      ),
    },
  ];
  const number = window.screen.width <= 1279 ? 1 : 3;
  const slides = Math.ceil(list.length / number) as number;
  return (
    <section className="team" id="Team">
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
