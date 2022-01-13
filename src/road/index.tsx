import React from "react";
import "./style.scss";
import "./style1280.scss";
import { useTranslation } from "react-i18next";
import roadIcon from "../assets/road.png";
import roadLogo from "../assets/link-logo-btn.png";
import AwesomeSwiper from "react-awesome-swiper";

function Road() {
  let swiperRef = null;
  const { t } = useTranslation();
  const title = t("Road Map");
  const desc = t(
    "All you need is the plan, the road map, and the courage to press on to your destination."
  );
  const data = [
    {
      year: "2020",
      envy: "Q4",
      text: [
        t("Issue White Paper 1.0"),
        t("Core protocol design"),
        t("Apply for Web3 fund grant"),
        t("Develop prototype based on \"pallet\" and \"off-chain work\""),
      ],
    },
    {
      year: "2021",
      envy: "Q1",
      text: [
        t("Improve the economic model"),
        t("Integrate Ares Protocol in Polkadot Defi projects"),
        t("Obtain Web3 fund grant"),
      ],
    },
    {
      year: "2021",
      envy: "Q2",
      text: [
        t("Publish Technology Yellow Paper"),
        t("Launch test network"),
        t(
          "Realize the random selection of aggregators and on chain aggregation"
        ),
        t("Listing on the secondary market"),
      ],
    },
    {
      year: "2021",
      envy: "Q3",
      text: [
        t("Strengthen the cross-chain interaction of the oracle users"),
        t("Improve challenger and Arbitration counsel model"),
        t(
            "Improve economic model design"
        ),
      ],
    },
    {
      year: "2021",
      envy: "Q4",
      text: [
        t("Implement random selection of aggregators and on-chain aggregation"),
        t("Launch test network"),
        t("Access to the eco-partner testing"),
      ],
    },
    {
      year: "2022",
      envy: "Q1",
      text: [
        t("Launch AresScan blockchain browser with trade history searching function."),
        t("Launch price prediction module in Gladios test network"),
        t("Acquire on-chain and off-chain data on Ares Protocol price quotation program"),
        t("Open up asset bridge between BSC & ETH network"),
        t("Publish updated official Wikipedia"),
      ],
    },
    {
      year: "2022",
      envy: "Q2",
      text: [
        t("Launch the main network"),
        t("Operate multi-channelled cooperation"),
        t("Enhance cross-company companionship"),
        t("Operate Eco-marathon developer activities"),
        t("Issue chain verified, VRF algorithm based game The Trojan Box"),
      ],
    },
  ];

  console.log("width", document.body.clientWidth  );
  if (document.body.clientWidth <= 1779) {
    console.log("width", document.body.clientWidth);
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
      // pagination: {
      //   el: ".swiper-pagination-team",
      //   bulletElement: "li",
      //   hideOnClick: true,
      //   clickable: true,
      // },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      // breakpoints: {
      //   640: {
      //     slidesPerView: 4,
      //     spaceBetween: 0
      //   }
      // },
      on: {
        slideChange: function () {},
      },
    };
    return (
      <section className="road m">
        <div className="road-con">
          <h2 className="title">{title}</h2>
          <p className="desc">{desc}</p>
          <div className="warp">
            <div className="team-con">
              <AwesomeSwiper
                ref={(ref) => (swiperRef = ref)}
                config={swiperConfig}
                className="team-swiper"
              >
                <div className="swiper-wrapper">
                  {/*{data.slice(0, 4).map((item, index) => {*/}
                  {/*  const { year, envy, text } = item;*/}
                  {/*  return (*/}
                  {/*    <div className="swiper-slide">*/}
                  {/*      <div className="item" key={index}>*/}
                  {/*        <h2 className="road-title">*/}
                  {/*          {year}*/}
                  {/*          <span>{envy}</span>*/}
                  {/*        </h2>*/}
                  {/*        <p className="road-info">*/}
                  {/*          <img src={roadIcon} alt="" />*/}
                  {/*        </p>*/}
                  {/*        <div className="road-text">*/}
                  {/*          {text.map((t, index) => (*/}
                  {/*            <p key={index}>{t}</p>*/}
                  {/*          ))}*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </div>*/}
                  {/*  );*/}
                  {/*})}*/}
                  <div className="swiper-slide">
                    <ul className="swiperItemWrapper">
                      {data.slice(0, 4).map((item, index) => {
                        const { year, envy, text } = item;
                        return (
                            <li className="wrapItem" key={index}>
                              <h2 className="wrap-road-title">
                                {year}
                                <span>{envy}</span>
                              </h2>
                              <p className="wrap-road-info">
                                <img src={roadIcon} alt="" />
                              </p>
                              <div className="wrap-road-text">
                                {text.map((t, index) => (
                                    <p key={index}>{t}</p>
                                ))}
                              </div>
                            </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="swiper-slide">
                    <ul className="swiperItemWrapper item2">
                      {data.slice(4, 8).map((item, index) => {
                        const { year, envy, text } = item;
                        return (
                            <li className="wrapItem" key={index}>
                              <h2 className="wrap-road-title">
                                {year}
                                <span>{envy}</span>
                              </h2>
                              <p className="wrap-road-info">
                                <img src={roadIcon} alt="" />
                              </p>
                              <div className="wrap-road-text">
                                {text.map((t, index) => (
                                    <p key={index}>{t}</p>
                                ))}
                              </div>
                            </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </AwesomeSwiper>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
              {/*<div className="swiper-pagination"></div>*/}
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="road">
      <div className="road-con">
        <div className="road-con-header">
          <h2 className="title">{title}</h2>
        </div>
        <p className="desc">{desc}</p>
        <ul className="warp">
          {data.map((item, index) => {
            const { year, envy, text } = item;
            return (
              <li className="item" key={index}>
                <h2 className="road-title">
                  {year}
                  <span>{envy}</span>
                </h2>
                <p className="road-info">
                  <img src={roadIcon} alt="" />
                </p>
                <div className="road-text">
                  {text.map((t, index) => (
                    <p key={index}>{t}</p>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Road;
