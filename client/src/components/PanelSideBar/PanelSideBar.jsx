import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import PanelUsers from "../PanelUsers/PanelUsers";
import style from "./PanelSideBar.module.css";

export default function PanelSideBar() {
  const [hovered, setHovered] = useState(0)
  const [hidden, setHidden] = useState(false)


  return (
    <div className={style.navigation}>
      <ul>
        <li onClick={() => setHovered(1)} className={hovered === 1 && style.hovered}>
          <i className="fa-solid fa-house"></i>
          <span className={style.title}>Volver al inicio</span>
        </li>
        <li onClick={() => setHovered(2)} className={hovered === 2 && style.hovered}>
          <i className="fa-solid fa-users"></i>
          <span className={style.title}>Usuarios</span>
        </li>
        <li onClick={() => setHovered(3)} className={hovered === 3 && style.hovered}>
          <i className="fa-solid fa-clipboard-check"></i>
          <span className={style.title}>Historial de órdenes</span>
        </li>
        <li onClick={() => setHovered(4)} className={hovered === 4 && style.hovered}>
          <i className="fa-solid fa-book"></i>
          <span className={style.title}>Libros</span>
        </li>
        <li onClick={() => setHovered(5)} className={hovered === 5 && style.hovered}>
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
          <span className={style.title}>Mi cuenta</span>
        </li>
      </ul>
    </div>
  );
}
