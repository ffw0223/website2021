import React, { useState, useEffect } from "react";
import "./style.scss";
import "./style1280.scss";
import "./style428.scss";
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import vedio from "../assets/vedio.mp4";
import vedioEn from "../assets/vedioEn.mp4";
import aresLogoImg from "../assets/ares-logo.png";
import logoImg from "../assets/logo.png";
import parityImg from "../assets/parity.png";
import topImg from "../assets/top.png";

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
    topTip_m: "ARES Official ERC-20 Contract is 0x358A...Bd523",
    desc: t("$ARES A Decentralized Cross-Chain Oracle Service Protocol"),
    farmsUrl: "https://trojan.aresprotocol.io/",
    farmBtnText: t("Farms"),
    uniswapUrl:
      "https://app.uniswap.org/#/swap?outputCurrency=0x358AA737e033F34df7c54306960a38d09AaBd523&use=V2",
    uniswapBtnText: t("Uniswap"),
    parity: t("Ares Protocol is based on Substrate"),
    substrateUrl: "https://www.parity.io/technologies/substrate/",
    substrateBtnText: "Substrate",
    navs: [
      {
        name: t("Networks"),
        children: [
          {
            name: t("Ares Protocol"),
            className: "aresProtocol",
            url: "",
          },
          {
            name: t("Mars"),
            url: "",
          },
        ],
      },
      {
        name: t("Introduction"),
        children: [
          {
            name: t("Technology"),
            id: "Technology",
            url: "#Technology",
            minScrollTop: 998,
            maxScrollTop: 2051,
            minScrollTop1280: 759,
            maxScrollTop1280: 1562,
          },
          {
            name: t("Economics"),
            id: "Economics",
            url: "#Economics",
            minScrollTop: 2051,
            maxScrollTop: 3097,
            minScrollTop1280: 1562,
            maxScrollTop1280: 2359,
          },
          {
            name: t("Application"),
            id: "Application",
            url: "#Application",
            minScrollTop: 3097,
            maxScrollTop: 10000,
            minScrollTop1280: 2359,
            maxScrollTop1280: 10000,
          },
        ],
      },
      {
        name: t("About"),
        children: [
          {
            name: t("Documentation"),
            id: "Documentation",
            url: "https://docs.aresprotocol.io/#/",
          },
          {
            name: t("Contact"),
            className: "Contact",
            url: "#sendEmail",
          },
        ],
      },
      {
        name: t("Buy Token"),
        id: "Buy Token",
        url: "https://www.gateio.pro/cn/trade/ARES_USDT",
      },
      {
        name: "Apps",
        id: "Apps",
        url: "https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fgladios.aresprotocol.io/#/explorer",
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
    price: 0.04,
    currency: "USD",
    symbol: "$",
    point: 3.32,
    rank: 1142,
    rankText: t("Rank"),
    marketCap: 6400053.37,
    marketCapText: t("MarketCap"),
    volume: 809945.75,
    volumeText: t("Volume"),
  };
  const [addressSwitch, setAddressSwitch] = useState(true);
  const [languageStatus, setlanguageStatus] = useState(false);
  const [scrollTop, setScroll] = useState(0);
  const [phone, setPhone] = useState(false);
  const [vedioSwich, setVedioStauts] = useState(false);
  const [language, setlanguage] = useState(
    head.language.select[head.language.localIndex].name
  );
  const [aresData, setAresData] = useState(ares);
  const [navChildActive, setNavChildActive] = useState<null | number>(null);
  useEffect(() => {
    const svg = document.getElementById("eq8NxO51czK1");
    const vedioImg = document.querySelector(".video-img");
    vedioImg?.appendChild(svg!);
    svg?.setAttribute("style", "display:block");
    const fetchData = async () => {
      const res = (await getAresAll()) as unknown as aresData;
      const newAresData = Object.assign(JSON.parse(JSON.stringify(aresData)), {
        price: res?.price?.toFixed(3),
        marketCap: res?.market_cap?.toFixed(2),
        point: res?.percent_change?.toFixed(2),
        rank: res?.rank,
        volume: res?.volume?.toFixed(2),
      });
      setAresData(newAresData);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const isPhone =
      (document?.documentElement?.clientWidth || document?.body?.clientWidth) <=
      990;
    isPhone && setPhone(isPhone);
    setScroll(
      document?.documentElement?.scrollTop || document?.body?.scrollTop
    );
    if (phone) {
      document.write(
        `<meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">`
      );
    }
    window.onscroll = () => {
      setScroll(
        document?.documentElement?.scrollTop || document?.body?.scrollTop
      );
    };
    document.body.onclick = (e) => {
      const navChildClassName = (e?.target as any)?.getAttribute("class");
      if (navChildClassName?.includes("nav-child")) return;
      setNavChildActive(null);
    };
  }, []);

  return (
    <>
      <section className="head" id="Home">
        <div className={classnames("head-top", { fixed: !!scrollTop })}>
          <div className="head-top-address">
            {addressSwitch ? (
              <h2 className="address">
                <a href={`https://etherscan.io/token/0x358AA737e033F34df7c54306960a38d09AaBd523`}>
                  {phone ? head.topTip_m : head.topTip}
                </a>
                <span
                  className="close"
                  onClick={() => {
                    setAddressSwitch(false);
                  }}
                ></span>
              </h2>
            ) : null}
          </div>
          {phone ? (
            <div className=""></div>
          ) : (
            <div className="head-top-nav">
              <div className="nav">
                <div className="nav-left">
                  <a href="/">
                    <img src={logoImg} alt="" />
                  </a>
                </div>
                <div className="nav-right">
                  <ul className="list">
                    {head.navs.map((nav, index) => {
                      const {
                        children,
                        name,
                        url,
                        id,
                        minScrollTop,
                        maxScrollTop,
                        minScrollTop1280,
                        maxScrollTop1280,
                      } = nav as any;
                      let active = null;
                      if (
                        document.body.clientWidth >= 1280 &&
                        document.body.clientWidth <= 1679
                      ) {
                        active =
                          minScrollTop1280 &&
                          scrollTop >= minScrollTop1280 &&
                          maxScrollTop1280 &&
                          scrollTop < maxScrollTop1280;
                      } else {
                        active =
                          minScrollTop &&
                          scrollTop >= minScrollTop &&
                          maxScrollTop &&
                          scrollTop < maxScrollTop;
                      }
                      return (
                        <li key={id || index}>
                          {children ? (
                            <div className="item">
                              <span
                                className="nav-child-text"
                                onClick={() =>
                                  setNavChildActive(
                                    navChildActive === index ? null : index
                                  )
                                }
                              >
                                {name}
                              </span>
                              <span
                                onClick={() =>
                                  setNavChildActive(
                                    navChildActive === index ? null : index
                                  )
                                }
                                className={classnames("nav-child-arrow", {
                                  top: navChildActive === index,
                                  bottom: navChildActive !== index,
                                })}
                              ></span>
                              {navChildActive === index}
                              {navChildActive === index ? (
                                <div className="nav-child">
                                  {children.map((sNav: any, sindex: number) => {
                                    const {
                                      name,
                                      url,
                                      id,
                                      className,
                                      minScrollTop,
                                      maxScrollTop,
                                      minScrollTop1280,
                                      maxScrollTop1280,
                                    } = sNav as any;
                                    let active = null;
                                    if (
                                      document.body.clientWidth >= 1280 &&
                                      document.body.clientWidth <= 1679
                                    ) {
                                      active =
                                        minScrollTop1280 &&
                                        scrollTop >= minScrollTop1280 &&
                                        maxScrollTop1280 &&
                                        scrollTop < maxScrollTop1280;
                                    } else {
                                      active =
                                        minScrollTop &&
                                        scrollTop >= minScrollTop &&
                                        maxScrollTop &&
                                        scrollTop < maxScrollTop;
                                    }
                                    return (
                                      <a
                                        key={`${index}${sindex}`}
                                        className={classnames(
                                          "nav-child-item",
                                          className,
                                          {
                                            active,
                                          }
                                        )}
                                        href={url}
                                        target={
                                          url?.[0] === "#" ? "_self" : "_blank"
                                        }
                                        rel="noreferrer"
                                      >
                                        {name}
                                      </a>
                                    );
                                  })}
                                </div>
                              ) : null}
                            </div>
                          ) : (
                            <a
                              className={classnames("item", id, {
                                active,
                              })}
                              href={url}
                              target={url?.[0] === "#" ? "_self" : "_blank"}
                              rel="noreferrer"
                            >
                              {name}
                            </a>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="language">
                    <p className="language-name">
                      <span
                        className={classnames("one", {
                          isShowLanguage: languageStatus,
                        })}
                        onClick={(e) => {
                          setlanguageStatus(!languageStatus);
                          if ((e.target as any).innerText === "EN") {
                            head.language.localIndex = 0;
                          } else {
                            head.language.localIndex = 1;
                          }
                          const language =
                            head.language.select[head.language.localIndex].name;
                          setlanguage(language);
                          document
                            .querySelector("#root")
                            ?.setAttribute(
                              "class",
                              head.language.select[head.language.localIndex].id
                            );
                          setlanguageStatus(!languageStatus);
                          i18n.changeLanguage(
                            head.language.select[head.language.localIndex].id
                          );
                        }}
                      >
                        {language === "EN" ? "EN" : "CN"}
                      </span>
                      {languageStatus ? (
                        <span
                          className="two"
                          onClick={(e) => {
                            setlanguageStatus(!languageStatus);
                            if ((e.target as any).innerText === "EN") {
                              head.language.localIndex = 0;
                            } else {
                              head.language.localIndex = 1;
                            }
                            const language =
                              head.language.select[head.language.localIndex]
                                .name;
                            document
                              .querySelector("#root")
                              ?.setAttribute(
                                "class",
                                head.language.select[head.language.localIndex]
                                  .id
                              );

                            setlanguage(language);
                            setlanguageStatus(!languageStatus);
                            i18n.changeLanguage(
                              head.language.select[head.language.localIndex].id
                            );
                          }}
                        >
                          {language === "EN" ? "CN" : "EN"}
                        </span>
                      ) : null}
                    </p>
                    <span
                      onClick={(e) => {
                        setlanguageStatus(!languageStatus);
                      }}
                      className={classnames("language-arrow", {
                        top: languageStatus,
                        bottom: !languageStatus,
                      })}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <header className="head-con">
          <div
            className="video-img"
            onClick={() => setVedioStauts(!vedioSwich)}
          ></div>
          <div className="head-content">
            <div className="head-warp">
              <p className="content-desc">{head.desc}</p>
              <p className="content-btn">
                <a
                  href={head.farmsUrl}
                  className="farmBtnText"
                  target="_blank"
                  rel="noreferrer"
                >
                  {head.farmBtnText}
                </a>
                <a
                  className="uniswapBtnText"
                  href={head.uniswapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {head.uniswapBtnText}
                </a>
              </p>
              <div className="substrat">
                <img className="substratLogo" src={parityImg} alt="" />
                <span className="parity">{head.parity}</span>
                <a
                  className="substrateBtnText"
                  href={head.substrateUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {head.substrateBtnText}
                </a>
                {vedioSwich ? (
                  <div className="video">
                    <video
                      className="video-con"
                      autoPlay
                      src={language === "EN" ? vedioEn : vedio}
                      controls={true}
                    >
                      你的浏览器不支持
                    </video>
                    <span
                      className="video-mask"
                      onClick={() => setVedioStauts(!vedioSwich)}
                    ></span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="head-content-line"></div>
        </header>
        <img
          className={classnames("toTop", { active: scrollTop >= 500 })}
          src={topImg}
          alt=""
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        />
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
            <p className="usd-text">{ares.rankText}</p>
            <p className="usd-value">{aresData.rank}</p>
          </li>
          <li className="usd-marketCap verticalBar">
            <p className="usd-text">{ares.marketCapText}</p>
            <p className="usd-value">
              {aresData.symbol}
              {aresData.marketCap} M
            </p>
          </li>
          <li className="usd-volume verticalBar">
            <p className="usd-text">{ares.volumeText}</p>
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
