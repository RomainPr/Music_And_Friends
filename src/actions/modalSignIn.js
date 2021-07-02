export const OPEN_MODAL_SIGNIN = 'OPEN_MODAL_SIGNIN';
export const OPEN_MODAL_SIGNUP = 'OPEN_MODAL_SIGNUP';
export const CLOSE_MODAL_SIGNIN = 'CLOSE_MODAL_SIGNIN';
export const OPEN_MODAL_VIDEO = 'OPEN_MODAL_VIDEO';
export const OPEN_MODAL_INSTRUMENT = 'OPEN_MODAL_INSTRUMENT';
export const OPEN_MODAL_SOUNDS = 'OPEN_MODAL_SOUNDS';
export const CHANGE_INSTRUMENT = 'CHANGE_INSTRUMENT';
export const CHANGE_ROLE = 'CHANGE_ROLE';
export const POST_INSTRUMENT = 'POST_INSTRUMENT';

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

export const openInstruments = () => ({
  type: OPEN_MODAL_INSTRUMENT,
});

export const openSounds = () => ({
  type: OPEN_MODAL_SOUNDS,
});

export const onChangeInstrument = (instrument) => ({
  type: CHANGE_INSTRUMENT,
  instrument,
});

export const changeRole = (role) => ({
  type: CHANGE_ROLE,
  role,
});

export const onPostInstrument = () => ({
  type: POST_INSTRUMENT,
});
