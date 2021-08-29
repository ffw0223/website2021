import React from "react";
import "./style.scss";
import { useTranslation } from 'react-i18next';
import link from "../assets/link-icon.png";
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
        <ul className="link-icon">
          <li>
            <img src={link} alt="" />
          </li>
        </ul>
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
