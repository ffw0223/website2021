import React from "react";
import { useTranslation } from 'react-i18next';
import strategic1 from "../assets/strategic1.png";
import strategic2 from "../assets/strategic2.png";
import strategic3 from "../assets/strategic3.png";
import strategic4 from "../assets/strategic4.png";
import strategic5 from "../assets/strategic5.png";
import strategic6 from "../assets/strategic6.png";
import strategic7 from "../assets/strategic7.png";
import strategic8 from "../assets/strategic8.png";
import strategic9 from "../assets/strategic9.png";
import strategic10 from "../assets/strategic10.png";
import strategic11 from "../assets/strategic11.png";
import strategic12 from "../assets/strategic12.png";
import strategic13 from "../assets/strategic13.png";
import strategic14 from "../assets/strategic14.png";
import strategic15 from "../assets/strategic15.png";
import strategic16 from "../assets/strategic16.png";
import strategic17 from "../assets/strategic17.png";
import strategic18 from "../assets/strategic18.png";
import strategic19 from "../assets/strategic19.png";
import strategic20 from "../assets/strategic20.png";
import strategic21 from "../assets/strategic21.png";
import "./style.scss";

function Strategic() {
  const { t } = useTranslation();
  const title = t("Strategic Investors");
  const desc =
    t("Our investors, the seed of our project and  a fundamental part of our development and innovation.");
  const list = [
    strategic1,
    strategic2,
    strategic3,
    strategic4,
    strategic5,
    strategic6,
    strategic7,
    strategic8,
    strategic9,
    strategic10,
    strategic11,
    strategic12,
    strategic13,
    strategic14,
    strategic15,
    strategic16,
    strategic17,
    strategic18,
    strategic19,
    strategic20,
    strategic21,
  ];
  return (
    <section className="strategic" id='Strategic'>
      <div className="strategic-con">
        <h2 className="title">{title}</h2>
        <p className="desc">{desc}</p>
        <ul className='strategic-logo'>
          {list.map((url, index) => (
            <li className='logo' key={index}>
              <img src={url} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Strategic;
