import { GET_ANNOUNCES } from 'src/actions/announces';

const initialState = {
  announces: [
    {
      id: 0,
      category: 'musician',
      style: [
        'rock',
        'jazz',
      ],
      instrument: [
        'guitare',
      ],
      title: 'recherche un musicien de style rock jazz',
      description: "yo, On est a la recherche d'un zikos dans le titre pour notre groupe chickenTherapy sur Nantes si ça chauffe !",
    },
    {
      id: 1,
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
      description: 'cherche groupe pour samedi',
    },
    {
      id: 2,
      category: 'place',
      style: [
      ],

      instrument: [
      ],

      title: 'Soirée thématique Folk',
      description: ' cherche salle pour samedi du mois de juin',
    },
    {
      id: 3,
      category: ' musicien',
      style: [
        'Jazz',
      ],

      instrument: [
        'basse',
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
      };
    default:
      return state;
  }
};

export default reducer;
