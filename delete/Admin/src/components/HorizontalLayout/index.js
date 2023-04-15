import React, { useEffect, useState, useCallback } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import {
  changeLayout,
  changeLayoutMode,
  changeTopbarTheme,
  changeLayoutWidth,
  showRightSidebarAction,
} from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

// Other Layout related Component
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Rightbar from "../CommonForBoth/Rightbar";

const Layout = (props) => {
  const dispatch = useDispatch();

  const { topbarTheme, layoutModeType, layoutWidth, isPreloader, showRightSidebar } =
    useSelector((state) => ({
      topbarTheme: state.Layout.topbarTheme,
      layoutModeType: state.Layout.layoutModeType,
      layoutWidth: state.Layout.layoutWidth,
      isPreloader: state.Layout.isPreloader,
      showRightSidebar: state.Layout.showRightSidebar,
    }));

  useEffect(() => {
    const title = props.location.pathname;
    let currentage = title.charAt(1).toUpperCase() + title.slice(2);

    document.title = currentage + " | Skote - React Admin & Dashboard Template";
  }, [props.location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //hides right sidebar on body click
  const hideRightbar = useCallback((event) => {
    var rightbar = document.getElementById("right-bar");
    //if clicked in inside right bar, then do nothing
    if (rightbar && rightbar.contains(event.target)) {
      return;
    } else {
      //if clicked in outside of rightbar then fire action for hide rightbar
      dispatch(showRightSidebarAction(false));
    }
  }, [dispatch]);

  /*
  layout settings
  */
  useEffect(() => {
    dispatch(changeLayout("horizontal"));
  }, [dispatch]);

  useEffect(() => {
    //init body click event fot toggle rightbar
    document.body.addEventListener("click", hideRightbar, true);

    if (isPreloader === true) {
      document.getElementById("preloader").style.display = "block";
      document.getElementById("status").style.display = "block";

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("status").style.display = "none";
      }, 2500);
    } else {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("status").style.display = "none";
    }
  }, [isPreloader, hideRightbar]);

  useEffect(() => {
    if (topbarTheme) {
      dispatch(changeTopbarTheme(topbarTheme));
    }
  }, [dispatch, topbarTheme]);

  useEffect(() => {
    if (layoutModeType) {
      dispatch(changeLayoutMode(layoutModeType));
    }
  }, [dispatch, layoutModeType]);

  useEffect(() => {
    if (layoutWidth) {
      dispatch(changeLayoutWidth(layoutWidth));
    }
  }, [dispatch, layoutWidth]);

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const openMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <React.Fragment>
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <i className="uil-shutter-alt spin-icon"></i>
          </div>
        </div>
      </div>

      <div id="layout-wrapper">
        <header id="page-topbar">
          <Header
            theme={topbarTheme}
            isMenuOpened={isMenuOpened}
            openLeftMenuCallBack={openMenu}
          ></Header>
          <Navbar menuOpen={isMenuOpened} />
        </header>
        <div className="main-content">{props.children}</div>
        <Footer />
      </div>

      {showRightSidebar ? <Rightbar /> : null}
    </React.Fragment>
  );
};

Layout.propTypes = {
  changeLayout: PropTypes.func,
  changeLayoutWidth: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  children: PropTypes.object,
  isPreloader: PropTypes.any,
  layoutWidth: PropTypes.any,
  location: PropTypes.object,
  showRightSidebar: PropTypes.any,
  topbarTheme: PropTypes.any,
};

export default withRouter(Layout);
