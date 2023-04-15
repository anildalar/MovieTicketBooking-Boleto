// @flow
import { all, call, fork, takeEvery, put } from "redux-saga/effects";

import {
  CHANGE_LAYOUT,
  CHANGE_LAYOUT_MODE,
  CHANGE_LAYOUT_WIDTH,
  CHANGE_SIDEBAR_THEME,
  CHANGE_SIDEBAR_SIZE,
  CHANGE_TOPBAR_THEME,
  SHOW_RIGHT_SIDEBAR,
} from "./actionTypes";

import {
  // changeSidebarType as changeSidebarTypeAction,
  changeTopbarTheme as changeTopbarThemeAction,
} from "./actions";

/**
 * Changes the body attribute
 */
function changeBodyAttribute(attribute, value) {
  if (document.body) document.body.setAttribute(attribute, value);
  return true;
}

/**
 * Toggle the class on body
 * @param {*} cssClass
 */
function manageBodyClass(cssClass, action = "toggle") {
  switch (action) {
    case "add":
      if (document.body) document.body.classList.add(cssClass);
      break;
    case "remove":
      if (document.body) document.body.classList.remove(cssClass);
      break;
    default:
      if (document.body) document.body.classList.toggle(cssClass);
      break;
  }

  return true;
}

/**
 * Changes the layout type
 * @param {*} param0
 */
function* changeLayout({ payload: layout }) {
  try {
    if (layout === "horizontal") {
      yield put(changeTopbarThemeAction("colored"));
      document.body.removeAttribute("data-sidebar");
      document.body.removeAttribute("data-sidebar-size");
    } else {
      yield put(changeTopbarThemeAction("light"));
    }
    yield call(changeBodyAttribute, "data-layout", layout);
  } catch (error) { }
}

/**
 * Changes the layout width
 * @param {*} param0
 */
function* changeLayoutWidth({ payload: width }) {
  try {
    if (width === "lg") {
      yield call(changeBodyAttribute, "data-layout-size", "fluid");
    } else {
      yield call(changeBodyAttribute, "data-layout-size", "boxed");
    }
  } catch (error) { }
}

/**
 * Changes the left sidebar theme
 * @param {*} param0
 */
function* changeLeftSidebarTheme({ payload: theme }) {
  try {
    yield call(changeBodyAttribute, "data-sidebar", theme);
  } catch (error) { }
}

/**
 * Changes the topbar theme
 * @param {*} param0
 */
function* changeTopbarTheme({ payload: theme }) {
  try {
    yield call(changeBodyAttribute, "data-topbar", theme);
  } catch (error) { }
}

/**
 * Changes the layout mode
 * @param {*} param0
 */
function* changeLayoutMode({ payload: mode }) {
  try {
    yield call(changeBodyAttribute, "data-layout-mode", mode);
  } catch (error) { }
}


/**
 * Changes the left sidebar type
 * @param {*} param0
 */
function* changeSidebarSize({ payload: sidebarSizeType }) {
  try {
    switch (sidebarSizeType) {
      case "lg":
        yield call(changeBodyAttribute, "data-sidebar-size", "lg");
        break;
      case "small":
        yield call(changeBodyAttribute, "data-sidebar-size", "small");
        break;
      case "sm":
        yield call(changeBodyAttribute, "data-sidebar-size", "sm");
        break;
      default:
        yield call(changeBodyAttribute, "data-sidebar-size", "lg");
    }
  } catch (error) { }
}


/**
 * Show the rightsidebar
 */
function* showRightSidebar() {
  try {
    yield call(manageBodyClass, "right-bar-enabled", "add");
  } catch (error) { }
}

/**
 * Watchers
 */
export function* watchChangeLayoutType() {
  yield takeEvery(CHANGE_LAYOUT, changeLayout);
}

export function* watchChangeLayoutMode() {
  yield takeEvery(CHANGE_LAYOUT_MODE, changeLayoutMode);
}

export function* watchChangeLayoutWidth() {
  yield takeEvery(CHANGE_LAYOUT_WIDTH, changeLayoutWidth);
}

export function* watchChangeLeftSidebarTheme() {
  yield takeEvery(CHANGE_SIDEBAR_THEME, changeLeftSidebarTheme);
}

export function* watchChangeTopbarTheme() {
  yield takeEvery(CHANGE_TOPBAR_THEME, changeTopbarTheme);
}

export function* watchChangeSidebarSize() {
  yield takeEvery(CHANGE_SIDEBAR_SIZE, changeSidebarSize);
}

export function* watchShowRightSidebar() {
  yield takeEvery(SHOW_RIGHT_SIDEBAR, showRightSidebar);
}

function* LayoutSaga() {
  yield all([
    fork(watchChangeLayoutType),
    fork(watchChangeLayoutMode),
    fork(watchChangeLayoutWidth),
    fork(watchChangeLeftSidebarTheme),
    fork(watchShowRightSidebar),
    fork(watchChangeTopbarTheme),
    fork(watchChangeSidebarSize),
  ]);
}

export default LayoutSaga;
