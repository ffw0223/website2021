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
        t("Whitepaper 1.0 was issued"),
        t("Core protocol design"),
        t("WEB3 Foundation Grant Application"),
        t("Prototype development based on pallet and off-chain work"),
      ],
    },
    {
      year: "2021",
      envy: "Q2",
      text: [
        t("Technical yellow paper was issued"),
        t("Improve the cross-chain interaction of Oracle users"),
        t(
          "Realize the random selection of aggregators and on chain aggregation"
        ),
        t("Improve the challenger and arbitration council model"),
        t("Million dollars of financing accomplished"),
      ],
    },
    {
      year: "2021",
      envy: "Q4",
      text: [
        t("Improve economic model design"),
        t("Launch Testnet"),
        t("Integration of Ares Protocol into Polkadot DeFi projects"),
      ],
    },
    {
      year: "2022",
      envy: "Q2",
      text: [
        t("Launch Mainnet"),
        t("Carry out multi-channel service cooperation"),
      ],
    },
  ];
  if (window.screen.width <= 1279) {
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
              >
                <div className="swiper-wrapper">
                  {data.map((item, index) => {
                    const { year, envy, text } = item;
                    return (
                      <div className="swiper-slide" key={index}>
                        <div className="item" key={index}>
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
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="swiper-pagination"></div>
              </AwesomeSwiper>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
              <div className="swiper-pagination-team"></div>
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
          <img src={roadLogo} alt=""/>
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
