import React from "react";
import AwesomeSwiper from "react-awesome-swiper";
import economicModelImg from "../assets/economicModel.png";
import applicationScenarioImg from "../assets/applicationScenario.png";
import "./style.scss";

function EconomicModelApplicationScenario() {
  let economicModelRef = null;
  let applicationScenarioRef = null;
  const eeconomicModel = {
    title: "Economic Model",
    desc: "The Ares token will be released to motivate all participants in the system and ensure the growthand development of the ecosystem through community governance.",
    swiper: [
      {
        title: "Community Governance",
        desc: "Anyone who holds the Ares pass has the right to govern, and can vote for protocol upgrades and reputation committee elections. The Reputation Committee ensures the security of the Ares network by incentivizing validators and punishing malicious nodes.",
      },
      {
        title: "Community2 Governance",
        desc: "Anyone who holds the Ares pass has the right to govern, and can vote for protocol upgrades and reputation committee elections. The Reputation Committee ensures the security of the Ares network by incentivizing validators and punishing malicious nodes.",
      },
    ],
    swiperConfig: {
      loop: true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      preloadImages: false,
      lazy: true,
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  };
  const applicationScenario = {
    title: "Application Scenario",
    desc: "Ares provides precise and reliable real-time off-chain data for DeFi use cases such as decentralized stable coins.",
    swiper: [
      {
        title: "Prediction Market",
        desc: "Decentralized prediction markets, such as Augur and Gnosis, use the wisdom of the crowd to predict real-world results, such as presidential elections and sports betting results.",
      },
      {
        title: "Prediction2 Market",
        desc: "Decentralized prediction markets, such as Augur and Gnosis, use the wisdom of the crowd to predict real-world results, such as presidential elections and sports betting results.",
      },
      {
        title: "Prediction3 Market",
        desc: "Decentralized prediction markets, such as Augur and Gnosis, use the wisdom of the crowd to predict real-world results, such as presidential elections and sports betting results.",
      },
    ],
    swiperConfig: {
      loop: true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      preloadImages: false,
      lazy: true,
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  };
  return (
    <>
      <section className="economicModelApplicationScenario economicModel">
        <div className="economicModelApplicationScenario-con">
          <h2 className="title">{eeconomicModel.title}</h2>
          <p className="desc">{eeconomicModel.desc}</p>
          <div className="economicModelApplicationScenario-warp">
            <div className="economicModelApplicationScenario-img">
              <img src={economicModelImg} alt="" />
            </div>
            <div className="economicModelApplicationScenario-swiper">
              <AwesomeSwiper
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                ref={(ref) => (economicModelRef = ref)}
                config={eeconomicModel.swiperConfig}
                className="economicModelApplicationScenario-swiper-awesomeSwiper"
              >
                <div className="swiper-wrapper">
                  {eeconomicModel.swiper.map((item, index) => {
                    const { title, desc } = item || {};
                    return (
                      <div className="swiper-slide" key={index}>
                        <h2 className="economicModelApplicationScenario-swiper-title">
                          {title}
                        </h2>
                        <p className="economicModelApplicationScenario-swiper-info"></p>
                        <p className="economicModelApplicationScenario-swiper-desc">
                          {desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="swiper-pagination"></div>
              </AwesomeSwiper>
            </div>
          </div>
        </div>
      </section>
      <section className="economicModelApplicationScenario applicationScenario">
        <div className="economicModelApplicationScenario-con">
          <h2 className="title">{applicationScenario.title}</h2>
          <p className="desc">{applicationScenario.desc}</p>
          <div className="economicModelApplicationScenario-warp">
            <div className="economicModelApplicationScenario-swiper">
              <AwesomeSwiper
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                ref={(ref) => (applicationScenarioRef = ref)}
                config={applicationScenario.swiperConfig}
                className="economicModelApplicationScenario-swiper-awesomeSwiper"
              >
                <div className="swiper-wrapper">
                  {applicationScenario.swiper.map((item, index) => {
                    const { title, desc } = item || {};
                    return (
                      <div className="swiper-slide" key={index}>
                        <h2 className="economicModelApplicationScenario-swiper-title">
                          {title}
                        </h2>
                        <p className="economicModelApplicationScenario-swiper-info"></p>
                        <p className="economicModelApplicationScenario-swiper-desc">
                          {desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="swiper-pagination"></div>
              </AwesomeSwiper>
            </div>
            <div className="economicModelApplicationScenario-img">
              <img src={applicationScenarioImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EconomicModelApplicationScenario;
