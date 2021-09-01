import React from "react";

import IconLogo from "./IconLogo";

//Icons
import { BsGrid, BsChatSquareDots, BsBell, BsArchive } from "react-icons/bs";

export default function Header() {
  return (
    <header className="spacing-sm bg-white">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <IconLogo />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#">
                  <BsGrid />
                </a>
              </li>
              <li className="nav-item">
                <a href="">
                  <BsChatSquareDots />
                </a>
              </li>
              <li className="nav-item">
                <a href="">
                  <BsBell />
                </a>
              </li>
              <li className="nav-item">
                <a href="">
                  <BsArchive />
                </a>
              </li>
            </ul>

            <a href="/#" className="header__btn-admin">
              Admin 1: Pramono
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
