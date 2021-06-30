export const GET_ANNOUNCES = 'GET_ANNOUNCES';
export const GET_ONE_ANNOUNCE = 'GET_ONE_ANNOUNCE';

export const getAnnounces= (announces) => ({
  type: GET_ANNOUNCES,
  announces: announces,
});

export const getOneAnnounce= (announce) => ({
  type: GET_ONE_ANNOUNCE,
  announce: announce,
});
