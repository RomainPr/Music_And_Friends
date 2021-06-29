export const GET_ANNOUNCES = 'GET_ANNOUNCES';

export const getAnnounces= (announces) => ({
  type: GET_ANNOUNCES,
  announces: announces,
});

