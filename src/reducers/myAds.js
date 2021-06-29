import { GET_ANNOUNCES } from 'src/actions/announces';

const initialState = {
  announces: [
    {
      category: 'musician',
      style: [
        'rock',
        'jazz',
      ],
      instrument: [
        'guitare',
      ],
      title: 'recherche un musicien de style rock/jazz jouant de la guitare pour groupe de jazz/rock',
      description: `yo, On est a la recherche d'un dans le titre pour notre groupe chickenTherapy sur Nantes si ça chauffe !`,
    },
    {
      category: 'groupe',
      style: [
        'Country',
        'Folk',
      ],

      instrument: [
        'guitare',
        'basse',
      ],

      title: 'Soirée thématique Folk',
      description: 'Lorem cherche groupe pour samedi',
    },
    {
      category: 'place',
      style: [
      ],

      instrument: [
      ],

      title: 'Soirée thématique Folk',
      description: 'Lorem cherche salle pour samedi du mois de juin',
    },
    {
      category: ' musicien',
      style: [
        'Jazz'
      ],

      instrument: [
        'basse'
      ],

      title: 'Groupe à la recherche de son nouveau membre',
      description: 'Yop tlm, groupe amateur cherche bassiste pour rejoindre son groupe',
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ANNOUNCES:
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default reducer;
