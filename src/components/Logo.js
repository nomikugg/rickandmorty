import React from "react";
import s from "./logo.module.css";
import "../styles/global.css";
export default function Logo() {
  return (
    <div className={s.logo}>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png"
        alt="Rick And Morty"
      />
    </div>
  );
}
