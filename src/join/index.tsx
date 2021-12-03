import React from "react";
import "./style.scss";
import "./style1280.scss";
import "./style428.scss";
import { useTranslation } from 'react-i18next';
import link from "../assets/link-icon.png";
import link1 from "../assets/join-link1.png";
import link2 from "../assets/join-link2.png";
import link3 from "../assets/join-link3.png";
import link4 from "../assets/join-link4.png";
import link5 from "../assets/join-link5.png";
import link6 from "../assets/join-link6.png";
import link7 from "../assets/join-link7.png";
import link8 from "../assets/join-link8.png";
import link9 from "../assets/join-link9.png";
import linkBtn from "../assets/link-logo-btn.png";
import { render } from "react-dom";
import TelegramList from "../components/TelegramList";

function Join() {
  const { t } = useTranslation();
  const title = t("Please Join our Community Now.");
  const desc = t("Please comment，press the like button, share, retweet, and subscribe to our social media platforms.");
  const btn = t("Click here to Buy Token");
  const btnUrl = 'https://www.gateio.pro/cn/trade/ARES_USDT';

  const handleClickTelegram = (event: any) => {
    render(<TelegramList />, document.getElementById("mainModalContainer"));
  }

  return (
    <section className="join">
      <div className="join-con">
        <h2 className="title">{title}</h2>
        <p className="desc">{desc}</p>
        <div className="link-icon">
          <a onClick={handleClickTelegram}><img src={link1} alt="" /></a>
          <a href='https://twitter.com/AresProtocolLab' target="_blank" rel="noreferrer"><img src={link3} alt="" /></a>
          <a href='https://www.facebook.com/aresprotocollab' target="_blank" rel="noreferrer"><img src={link2} alt="" /></a>
          <a href='https://discord.gg/cqduK4ZNaY' target="_blank" rel="noreferrer"><img src={link4} alt="" /></a>
          <a href='https://www.reddit.com/r/AresProtocolLabs/' target="_blank" rel="noreferrer"><img src={link5} alt="" /></a>
          <a href='https://aresprotocollab.medium.com/' target="_blank" rel="noreferrer"><img src={link6} alt="" /></a>
          <a href='https://github.com/aresprotocols' target="_blank" rel="noreferrer"><img src={link7} alt="" /></a>
          <a href='https://www.instagram.com/aresprotocollab/' target="_blank" rel="noreferrer"><img src={link8} alt="" /></a>
          <a href='https://www.youtube.com/channel/UCgwY4NwkoP8Hx1Fqmp_rJUw' target="_blank" rel="noreferrer"><img src={link9} alt="" /></a>
        </div>
        <div className='btn-con'>
          <a className="btn" href={btnUrl} target='_blank' rel="noreferrer">
            <img src={linkBtn} alt="" />
            <span>{btn}</span>
          </a>
        </div>
      </div>

      <div id="mainModalContainer" />
    </section>
  );
}

export default Join;
