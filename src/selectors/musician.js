/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} musicians - tous les musiciens
 * @param {Array} bands - tous les groupes
 * @param {string} searchedIdMusician - l'Id du musicien recherché
 * @param {string} searchedIdBand - l'Id du groupe recherché
 * @return {Object} - Le musicien trouvé
 */
export function findMusician(musicians, searchedIdMusician) {
  const musician = musicians.find((musicianId) => {
    return musicianId.name[0] === searchedIdMusician;
  });
  return musician;
}

export function findBand(bands, searchedIdBand) {
  const band = bands.find((bandId) => {
    return bandId.name[0] === searchedIdBand;
  });
  return band;
}

export function findPlace(places, searchedIdPlace) {
  const place = places.find((placeId) => {
    return placeId.name === searchedIdPlace;
  });
  return place;
}

export function findMusicianProfil(musicians, searchedIdMusician) {
  const musician = musicians.find((musicianId) => {
    return musicianId.id.toString() === searchedIdMusician;
  });
  return musician;
}
