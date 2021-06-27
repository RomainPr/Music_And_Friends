/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} musicians - tous les musiciens
 * @param {Array} bands - tous les groupes
 * @param {Array} places - toutes les salles
 * @param {string} searchedNameMusician - le Name du musicien recherché
 * @param {string} searchedNameBand - le Name du groupe recherché
 * @param {string} searchedNamePlace - le Name de la salle recherchée
 * @return {Object} - Le musicien trouvé ou le groupe trouvé ou la salle trouvée
 */

export function findMusician(musicians, searchedNameMusician) {
  const musician = musicians.find((musicianName) => {
    return musicianName.name[0] === searchedNameMusician;
  });
  return musician;
}

export function findBand(bands, searchedNameBand) {
  const band = bands.find((bandName) => {
    return bandName.name[0] === searchedNameBand;
  });
  return band;
}

export function findPlace(places, searchedNamePlace) {
  const place = places.find((placeName) => {
    return placeName.name === searchedNamePlace;
  });
  return place;
}
