import {
  CHANGE_LAYOUT,
  CHANGE_LAYOUT_MODE,
  CHANGE_LAYOUT_WIDTH,
  CHANGE_SIDEBAR_THEME,
  CHANGE_TOPBAR_THEME,
  CHANGE_SIDEBAR_SIZE,
  SHOW_RIGHT_SIDEBAR,
  SHOW_SIDEBAR,
  CHANGE_PRELOADER,
  TOGGLE_LEFTMENU,
} from "./actionTypes"

export const changeLayout = layout => ({
  type: CHANGE_LAYOUT,
  payload: layout,
})

export const changeLayoutMode = mode => ({
  type: CHANGE_LAYOUT_MODE,
  payload: mode,
})

export const changePreloader = layout => ({
  type: CHANGE_PRELOADER,
  payload: layout,
})

export const changeLayoutWidth = width => ({
  type: CHANGE_LAYOUT_WIDTH,
  payload: width,
})

export const changeSidebarTheme = theme => ({
  type: CHANGE_SIDEBAR_THEME,
  payload: theme,
})

export const changeTopbarTheme = topbarTheme => ({
  type: CHANGE_TOPBAR_THEME,
  payload: topbarTheme,
})

export const changeSidebarSize = sidebarSizeType => ({
  type: CHANGE_SIDEBAR_SIZE,
  payload: sidebarSizeType,
})

export const showRightSidebarAction = isopen => ({
  type: SHOW_RIGHT_SIDEBAR,
  payload: isopen,
})

export const showSidebar = isopen => ({
  type: SHOW_SIDEBAR,
  payload: isopen,
})

export const toggleLeftmenu = isopen => ({
  type: TOGGLE_LEFTMENU,
  payload: isopen,
})
