export const GET_MUSICIANS_SUCCESS = 'GET_MUSICIANS_SUCCESS';
export const GET_MUSICIANS = 'GET_MUSICIANS';

export const getMusicians = () => ({
  type: GET_MUSICIANS,
});

export const getMusiciansSuccess = (musicians) => ({
  type: GET_MUSICIANS_SUCCESS,
  musicians: musicians,
});
