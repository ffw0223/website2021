import React from "react";
import "./style.scss";
import emailImg from "../assets/email.png";
import topImg from "../assets/top.png";
import { useTranslation } from "react-i18next";

function Foot() {
  const { t } = useTranslation();
  const about = {
    title: t("About Us"),
    desc: t(
      "Ares is an on-chain-verified oracle protocol that provides secure and reliable data services for the Polkadot DeFi ecosystem."
    ),
    email: "info@aresprotocol.io",
  };
  const link = {
    title: t("Quick Links"),
    list: [
      {
        name: t("Home"),
        url: "#Home",
      },
      {
        name: t("Technology"),
        url: "#Technology",
      },
      {
        name: t("Economics"),
        url: "#Economics",
      },
      {
        name: t("Application"),
        url: "#Application",
      },
      {
        name: "Team Members",
        url: "#Team",
      },
      {
        name: "Strategic Investors",
        url: "#Strategic",
      },
    ],
  };
  const resources = {
    title: t("Resources"),
    list: [
      {
        name: t("Documentation"),
        url: "https://docs.aresprotocol.io/#/",
      },
      {
        name: t("Explorer"),
        url: "#",
      },
      {
        name: t("Market"),
        url: "mailto:info@aresprotocol.io",
      },
    ],
  };
  const subscribe = {
    title: "Subscribe",
    desc: "Subscribe and receive all news and information about Ares Protocol.",
    email: "name@company.com",
    emailBtn: "Send",
  };
  const copyright = "Copyright © 2021.The Ares Protocol All rights reserved.";
  return (
    <section className="foot">
      <footer className="foot-con">
        <div className="about">
          <h2 className="foot-title">{about.title}</h2>
          <p className="about-desc">{about.desc}</p>
          <p className="about-email">
            <img src={emailImg} alt="" />
            <span>{about.email}</span>
          </p>
        </div>
        <div className="link">
          <h2 className="foot-title">{link.title}</h2>
          <ul className="link-con">
            {link.list.map((item, index) => {
              const { name, url } = item;
              return (
                <li className="link-item" key={index}>
                  <a href={url} target={url[0] === "#" ? "_self" : "_blank"}>
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="link resources">
          <h2 className="foot-title">{link.title}</h2>
          <ul className="link-con">
            {resources.list.map((item, index) => {
              const { name, url } = item;
              return (
                <li className="link-item" key={index}>
                  <a href={url} target={url[0] === "#" ? "_self" : "_blank"}>
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="subscribe">
          <h2 className="foot-title">{subscribe.title}</h2>
          <p className="subscribe-desc">{subscribe.desc}</p>
          <div className="send">
            <input type="text" placeholder={subscribe.email} />
            <span>{subscribe.emailBtn}</span>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>{copyright}</p>
      </div>
      <img
        className="top"
        src={topImg}
        alt=""
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />
    </section>
  );
}

export default Foot;
