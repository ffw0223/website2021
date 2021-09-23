import { useState, useEffect } from "react";
import "./style.scss";
import classnames from "classnames";
import { useTranslation } from "react-i18next";

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

  const [languageStatus, setlanguageStatus] = useState(false);
  const [scrollTop, setScroll] = useState(0);
  const [language, setlanguage] = useState(
    head.language.select[head.language.localIndex].name
  );

  useEffect(() => {
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
            <img src="/images/logo.png" height="80px" alt="" />
          </a>

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
          <img src="/images/thumb1.png" height="190px" />

          <div>{t("aboutMars")}</div>
        </div>
      </section>
    </>
  );
}

export default Head;
