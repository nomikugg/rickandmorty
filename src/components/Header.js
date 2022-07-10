import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

import s from "./header.module.css";
export default function Header() {
  return (
    <div className="container-header">
      <header className={s.header}>
        <Logo></Logo>
        <Navbar></Navbar>
        {/* <Search></Search> */}
      </header>
    </div>
  );
}
