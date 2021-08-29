import React, { useState, useEffect } from "react";
import "./style.scss";
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import aresLogoImg from "../assets/ares-logo.png";
import logoImg from "../assets/logo.png";
import parityImg from "../assets/parity.png";
interface aresData {
  price: number;
  market_cap: number;
  percent_change: number;
  rank: number;
  volume: number;
}

async function getAresAll() {
  return new Promise((resolve) => {
    const url = "https://api.aresprotocol.io/api/getAresAll";
    const httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url, true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        const json = httpRequest.responseText;
        const result = JSON.parse(json);
        if (!result?.code && result?.message === "OK") {
          resolve(result?.data);
        }
      }
    };
  });
}

function Head() {
  const { t, i18n } = useTranslation();
  const head = {
    topTip: t(
      "ARES Official ERC-20 Contract is 0x358AA737e033F34df7c54306960a38d09AaBd523"
    ),
    desc: t("$ARES a Decentralized Cross-chain Oracle Service Protocol"),
    farmsUrl: "",
    farmBtnText: t("Farms"),
    uniswapUrl: "",
    uniswapBtnText: t("Uniswap"),
    parity: t("Ares Protocol is based on Substrate"),
    substrateUrl: "",
    substrateBtnText: t("Substrate"),
    navs: [
      {
        name: t("Home"),
        id: "Home",
        url: "",
      },
      {
        name: t("Technology"),
        id: "Technology",
        url: "",
      },
      {
        name: t("Economics"),
        id: "Economics",
        url: "",
      },
      {
        name: t("Application"),
        id: "Application",
        url: "",
      },
      {
        name: t("Documentation"),
        id: "Documentation",
        url: "",
      },
      {
        name: t("Buy Token"),
        id: "Buy Token",
        url: "",
      },
    ],
    language: {
      select: [
        {
          name: "EN",
          id: "en",
        },
        {
          name: "简体中文",
          id: "cn",
        },
      ],
      localIndex: 0,
    },
  };
  const ares = {
    name: "Ares Protocol (ARES)",
    price: "--",
    currency: "USD",
    symbol: "$",
    point: "--",
    rank: "--",
    rankText: "Rank",
    marketCap: "--",
    marketCapText: "marketCap",
    volume: "--",
    volumeText: "volume",
  };
  const [addressSwitch, setAddressSwitch] = useState(true);
  const [languageStatus, setlanguageStatus] = useState(false);
  const [language, setlanguage] = useState(
    head.language.select[head.language.localIndex].name
  );
  const [aresData, setAresData] = useState(ares);

  useEffect(() => {
    const fetchData = async () => {
      const res = (await getAresAll()) as unknown as aresData;
      const newAresData = Object.assign(JSON.parse(JSON.stringify(aresData)), {
        price: res?.price?.toFixed(2),
        marketCap: res?.market_cap?.toFixed(2),
        point: res?.percent_change?.toFixed(2),
        rank: res?.rank,
        volume: res?.volume?.toFixed(2),
      });
      setAresData(newAresData);
    };
    fetchData();
  }, [aresData]);

  return (
    <>
      <section className="head">
        {addressSwitch ? (
          <h2 className="address">
            {head.topTip}
            <span
              className="close"
              onClick={() => {
                setAddressSwitch(false);
              }}
            ></span>
          </h2>
        ) : null}

        <header className="head-con">
          <div className="head-content">
            <div className="head-warp">
              <div className="nav">
                <div className="nav-left">
                  <a href="/">
                    <img src={logoImg} alt="" />
                  </a>
                </div>
                <div className="nav-right">
                  <ul className="list">
                    {head.navs.map((nav, index) => {
                      const { name, url, id } = nav;
                      return (
                        <li key={id || index}>
                          <a className="item" href={url}>
                            {name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="language">
                    <span
                      className="language-name"
                      onClick={() => {
                        setlanguageStatus(!languageStatus);
                      }}
                    >
                      {language}
                    </span>
                    <span
                      onClick={() => {
                        setlanguageStatus(!languageStatus);
                      }}
                      className={classnames("language-arrow", {
                        top: languageStatus,
                        bottom: !languageStatus,
                      })}
                    ></span>
                    {languageStatus ? (
                      <select
                        className="language-select"
                        value={language}
                        onChange={(e) => {
                          if (e.target.value === "EN") {
                            head.language.localIndex = 0;
                          } else {
                            head.language.localIndex = 1;
                          }
                          const language =
                            head.language.select[head.language.localIndex].name;
                          setlanguage(language);
                          setlanguageStatus(!languageStatus);
                          i18n.changeLanguage(
                            head.language.select[head.language.localIndex].id
                          );
                        }}
                      >
                        {head.language.select.map((item) => {
                          const { name, id } = item;
                          return (
                            <option key={id} value={name}>
                              {id}
                            </option>
                          );
                        })}
                      </select>
                    ) : null}
                  </div>
                </div>
              </div>
              <p className="content-desc">{head.desc}</p>
              <p className="content-btn">
                <span className="farmBtnText">{head.farmBtnText}</span>
                <span className="uniswapBtnText">{head.uniswapBtnText}</span>
              </p>
              <div className="substrat">
                <img className="substratLogo" src={parityImg} alt="" />
                <span className="parity">{head.parity}</span>
                <span className="substrateBtnText">
                  {head.substrateBtnText}
                </span>
              </div>
            </div>
          </div>
        </header>
      </section>
      <section className={classnames("usd", { topClose: !addressSwitch })}>
        <ul className="usd-con">
          <li className="usd-logo">
            <img src={aresLogoImg} alt="" />
          </li>
          <li className="usd-usd">
            <p className="usd-name">{aresData.name}</p>
            <p>
              <span className="usd-price">{aresData.price}</span>
              <span className="usd-currency">{aresData.currency}</span>
            </p>
          </li>
          <li className="usd-point verticalBar">
            <span className="usd-num">{aresData.point}%</span>
            <span className="usd-direction"></span>
          </li>
          <li className="usd-rank verticalBar">
            <p className="usd-text">{aresData.rankText}</p>
            <p className="usd-value">{aresData.rank}</p>
          </li>
          <li className="usd-marketCap verticalBar">
            <p className="usd-text">{aresData.marketCapText}</p>
            <p className="usd-value">
              {aresData.symbol}
              {aresData.marketCap} M
            </p>
          </li>
          <li className="usd-volume verticalBar">
            <p className="usd-text">{aresData.volumeText}</p>
            <p className="usd-value">
              {aresData.symbol}
              {aresData.volume} M
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Head;
