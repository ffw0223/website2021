import React, { useState, useEffect } from "react";
import "./style.scss";
// import "./style1280.scss";
// import "./style428.scss";
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import vedio from "../assets/vedio.mp4";
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
    desc: t("$ARES a Decentralized Cross-chain Oracle Service Protocol"),
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
        name: t("network"),
        id: "network",
        url: "#network",
        minScrollTop: -1,
        maxScrollTop: 998,
        minScrollTop1280: -1,
        maxScrollTop1280: 759,
      },
      {
        name: t("supply"),
        id: "supply",
        url: "#supply",
        minScrollTop: 998,
        maxScrollTop: 2051,
        minScrollTop1280: 759,
        maxScrollTop1280: 1562,
      },
      {
        name: t("deposit"),
        id: "deposit",
        url: "#deposit",
        minScrollTop: 2051,
        maxScrollTop: 3097,
        minScrollTop1280: 1562,
        maxScrollTop1280: 2359,
      },
      {
        name: t("crowdloan"),
        id: "crowdloan",
        url: "#crowdloan",
        minScrollTop: 3097,
        maxScrollTop: 10000,
        minScrollTop1280: 2359,
        maxScrollTop1280: 10000,
      },
      {
        name: t("app"),
        id: "app",
        url: "#app",
        minScrollTop: 3097,
        maxScrollTop: 10000,
        minScrollTop1280: 2359,
        maxScrollTop1280: 10000,
      }
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
  const [languageStatus, setlanguageStatus] = useState(false);
  const [scrollTop, setScroll] = useState(0);
  const [phone, setPhone] = useState(false);
  const [vedioSwich, setVedioStauts] = useState(false);
  const [language, setlanguage] = useState(
    head.language.select[head.language.localIndex].name
  );
  const [aresData, setAresData] = useState(ares);
  useEffect(() => {
    // const svg = document.getElementById("eq8NxO51czK1");
    // const vedioImg = document.querySelector(".video-img");
    // vedioImg?.appendChild(svg!);
    // svg?.setAttribute("style", "display:block");
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
  }, []);

  return (
    <>
      <section className="head" id="Home">
        <div className={classnames("head-top", { fixed: !!scrollTop })}>
          <a href="/" style={{ marginLeft: "3rem" }}>
            <img src={logoImg} height="80px" alt="" />
          </a>

          {phone ? (
            <div className=""></div>
          ) : (
            <div className="head-top-nav">
              <div className="nav">
                <div className="nav-right">
                  <ul className="list">
                    {head.navs.map((nav, index) => {
                      const {
                        name,
                        url,
                        id,
                        minScrollTop,
                        maxScrollTop,
                        minScrollTop1280,
                        maxScrollTop1280,
                      } = nav;
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
                          <a
                            className={classnames("item", {
                              active,
                            })}
                            href={url}
                            target={url[0] === "#" ? "_self" : "_blank"}
                            rel="noreferrer"
                          >
                            {name}
                          </a>
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
          <div className="head-content">
            <div className="head-warp">
              <img className="illustration" src="/images/illustration.svg" width="50%" />

              <div className="content-desc">
                <div className="content">{t("descriptionHomePage")}</div>

                <button className="button" style={{ marginTop: "2rem" }}>{t("joinCrowdloan")}</button>
              </div>
            </div>
          </div>
        </header>

        <div className="floatBlock">
          <div>{t("aboutMars")}</div>
        </div>
      </section>
    </>
  );
}

export default Head;
