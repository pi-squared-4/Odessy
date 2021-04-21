import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
// import Quote from "../UIElements/Quote";

import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">
            <svg viewBox="0 0 960 300">
              <symbol id="s-text">
                <text text-anchor="middle" x="50%" y="80%">
                  Odessy
                </text>
              </symbol>

              <g class="g-ants">
                <use xlinkHref="#s-text" class="text-copy"></use>
                <use xlinkHref="#s-text" class="text-copy"></use>
                <use xlinkHref="#s-text" class="text-copy"></use>
                <use xlinkHref="#s-text" class="text-copy"></use>
                <use xlinkref="#s-text" class="text-copy"></use>
              </g>
            </svg>
            <h1 className="main-navigation__motto">"Where journey meet memories"</h1>
          </Link>
        </h1>
        {/* <Quote /> */}
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
