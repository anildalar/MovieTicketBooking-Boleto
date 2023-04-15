import React from "react";
import PropTypes from "prop-types";
import { FormGroup } from "reactstrap";

import { connect } from "react-redux";
import {
  changeLayout,
  changeLayoutMode,
  changeLayoutWidth,
  changeSidebarTheme,
  changePreloader,
  changeTopbarTheme,
  changeSidebarSize,
  showRightSidebarAction,
} from "../../store/actions";

//SimpleBar
import SimpleBar from "simplebar-react";

import { Link } from "react-router-dom";

import "./rightbar.scss";

//Import images
import layout1 from "../../assets/images/layouts/layout-1.jpg";
import layout2 from "../../assets/images/layouts/layout-2.jpg";
import layout3 from "../../assets/images/layouts/layout-3.jpg";

//constants
import {
  layoutTypes,
  layoutModeTypes,
  layoutWidthTypes,
  topBarThemeTypes,
  sidebarSizeTypes,
  leftSideBarThemeTypes
} from "../../constants/layout";

const RightSidebar = (props) => {
  return (
    <React.Fragment>
      <div className="right-bar" id="right-bar">
        <SimpleBar data-simplebar className="h-100">
          <div className="rightbar-title d-flex align-items-center p-3">
            <h5 className="m-0 me-2">Settings</h5>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                props.showRightSidebarAction(false);
              }}
              className="right-bar-toggle ms-auto"
            >
              <i className="mdi mdi-close noti-icon" />
            </Link>
          </div>

          <hr className="m-0" />

          <div className="p-4">
            <h6 className="mb-3">Layout</h6>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                id="layout-vertical"
                name="layout"
                value={layoutTypes.VERTICAL}
                checked={props.layoutType === layoutTypes.VERTICAL}
                onChange={(e) => {
                  if (e.target.checked) {
                    props.changeLayout(e.target.value);
                  }
                }}
              />
              <label className="form-check-label" htmlFor="layout-vertical">Vertical</label>
            </div>
            {"   "}
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                id="layout-horizontal"
                name="layout"
                value={layoutTypes.HORIZONTAL}
                checked={props.layoutType === layoutTypes.HORIZONTAL}
                onChange={(e) => {
                  if (e.target.checked) {
                    props.changeLayout(e.target.value);
                  }
                }}
              />
              <label className="form-check-label" htmlFor="layout-horizontal">Horizontal</label>
            </div>

            <h6 className="mt-4 mb-3 pt-2">Layout Mode</h6>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="layout-mode"
                id="layout-mode-light"
                value={layoutModeTypes.LIGHT}
                checked={props.layoutModeType === layoutModeTypes.LIGHT}
                onChange={(e) => {
                  if (e.target.value) {
                    props.changeLayoutMode(e.target.value);
                  }
                }}
              />
              <label className="form-check-label" htmlFor="layout-mode-light">Light</label>
            </div>
            {"   "}
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="layout-mode"
                id="layout-mode-dark"
                value={layoutModeTypes.DARK}
                checked={props.layoutModeType === layoutModeTypes.DARK}
                onChange={(e) => {
                  if (e.target.value) {
                    props.changeLayoutMode(e.target.value);
                  }
                }}
              />
              <label className="form-check-label" htmlFor="layout-mode-dark">Dark</label>
            </div>

            <h6 className="mt-4 mb-3 pt-2">Layout Width</h6>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                id="layout-width-fuild"
                name="layout-width"
                value={layoutWidthTypes.FLUID}
                checked={props.layoutWidth === layoutWidthTypes.FLUID}
                onChange={(e) => {
                  if (e.target.checked) {
                    props.changeLayoutWidth(e.target.value);
                  }
                }}
              />
              <label className="form-check-label" htmlFor="layout-width-fuild">Fluid</label>
            </div>
            {"   "}
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                id="layout-width-boxed"
                name="layout-width"
                value={layoutWidthTypes.BOXED}
                checked={props.layoutWidth === layoutWidthTypes.BOXED}
                onChange={(e) => {
                  if (e.target.checked) {
                    props.changeLayoutWidth(e.target.value);
                  }
                }}
              />
              <label className="form-check-label" htmlFor="layout-width-boxed">Boxed</label>
            </div>

            <h6 className="mt-4 mb-3 pt-2">Layout Position</h6>

            <h6 className="mt-4 mb-3 pt-2">Topbar Color</h6>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="topbar-color"
                id="topbar-color-light"
                value={topBarThemeTypes.LIGHT}
                checked={props.topbarTheme === topBarThemeTypes.LIGHT}
                onChange={(e) => {
                  if (e.target.checked) {
                    props.changeTopbarTheme(e.target.value);
                  }
                }}
              />
              <label className="form-check-label" htmlFor="topbar-color-light">Light</label>
            </div>
            {"   "}
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="topbar-color"
                id="topbar-color-dark"
                value={topBarThemeTypes.DARK}
                checked={props.topbarTheme === topBarThemeTypes.DARK}
                onChange={(e) => {
                  if (e.target.checked) {
                    props.changeTopbarTheme(e.target.value);
                  }
                }}
              // onchange="document.body.setAttribute('data-topbar', 'dark')"
              />
              <label className="form-check-label" htmlFor="topbar-color-dark">Dark</label>
            </div>

            {props.layoutType === "vertical" ? (
              <React.Fragment>
                <h6 className="mt-4 mb-3 pt-2 sidebar-setting">Sidebar Size</h6> {" "}
                <div className="form-check sidebar-setting">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="sidebar-size-default"
                    name="sidebar-size"
                    value={sidebarSizeTypes.DEFAULT}
                    checked={props.sidebarSizeType === sidebarSizeTypes.DEFAULT}
                    onChange={(e) => {
                      if (e.target.checked) {
                        props.changeSidebarSize(e.target.value);
                      }
                    }}
                  />
                  <label className="form-check-label" htmlFor="sidebar-size-default">Default</label>
                </div>
                {"   "}
                <div className="form-check sidebar-setting">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="sidebar-size-compact"
                    name="sidebar-size"
                    value={sidebarSizeTypes.COMPACT}
                    checked={props.sidebarSizeType === sidebarSizeTypes.COMPACT}
                    onChange={(e) => {
                      if (e.target.checked) {
                        props.changeSidebarSize(e.target.value);
                      }
                    }}
                  />
                  <label className="form-check-label" htmlFor="sidebar-size-compact">Compact</label>
                </div>
                {"   "}
                <div className="form-check sidebar-setting">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="sidebar-size-small"
                    name="sidebar-size"
                    value={sidebarSizeTypes.ICON}
                    checked={props.sidebarSizeType === sidebarSizeTypes.ICON}
                    onChange={(e) => {
                      if (e.target.checked) {
                        props.changeSidebarSize(e.target.value);
                      }
                    }}
                  />
                  <label className="form-check-label" htmlFor="sidebar-size-small">Small (Icon View)</label>
                </div>

                <h6 className="mt-4 mb-3 pt-2 sidebar-setting">Sidebar Color</h6>
                <div className="form-check sidebar-setting">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="sidebar-color-light"
                    name="sidebar-color"
                    value={leftSideBarThemeTypes.LIGHT}
                    checked={props.leftSideBarTheme === leftSideBarThemeTypes.LIGHT}
                    onChange={(e) => {
                      if (e.target.checked) {
                        props.changeSidebarTheme(e.target.value);
                      }
                    }}
                  />
                  <label className="form-check-label" htmlFor="sidebar-color-light">Light</label>
                </div>
                {"   "}
                <div className="form-check sidebar-setting">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="sidebar-color-dark"
                    name="sidebar-color"
                    value={leftSideBarThemeTypes.DARK}
                    checked={props.leftSideBarTheme === leftSideBarThemeTypes.DARK}
                    onChange={(e) => {
                      if (e.target.checked) {
                        props.changeSidebarTheme(e.target.value);
                      }
                    }}
                  />
                  <label className="form-check-label" htmlFor="sidebar-color-dark">Dark</label>
                </div>
                {"   "}
                <div className="form-check sidebar-setting">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="sidebar-color-colored"
                    name="sidebar-color"
                    value={leftSideBarThemeTypes.COLORED}
                    checked={props.leftSideBarTheme === leftSideBarThemeTypes.COLORED}
                    onChange={(e) => {
                      if (e.target.checked) {
                        props.changeSidebarTheme(e.target.value);
                      }
                    }}
                  />
                  <label className="form-check-label" htmlFor="sidebar-color-colored">Colored</label>
                </div>
              </React.Fragment>
            ) : null}           

            <FormGroup>
              <span className="mt-4 mb-2 d-block" id="radio-title">
                Preloader
              </span>

              <div className="form-check form-switch">
                <input
                  type="checkbox"
                  className="form-check-input checkbox"
                  id="checkbox_1"
                  checked={props.isPreloader}
                  onChange={() => {
                    props.changePreloader(!props.isPreloader);
                  }}
                />               
                <label className="form-check-label" htmlFor="checkbox_1">
                  Preloader
                </label>
              </div>
            </FormGroup>
            <hr className="mt-1" />
            <h6 className="text-center">Choose Layouts</h6>

            <div className="mb-2">
              <Link
                to="//minible-v-light.react.themesbrand.com"
                target="_blank"
              >
                <img
                  src={layout1}
                  className="img-fluid img-thumbnail"
                  alt=""
                />
              </Link>
            </div>

            <div className="mb-2">
              <Link
                to="//minible-v-dark.react.themesbrand.com"
                target="_blank"
              >
                <img
                  src={layout2}
                  className="img-fluid img-thumbnail"
                  alt=""
                />
              </Link>
            </div>

            <div className="mb-2">
              <Link
                to="//minible-v-rtl.react.themesbrand.com"
                target="_blank"
              >
                <img
                  src={layout3}
                  className="img-fluid img-thumbnail"
                  alt=""
                />
              </Link>
            </div>

            <Link
              to="//1.envato.market/minible-react"
              className="btn btn-primary btn-block mt-3"
              target="_blank"
            >
              <i className="mdi mdi-cart mr-1" /> Purchase Now
            </Link>
          </div>
        </SimpleBar>
      </div>
      <div className="rightbar-overlay" />
    </React.Fragment>
  );
};

RightSidebar.propTypes = {
  changeLayout: PropTypes.func,
  changeLayoutMode: PropTypes.func,
  changeLayoutWidth: PropTypes.func,
  changePreloader: PropTypes.func,
  changeSidebarTheme: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  changeSidebarSize: PropTypes.func,
  isPreloader: PropTypes.any,
  layoutType: PropTypes.any,
  layoutModeType: PropTypes.any,
  layoutWidth: PropTypes.any,
  leftSideBarTheme: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  topbarTheme: PropTypes.any,
  sidebarSizeType: PropTypes.any,
};

const mapStateToProps = (state) => {
  return { ...state.Layout };
};

export default connect(mapStateToProps, {
  changeLayout,
  changeLayoutMode,
  changeSidebarTheme,
  changeLayoutWidth,
  changeTopbarTheme,
  changeSidebarSize,
  changePreloader,
  showRightSidebarAction,
})(RightSidebar);
