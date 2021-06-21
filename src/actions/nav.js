export const SET_ANCHOR_EL = 'SET_ANCHOR_EL';
export const HANDLE_MENU_CLOSE = 'HANDLE_MENU_CLOSE';
export const SET_MOBILE_MOREANCHOR_EL = 'SET_MOBILE_MOREANCHOR_EL';
export const HANDLE_MOBILE_MENU_CLOSE = 'HANDLE_MOBILE_MENU_CLOSE';
export const OPEN_TOGGLER = 'OPEN_TOGGLER';

export const setAnchorEl = (newValue) => ({
  type: SET_ANCHOR_EL,
  newValue,
});

export const handleMenuClose = () => ({
  type: HANDLE_MENU_CLOSE,
});

export const openToggler = () => ({
  type: OPEN_TOGGLER,
});
