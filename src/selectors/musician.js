/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} musicians - tous les musiciens
 * @param {string} searchedId - l'Id du musicien recherchée
 * @return {Object} - Le musicien trouvé
 */
export function findMusician(musicians, searchedId) {
  const musician = musicians.find((musicianId) => {
    return musicianId.user_pseudo.[0] === searchedId;
  });
  return musician;
}
