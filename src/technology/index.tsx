import React, { useState } from "react";
import "./style.scss";
import { useTranslation } from 'react-i18next';
import classnames from "classnames";
import technology1Png from "../assets/technology1.png";
import technology2Png from "../assets/technology2.png";
import technology3Png from "../assets/technology3.png";
import technology4Png from "../assets/technology4.png";
import technology5Png from "../assets/technology5.png";

function Technology() {
  const { t } = useTranslation();
  const title = t("Technology Architecture");
  const desc =
    t("Ares is an on-chain verifying oracle protocol powered by Polkadot. It provides reliable off-chain data efficiently and in a trustless manner.");
  const oldlist = [
    {
      img: technology1Png,
      title: t("Aggregator"),
      desc: t("The aggregator obtains external request data through Scanner, sends the request to the Provider to process all Oracle requests, and uses VRF to ensure the randomness of the aggregator."),
      status: "isFront",
    },
    {
      img: technology2Png,
      title: t("Challenger"),
      desc: t("The challenger verifies the integrity and validity of the data submitted by the aggregator and submits fraudulent aggregator data and correct data to the Reputation Committee for rewards."),
      status: "isFront",
    },
    {
      img: technology3Png,
      title: t("Reputation Committee"),
      desc: t("By incentivizing validators and punishing malicious aggregators, the security of the Ares network is ensured. The Reputation Committee is fully self-governed by the community, running for the Reputation Committee through token mortgage and reputation weighting."),
      status: "isFront",
    },
    {
      img: technology4Png,
      title: t("Data Consumer"),
      desc: t("Data consumers can be objects that need to obtain external data in smart contracts, parachains, and DAPPs. They can provide various credible and compelling data for DEFI, prediction markets, and gambling."),
      status: "isFront",
    },
    {
      img: technology5Png,
      title: t("Node Operator"),
      desc: t("Node operators, as full nodes of the Ares network, verify data by comparing it with the locally stored data market to ensure the Ares network's security, and provide oracle RPC services."),
      status: "isFront",
    },
  ];
  const [list, setList] = useState(oldlist);

  return (
    <section className="technology" id='Technology'>
      <div className="technology-con">
        <h2 className="title">{title}</h2>
        <p className="desc">{desc}</p>
        <div className="con">
          <ul className="warp">
            {list.map((item, index) => {
              const { img, title, desc, status } = item;
              return (
                <li
                  key={item.title}
                  className="item"
                  onMouseEnter={() => {
                    const newItem = item;
                    newItem.status = "isBack";
                    list.splice(index, 1, newItem);
                    setList(list.slice(0));
                  }}
                  onMouseLeave={() => {
                    const newItem = item;
                    newItem.status = "isFront";
                    list.splice(index, 1, newItem);
                    setList(list.slice(0));
                  }}
                >
                  <div className={classnames("front", status)}>
                    <img src={img} alt="" />
                    <h2>{title}</h2>
                    <span className="info"></span>
                  </div>
                  <div className={classnames("back", status)}>
                    <span className="info"></span>
                    <p>{desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Technology;
