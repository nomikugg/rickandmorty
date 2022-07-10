import React from "react";
import { Link } from "react-router-dom";
import s from "./navbar.module.css";
export default function Navbar() {
  return (
    <nav className={s.navbar}>
      <Link to="/">Home</Link>
      <Link to="/favorite">Favorites</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/episode">Episode</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
}
