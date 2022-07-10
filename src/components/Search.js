import React from "react";
import s from "./search.module.css";

export default function Search() {
  return (
    <div className={s.search}>
      <input className={s.inputSearch} type="search..." placeholder="Search" />

      <button className={s.buttonSearch}>Search</button>
    </div>
  );
}
