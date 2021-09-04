import React from "react";
import AwesomeSwiper from "react-awesome-swiper";
import { useTranslation } from 'react-i18next';
import economicModelImg from "../assets/economicModel.png";
import applicationScenarioImg from "../assets/applicationScenario.png";
import "./style.scss";
import "./style1280.scss";

function EconomicModelApplicationScenario() {
  const { t } = useTranslation();

  let economicModelRef = null;
  let applicationScenarioRef = null;
  const eeconomicModel = {
    title: t("Economic Model"),
    desc: t("The Ares token will be released to motivate all participants in the system and ensure the growthand development of the ecosystem through community governance."),
    swiper: [
      {
        title: t("Node Mortgage"),
        desc: t("Any third party can become a node to access the Ares network by collateralizing a small amount of ARES tokens. It provides oracle services to earn mining rewards."),
      },
      {
        title: t("Transaction Fee"),
        desc: t("For each oracle request, a processing fee needs to be paid to the node."),
      },
      {
        title: t("Arbitration"),
        desc: t("The aggregator or challenger is punished through the challenger's dispute, and a part of the fee will be rewarded to the reputation committee."),
      },
      {
        title: t("Treasury"),
        desc: t("In the Finance Bureau of the Ares network, treasury funds come from part of the transaction fees, the punishment of malicious nodes, and pledges' inflation. Treasury funds are used to reward challengers, make up for data demanders' loss, and ecological construction."),
      },
      {
        title: t("Community Governance"),
        desc: t("Anyone who holds the Ares pass has the right to govern, and can vote for protocol upgrades and reputation committee elections. The Reputation Committee ensures the security of the Ares network by incentivizing validators and punishing malicious nodes."),
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
    title:t("Application Scenario"),
    desc: t("Ares provides precise and reliable real-time off-chain data for DeFi use cases such as decentralized stable coins."),
    swiper: [
      {
        title: t("Decentralized Finance"),
        desc: t("Ares provides precise and reliable real-time off-chain data for DeFi use cases such as decentralized stable coins, AMMs, lending, insurance, and financial derivatives. It provides convenient out-of-the-box stable infrastructure for the development of DeFi projects."),
      },
      {
        title: t("Decentralized Identity"),
        desc: t("Decentralized identity solutions provide secure, controllable, and portable digital identities, and offer one-stop solutions to wallet providers, verification providers, DAPP developers, and infrastructure providers."),
      },
      {
        title: t("Internet of Things"),
        desc: t("Data parameters captured by IoT devices can be used to trigger smart contracts and create new business models within supply chains, smart home industries identity confirmation and more. Ares Protocol can work as a secure middleware between these IoT devices and the blockchain. It can verify the data coming from IoT devices before delivering it to the blockchain."),
      },
      {
        title: t("Prediction Market"),
        desc: t("Decentralized prediction markets, such as Augur and Gnosis, use the wisdom of the crowd to predict real-world results, such as presidential elections and sports betting results."),
      },
      {
        title: t("Games and NFTs"),
        desc: t("Ares Protocol can provide verifiable randomness on the chain which can be used to generate unpredictable gameplay scenarios in block chain games or enable the minting of NFTs."),
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
      <section className="economicModelApplicationScenario economicModel" id='Economics'>
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
      <section className="economicModelApplicationScenario applicationScenario" id='Application'>
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
