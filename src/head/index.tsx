import { useState, useEffect, ReactElement } from "react";
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
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const settings = {
    // axis: 'vertical',
    autoPlay: true,
    infiniteLoop: true,
    interval: 5000,
    showArrows: false,
    showIndicators: false,
    showStatus: false,
    showThumbs: false,
  }
  const { t, i18n } = useTranslation();
  const head = {
    // topTip: t(
    //   "ARES Official ERC-20 Contract is 0x358AA737e033F34df7c54306960a38d09AaBd523"
    // ),
    // topTip_m: "ARES Official ERC-20 Contract is 0x358A...Bd523",
    desc: t("Ares Protocol - Decentralized Cross-Chain Oracle Platform"),
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
            url: "/mars",
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
        url: t("Trade ARES"),
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
        {
          name: "ES",
          id: "es",
        },
        {
          name: "JP",
          id: "jp",
        },
        {
          name: "RU",
          id: "ru",
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
  // const [addressSwitch, setAddressSwitch] = useState(true);
  const [mNav, setmNavSwitch] = useState(false);
  const [languageStatus, setlanguageStatus] = useState(false);
  const [scrollTop, setScroll] = useState(0);
  const [phone, setPhone] = useState(false);
  const [vedioSwich, setVedioStauts] = useState(false);
  const [language, setlanguage] = useState(
    head.language.select[head.language.localIndex].name
  );
  const [aresData, setAresData] = useState(ares);
  const [navChildActive, setNavChildActive] = useState<null | number>(null);
  const [tips, setTips] = useState<null | Array<any>>(null);

  const fetchTips = async () => {
    const result = await (await fetch("/tips.json?t=" + new Date().getTime())).json();
    setTips(result);
  };

  useEffect(() => {
    // const svg = document.getElementById("eHCcx25uMnP1");
    // const vedioImg = document.querySelector(".video-img");
    // vedioImg?.appendChild(svg!);
    // svg?.setAttribute("style", "display:block");
    const fetchData = async () => {
      const res = (await getAresAll()) as unknown as aresData;
      const newAresData = Object.assign(JSON.parse(JSON.stringify(aresData)), {
        price: res?.price?.toFixed(4),
        marketCap: res?.market_cap?.toFixed(2),
        point: res?.percent_change?.toFixed(2),
        rank: res?.rank,
        volume: res?.volume?.toFixed(2),
      });
      setAresData(newAresData);
    };
    fetchData();

    setTimeout(() => {
      fetchTips();
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const isPhone = window.screen.width <= 1279;
    isPhone && setPhone(isPhone);
    setScroll(
      document?.documentElement?.scrollTop || document?.body?.scrollTop
    );
    window.onscroll = () => {
      setScroll(
        document?.documentElement?.scrollTop || document?.body?.scrollTop
      );
    };
    document.body.onclick = (e) => {
      const navChildClassName = (e?.target as any)?.getAttribute("class");
      if (navChildClassName?.includes("nav-child") || navChildClassName?.includes("isShowLanguage")
          || navChildClassName?.includes("language-arrow"))
      {
        return;
      }
      setNavChildActive(null);
      setlanguageStatus(false);
    };
  }, []);

  const makeTips = () => {
    // {tips && tips.map(tip => {
    //   const ee = (<div>{tip.label}</div>)
    //   const e = ee as ReactElement;
    //   return e;
    // })}
    let tempArray = new Array<ReactElement>();
    if (tips) {
      tips.forEach(tip => {
        const e = (<div className="address" key={tip.id}>
          <a href={tip.link} target="_blank" rel="noreferrer">{tip.label}</a>
        </div>);
        tempArray.push(e as ReactElement);
      })
    }

    return tempArray;
  }

  return (
    <>
      <section className="head" id="Home">
        <div className={classnames("head-top", { fixed: !!scrollTop })}>
          {tips && (<div className="head-top-address">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              interval={5000}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}>{makeTips()}</Carousel>
          </div>)}
          {phone ? (
            <div className="mNav-warp">
              <div className="mNav">
                <a href="/" className="mlogo">
                  <img src={logoImg} alt="" />
                </a>
                <div
                  className="mnavbutton-con"
                  onClick={() => setmNavSwitch(true)}
                >
                  <span className="mnavbutton">-</span>
                </div>
              </div>
            </div>
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
                        window.screen.width >= 1280 &&
                        window.screen.width <= 1679
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
                              />
                              {navChildActive === index}
                              {navChildActive === index ? (
                                <div className="nav-child">
                                  {children.map((sNav: any, sindex: number) => {
                                    const {
                                      name,
                                      url,
                                      className,
                                      minScrollTop,
                                      maxScrollTop,
                                      minScrollTop1280,
                                      maxScrollTop1280,
                                    } = sNav as any;
                                    let active = null;
                                    if (
                                      window.screen.width >= 1280 &&
                                      window.screen.width <= 1679
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
                    <div className="language-name">
                      <span
                        className={classnames("one", {
                          isShowLanguage: languageStatus,
                        })}
                        onClick={(e) => {
                          setlanguageStatus(!languageStatus);
                        }}
                      >
                        {
                          language
                          // === "EN" ? "EN" : "CN"
                        }
                      </span>
                      {languageStatus ? (
                          <div className="language-dropdown">
                            {
                              head.language.select
                                  .filter((item, index) => item.name !== language)
                                  .map((item, index) => {
                                    return <span
                                        key={`language-${index}`}
                                        className={`two ${index !== 0 ? "three" : ""}`}
                                        onClick={(e) => {
                                          setlanguageStatus(!languageStatus);
                                          if ((e.target as any).innerText === "EN") {
                                            head.language.localIndex = 0;
                                          } else if ((e.target as any).innerText === "CN") {
                                            head.language.localIndex = 1;
                                          } else if ((e.target as any).innerText === "ES") {
                                            head.language.localIndex = 2;
                                          } else if ((e.target as any).innerText === "JP") {
                                            head.language.localIndex = 3;
                                          } else if ((e.target as any).innerText === "RU") {
                                            head.language.localIndex = 4;
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
                                      {item.id.toUpperCase()}
                                    </span>
                                  })
                            }
                          </div>
                      ) : null}
                    </div>
                    <span
                      onClick={(e) => {
                        setlanguageStatus(!languageStatus);
                      }}
                      className={classnames("language-arrow", {
                        top: languageStatus,
                        bottom: !languageStatus,
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {mNav ? (
          <div className={classnames("mNav-con", { isAddress: Boolean(tips) })}>
            <div className="mNav-list">
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
                    window.screen.width >= 1280 &&
                    window.screen.width <= 1679
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
                          <div className="nav-child-left">
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
                            />
                          </div>
                          {navChildActive === index ? (
                            <div className="nav-child">
                              {children.map((sNav: any, sindex: number) => {
                                const {
                                  name,
                                  url,
                                  className,
                                  minScrollTop,
                                  maxScrollTop,
                                  minScrollTop1280,
                                  maxScrollTop1280,
                                } = sNav as any;
                                let active = null;
                                if (
                                  window.screen.width >= 1280 &&
                                  window.screen.width <= 1679
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
                <div className="language-name">
                  <span
                    className={classnames("one", {
                      isShowLanguage: languageStatus,
                    })}
                    onClick={(e) => {
                      setlanguageStatus(!languageStatus);
                    }}
                  >
                    {language}
                  </span>
                  {languageStatus ? (
                      head.language.select
                          .filter((item, index) => item.name !== language)
                          .map((item, index) => {
                            return <span
                                key={item.name}
                                className={`two ${index !== 0 ? "three" : ""}`}
                                onClick={(e) => {
                                  setlanguageStatus(!languageStatus);
                                  if ((e.target as any).innerText === "EN") {
                                    head.language.localIndex = 0;
                                  } else if ((e.target as any).innerText === "CN") {
                                    head.language.localIndex = 1;
                                  } else if ((e.target as any).innerText === "ES") {
                                    head.language.localIndex = 2;
                                  } else if ((e.target as any).innerText === "JP") {
                                    head.language.localIndex = 3;
                                  } else if ((e.target as any).innerText === "RU") {
                                    head.language.localIndex = 4;
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
                              {item.id.toUpperCase()}
                            </span>
                          })
                  ) : null}
                </div>
                <div
                  onClick={(e) => {
                    setlanguageStatus(!languageStatus);
                  }}
                  className={classnames("language-arrow", {
                    top: languageStatus,
                    bottom: !languageStatus,
                  })}
                />
              </div>
            </div>
            <span className="mNav-close" onClick={() => setmNavSwitch(false)}>
              +
            </span>
          </div>
        ) : null}
        <header className="head-con">
          <div
            className={classnames(
              "video-img",
              { isNoAddress: !Boolean(tips) },
              { fixed: !!scrollTop }
            )}
          >
            <span className="video-button" onClick={() => setVedioStauts(!vedioSwich)} />
            {/*eslint-disable-next-line jsx-a11y/iframe-has-title*/}
            <iframe src="/images/Animacionwebsite001.svg" frameBorder={0} />
          </div>
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
                {window.screen.width ? (
                  <div className="substratLogo-con">
                    <img className="substratLogo" src={parityImg} alt="" />
                  </div>
                ) : (
                  <img className="substratLogo" src={parityImg} alt="" />
                )}
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
      <section
        className={classnames(
          "usd",
          { topClose: !Boolean(tips) },
          { fixed: !!scrollTop }
        )}
      >
        <ul className="usd-con">
          <li className="usd-logo">
            <img src={aresLogoImg} alt="" />
            <img className="animate" src="/images/loading.png"  alt="loading"/>
          </li>
          <li className="usd-usd">
            <p className="usd-name">{aresData.name}</p>
            <p>
              <span className="usd-price">{aresData.price}</span>
              <span className="usd-currency">{aresData.currency}</span>
            </p>
          </li>
          <li className="usd-point verticalBar">
            <span className={`usd-num ${aresData.point > 0 ? "" : "down"}`}>{aresData.point}%</span>
            {
              aresData.point > 0 ? <span className="usd-direction" /> :
              <span className="down-direction" />
            }
          </li>
          <li className="placeholder" />
          <li className="usd-rank verticalBar">
            <p className="usd-text">{ares.rankText}</p>
            <p className="usd-value">{aresData.rank}</p>
          </li>
          <li className="usd-marketCap verticalBar">
            <p className="usd-text">{ares.marketCapText}</p>
            <p className="usd-value">
              {aresData.symbol}
              {aresData.marketCap}
            </p>
          </li>
          <li className="usd-volume verticalBar">
            <p className="usd-text">{ares.volumeText}</p>
            <p className="usd-value">
              {aresData.symbol}
              {aresData.volume}
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Head;
