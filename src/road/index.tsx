import React from "react";
import "./style.scss";
import "./style1280.scss";
import { useTranslation } from "react-i18next";
import roadIcon from "../assets/road.png";

function Road() {
  const { t } = useTranslation();
  const title = t("Road Map");
  const desc =
    t("A great road traveled, gaining experiences, adding successes and build a great project.");
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
      envy: "Q1",
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
      year: "2020",
      envy: "Q4",
      text: [
        t("Improve economic model design"),
        t("Launch Testnet"),
        t("Integration of Ares Protocol into Polkadot DeFi projects"),
      ],
    },
    {
      year: "2020",
      envy: "Q4",
      text: [
        t("Launch Mainnet"),
        t("Carry out multi-channel service cooperation"),
        t("Formal cooperation with enterprises"),
        t("Eco Marathon Developer Activities"),
      ],
    },
  ];
  return (
    <section className="road">
      <div className="road-con">
        <h2 className="title">{title}</h2>
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
