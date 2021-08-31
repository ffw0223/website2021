import React from "react";
import "./style.scss";
import { useTranslation } from 'react-i18next';
import link from "../assets/link-icon.png";
import link1 from "../assets/join-link1.png";
import link2 from "../assets/join-link2.png";
import link3 from "../assets/join-link3.png";
import link4 from "../assets/join-link4.png";
import link5 from "../assets/join-link5.png";
import link6 from "../assets/join-link6.png";
import link7 from "../assets/join-link7.png";
import linkBtn from "../assets/link-logo-btn.png";

function Join() {
  const { t } = useTranslation();
  const title = "Join our Community Now!";
  const desc = "Like, share, retweet, repost on all social networks";
  const btn = "Click here to Buy Token";
  const btnUrl = 'https://www.gateio.pro/cn/trade/ARES_USDT';
  return (
    <section className="join">
      <div className="join-con">
        <h2 className="title">{title}</h2>
        <p className="desc">{desc}</p>
        <div className="link-icon">
            <a href='https://t.me/aresprotocol' target="_blank" rel="noreferrer"><img src={link1} alt="" /></a>
            <a href='https://twitter.com/AresProtocolLab' target="_blank" rel="noreferrer"><img src={link3} alt="" /></a>
            <a href='https://www.facebook.com/groups/aresprotocollabs' target="_blank" rel="noreferrer"><img src={link2} alt="" /></a>
            <a href='https://discord.gg/EsaFRr7xmc' target="_blank" rel="noreferrer"><img src={link4} alt="" /></a>
            <a href='https://www.reddit.com/r/AresProtocolLabs/' target="_blank" rel="noreferrer"><img src={link5} alt="" /></a>
            <a href='https://aresprotocollab.medium.com/' target="_blank" rel="noreferrer"><img src={link6} alt="" /></a>
            <a href='https://github.com/aresprotocols' target="_blank" rel="noreferrer"><img src={link7} alt="" /></a>
        </div>
        <div className='btn-con'>
          <a className="btn" href={btnUrl} target='_blank' rel="noreferrer">
            <img src={linkBtn} alt="" />
            <span>{btn}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Join;
