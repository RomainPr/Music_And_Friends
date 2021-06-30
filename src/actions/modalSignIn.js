export const OPEN_MODAL_SIGNIN = 'OPEN_MODAL_SIGNIN';
export const OPEN_MODAL_SIGNUP = 'OPEN_MODAL_SIGNUP';
export const CLOSE_MODAL_SIGNIN = 'CLOSE_MODAL_SIGNIN';
export const OPEN_MODAL_VIDEO = 'OPEN_MODAL_VIDEO';
export const CHANGE_ROLE = 'CHANGE_ROLE';

export const openModal = () => ({
  type: OPEN_MODAL_SIGNIN,
});

export const openModalSignUp = () => ({
  type: OPEN_MODAL_SIGNUP,
});

export const closeModal = () => ({
  type: CLOSE_MODAL_SIGNIN,
});

export const openVideos = () => ({
  type: OPEN_MODAL_VIDEO,
});

export const changeRole = (role) => ({
  type: CHANGE_ROLE,
  role,
});
