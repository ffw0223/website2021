import { useState, useEffect } from "react";
import "./style.scss";
import classnames from "classnames";
import { useTranslation } from "react-i18next";

function Head() {
  const visibleBottom = window.scrollY + document.documentElement.clientHeight;
  const visibleTop = window.scrollY;
  const { t, i18n } = useTranslation();
  const head = {
    navs: [
      {
        name: t("network"),
        id: "head",
      },
      {
        name: t("supply"),
        id: "supply",
      },
      {
        name: t("deposit"),
        id: "deposit",
      },
      {
        name: t("crowdloan"),
        id: "crowdloan",
      },
      {
        name: t("app"),
        id: "app",
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
          <a href="/">
            <img src="/images/logo.png" className="logo" alt="" />
          </a>

          <div className="head-top-nav">
            <div className="nav">
              <div className="nav-right">
                <ul className="list">
                  {head.navs.map((nav, index) => {
                    const {
                      name,
                      id
                    } = nav;

                    let active = false;
                    const theSection = document.getElementById(id);
                    if (theSection) {
                      const theSectionTop = theSection.offsetTop;
                      if (theSectionTop > visibleTop && theSectionTop < visibleBottom) {
                        active = true;
                      } else {
                        active = false;
                      }
                    }

                    return (
                      <li key={id || index}>
                        <a
                          className={classnames("item", {
                            active,
                          })}
                          href={"#" + id}
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
              <div className="content-desc">
                <div className="content">{t("descriptionHomePage")}</div>

                <button className="button" style={{ marginTop: "2rem" }}>{t("joinCrowdloan")}</button>

                <img className="illustration" src="/images/illustration.svg" width="50%" />

                <div className="floatBlock">
                  <img src="/images/thumb1.png" height="190px" />

                  <div>{t("aboutMars")}</div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default Head;
