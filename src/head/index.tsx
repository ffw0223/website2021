import { useState, useEffect } from "react";
import "./style.scss";
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import PopupMenu from "../components/PopupMenu";
import { render } from "react-dom";
import JoinCrowdloanModal from "../components/JoinCrowdloanModal";

function Head(props: any) {
  const visibleBottom = window.scrollY + document.documentElement.clientHeight;
  const visibleTop = window.scrollY;
  const { t, i18n } = useTranslation();
  const head = {
    navs: [
      {
        name: t("network"),
        id: "head",
        menu: {
          menuItems: [
            {
              title: "Ares Protocol",
              handle: () => {
                setIsMobileMenuShow(false);
                window.location.href = "https://aresprotocol.io";
              },
              forLanguage: false
            },
            {
              title: "Mars",
              handle: () => {
                setIsMobileMenuShow(false);
                window.location.href = "#Home";
              },
              forLanguage: false
            }
          ]
        },
        target: ""
      },
      {
        name: t("supply"),
        id: "supply",
        menu: null,
        target: ""
      },
      {
        name: t("deposit"),
        id: "deposit",
        menu: null,
        target: ""
      },
      {
        name: t("crowdloan"),
        id: "crowdloan",
        menu: null,
        target: ""
      },
      {
        name: t("apps"),
        id: "apps",
        menu: null,
        target: "https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fwss.mars.aresprotocol.io/#/explorer"
      }
    ],
    language: {
      select: [
        {
          name: "EN",
          id: "en",
          title: "EN",
          handle: null
        },
        {
          name: "简体中文",
          id: "cn",
          title: "简体中文",
          handle: null
        },
      ],
      localIndex: 0,
    },
  };

  const [languageStatus, setlanguageStatus] = useState(false);
  const [scrollTop, setScroll] = useState(0);
  const [language, setlanguage] = useState(head.language.select[head.language.localIndex].name);
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isTopButtonShow, setIsTopButtonShow] = useState(false);
  const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);

  const handleClickSection = (event: any) => {
    setIsMobileMenuShow(false);
    setIsMenuShow(false);
  }

  const emptyFunction = () => { };

  const handleShowMenu = (event: any) => {
    setIsMobileMenuShow(!isMobileMenuShow);
  }

  const handleHideMenu = (event: any) => {
    setIsMobileMenuShow(false);
  }

  const handleJoinCrowdloan = (event: any) => {
    render(<JoinCrowdloanModal api={props.api} />, document.getElementById("mainModalContainer"));
  };

  const goToTop = () => {
    window.location.href = "#Home";
  }

  useEffect(() => {
    window.onscroll = () => {
      setIsMenuShow(false);
      setIsMobileMenuShow(false);

      const tempHeight = document?.documentElement?.scrollTop || document?.body?.scrollTop
      setScroll(tempHeight);

      if (tempHeight > window.innerHeight) {
        setIsTopButtonShow(true);
      } else {
        setIsTopButtonShow(false)
      }
    };

    const svg = document.getElementById("ebI2qV0WAvx1");
    document.getElementById("animatePlayer")?.appendChild(svg!);
  }, []);

  const showMenu = (event: any) => {
    setIsMenuShow(true);

    const dom = event.target;
    const menuData: any = head.navs.find(nav => (nav.id === dom.id))?.menu;
    const rect = dom.getBoundingClientRect();
    const theModal = <PopupMenu
      menuItems={menuData.menuItems}
      hide={() => setIsMenuShow(false)}
      left={rect.x}
      top={rect.y + dom.offsetHeight + document.documentElement.scrollTop + 5} />;
    render(theModal, document.getElementById("modalContainer"))
  }

  const handleChoiceLanguage = (e: any) => {
    setIsMobileMenuShow(false);
    setlanguageStatus(!languageStatus);

    if ((e.target as any).innerText === "EN") {
      head.language.localIndex = 0;
    } else {
      head.language.localIndex = 1;
    }
    const language = head.language.select[head.language.localIndex].name;
    document.querySelector("#root")?.setAttribute("class", head.language.select[head.language.localIndex].id);
    setlanguage(language);
    setlanguageStatus(!languageStatus);
    i18n.changeLanguage(head.language.select[head.language.localIndex].id);
  }

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
                      id,
                      menu,
                      target
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
                        {menu ? (<div
                          id={id}
                          className={classnames("item")}
                          style={{
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center"
                          }}
                          onClick={showMenu}>
                          {name}
                          <span className={classnames("language-arrow", {
                            top: isMenuShow,
                            bottom: !isMenuShow,
                          })} />
                        </div>) : (<a
                          className={classnames("item", { active, highlight: id === "apps" })}
                          href={target ? target : "#" + id}
                          rel="noreferrer">
                          {name}
                        </a>)}
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
                      onClick={handleChoiceLanguage}>
                      {language === "EN" ? "EN" : "CN"}
                    </span>

                    {languageStatus ? (
                      <span
                        className="two"
                        onClick={handleChoiceLanguage}>
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

          <div
            className="head-top-nav-mobile"
            onClick={handleShowMenu}
            style={{ color: isMobileMenuShow ? "#E56239" : "white" }}>⎯<br />⎯<br />⎯</div>
        </div>

        <header className="head-con" onClick={handleClickSection}>
          <div className="head-content">
            <div className="head-warp">
              <div className="content-desc">
                <div className="content">{t("descriptionHomePage")}</div>

                <button
                  className="button"
                  style={{ marginTop: "2rem" }}
                  onClick={handleJoinCrowdloan}>{t("joinCrowdloan")}</button>

                <div id="animatePlayer" className="illustration" />

                <div style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center"
                }}>
                  <div className="floatBlock">
                    <img src="/images/thumb1.png" height="190px" alt="" />

                    <div>{t("aboutMars")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div id="modalContainer" style={{ display: !isMenuShow ? "none" : "block" }} />

        {isTopButtonShow && (<div className="goToTopButton" onClick={goToTop}>⌃</div>)}
      </section>

      {
        isMobileMenuShow && (<div className="mobileMenu">
          <ul className="mobileMenuItems">
            {head.navs.concat([{
              name: language,
              id: language,
              menu: { menuItems: head.language.select.map(l => ({ title: l.name, handle: emptyFunction, forLanguage: true })) },
              target: ""
            }]).map(item => (<li key={item.id}>
              <span>
                <a
                  href={item.target ? item.target : "#" + item.id}
                  onClick={handleHideMenu}>
                  {item.name}
                </a>
              </span>

              {item.menu && (<>
                <span className="arrow">&nbsp;▾</span>

                <ul>
                  {item.menu.menuItems.map(subMenu => {
                    if (subMenu.forLanguage && subMenu.title === language) {
                      return <></>;
                    }

                    return (<li
                      key={subMenu.title}
                      onClick={subMenu.forLanguage ? handleChoiceLanguage : subMenu.handle}>
                      {subMenu.title}
                    </li>)
                  })}
                </ul>
              </>)}
            </li>))}
          </ul>
        </div>)
      }
    </>
  );
}

export default Head;