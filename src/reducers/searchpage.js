import {
  CHANGE_BOX_VALUE,
  CHANGE_CITY_VALUE,
  CHANGE_INSTRUMENT_VALUE,
  CHANGE_STYLE_VALUE,
  CHANGE_CATEGORY_VALUE,
  CLICK_SEARCH,
} from 'src/actions/search';

const initialState = {

  // musicians: [],
  // bands: [],
  // places: [],

  // loading: false,

  //checkbox section
  isBandChecked: false,
  isMusicianChecked: false,
  isPlaceChecked: false,

  //MultiSelect 1 section (multiSelect1 =result)
  cityName: [],
  instrumentName: [],
  styleName: [],

  //MultiSelect 2 section (multiSelect2 = result + ad)
  categoryName: [],

  //"RECHERCHER" button with selector search
  searchResult: [],

  cities: [
    'Paris',
    'Bordeaux',
    'Toulouse',
    'Dijon',
    'Lyon',
    'Marseille',
    'Grenoble',
    'Strasbourg',
    'Brest',
  ],

  instruments: [
    'Guitare',
    'Batterie',
    'Piano',
    'Violon',
    'Bass guitare',
    'Yukulélé',
    'Accordéon',
    'Trompette',
    'Tambour',
    'Triangle',
  ],

  styles: [
    'Jazz',
    'Rock',
    'Punk',
    'Blues',
    'Soul',
    'Metal',
    'Rap',
    'Folk',
    'Reggae',
    'Hip-hop',
  ],

  categories: [
    'Tous',
    'Profils',
    'Annonces',
  ],

  user: [
    {
      id: 1,
      firstname: "James",
      lastname: "Brown",
      pseudo: "The Godfather of Soul",
      phone: "0687314501",
      email: "james@brown.fr",
      password: "monpetitpassword",
      city: "Paris",
    },
    {
      id: 2,
      firstname: "Tupax",
      lastname: "Shakur",
      pseudo: "2pac",
      phone: "",
      email: "2pacc@2pac.fr",
      password: "monpetitpassword",
      city: "New-York",
    },
    {
      id: 3,
      firstname: "Aretha",
      lastname: "Franklin",
      pseudo: "The Queen of Soul",
      phone: "0125798420",
      email: "aretha@franklin.fr",
      password: "monpetitpassword",
      city: "Detroit",
    },
    {
      id: 4,
      firstname: "Eunice",
      lastname: "Waymon",
      pseudo: "Nina Simone",
      phone: "0641257594",
      email: "nina@simone.fr",
      password: "monpetitpassword",
      city: "Toulouse",
    },

    {
      id: 5,
      firstname: "Elvis",
      lastname: "Presley",
      pseudo: "The King",
      phone: "0608370235",
      email: "elvis@presley.fr",
      password: "monpetitpassword",
      city: "Las Vegas",
    },
    {
      id: 6,
      firstname: "Johnny",
      lastname: "Hendrix",
      pseudo: "Jimi Hendrix",
      phone: "",
      email: "jimi@hendrix.com",
      password: "monpetitpassword",
      city: "Seattle",
    },

    {
      id: 7,
      firstname: "Farrokh",
      lastname: "Bulsara",
      pseudo: "Freddie Mercury",
      phone: "",
      email: "freddie@mercury.fr",
      password: "monpetitpassword",
      city: "Londres",
    },

    {
      id: 8,
      firstname: "Janis",
      lastname: "Japlin",
      pseudo: "Cosmic mama",
      phone: "0780254631",
      email: "janis@japlin.fr",
      password: "monpetitpassword",
      city: "Texas",
    },

    {
      id: 9,
      firstname: "Charles",
      lastname: "Berry",
      pseudo: "Chuck Berry",
      phone: "",
      email: "chuck@berry.fr",
      password: "monpetitpassword",
      city: "Paris",
    },
    {
      id: 10,
      firstname: "Robert",
      lastname: "Zimmerman",
      pseudo: "Bob Dylan",
      phone: "",
      email: "bob@dylan.fr",
      password: "monpetitpassword",
      city: "Bordeaux",
    },
  ],

  band: [
    {
      id: 1,
      band_name: "Queen",
      admin_name: "Mercury",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      address: "21 jump street",
      zip_code: 75000,
      city: "Paris",
      phone: "0687314501",
      email: "the@queen.com",
      password: "monpetitpassword",
    },

    {
      id: 2,
      band_name: "The Doors",
      admin_name: "Hendrix",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      address: "22 jump street",
      zip_code: 33000,
      city: "Bordeaux",
      phone: "",
      email: "the@doors.com",
      password: "monpetitpassword",
    },

    {
      id: 3,
      band_name: "Traveling Wilburys",
      admin_name: "Dylan",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      address: "23 jump street",
      zip_code: 75000,
      city: "Paris",
      phone: "0687314501",
      email: "the@queen.com",
      password: "monpetitpassword",
    },

    {
      id: 4,
      band_name: "Queen",
      admin_name: "Mercury",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      address: "24 jump street",
      zip_code: 75000,
      city: "Paris",
      phone: "0687314501",
      email: "the@queen.com",
      password: "monpetitpassword",
    },

    {
      id: 5,
      band_name: "Queen",
      admin_name: "Mercury",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      address: "25 jump street",
      zip_code: 75000,
      city: "Paris",
      phone: "0687314501",
      email: "the@queen.com",
      password: "monpetitpassword",
    },

  ],
  announce: [
    {
      id: 1,
      title: "Recherche guitariste",
      category: "musician",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  "
    },

    {
      id: 2,
      title: "Cherche groupe pour soirées le samedi",
      category: "groupe",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  "
    },

    {
      id: 3,
      title: "Bassiste cherche groupe à integrer",
      category: "groupe",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  "
    },

    {
      id: 4,
      title: "Chanteur cherche musicien ou groupe pour collaboration",
      category: "groupe",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  "
    },

    {
      id: 5,
      title: "Lorem Ipsum",
      category: "groupe",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  "
    },

    {
      id: 6,
      title: "Lorem Ipsum",
      category: "salle",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  "
    },
    {
      id: 7,
      title: "Lorem Ipsum",
      category: "groupe",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  "
    },
    {
      id: 8,
      title: "Lorem Ipsum",
      category: "musicien",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  "
    },
    {
      id: 9,
      title: "Lorem Ipsum",
      category: "groupe",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  "
    },
    {
      id: 10,
      title: "Lorem Ipsum",
      category: "musicien",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  "
    },
  ],

  place: [
    {
      id: 1,
      name: "La Cigale",
      description: "Une chouette salle de concert à Montmartre",
      city: "Paris",
      adress: "120 Boulevard de Rochechouart",
      phone: "0149258999",
      zipcode: "75018",
      email: "la cigale@lacigale.fr ",
      password: "monpetitpassword"
    },

    {
      id: 2,
      name: "MusikVerein",
      description: "Siège de la société philarmonique de Vienne",
      city: "Vienne",
      adress: "Musikvereinsplatz 1",
      phone: "",
      zipcode: "",
      email: " musikverein@musik.fr ",
      password: "monpetitpassword"
    },

    {
      id: 3,
      name: "La station",
      description: "laboratoire convivial et festif consacré aux scènes artistiques émergente ",
      city: "Paris",
      adress: "29 Avenue de la Porte d'Aubervilliers ",
      phone: "09 73 26 11 47",
      zipcode: "75018",
      email: "lastation@lastation.fr ",
      password: "monpetitpassword"
    },
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BOX_VALUE: {
      console.log('je passe dans le case CHANGE_BOX_VALUE');
    }
      return {
        ...state,
        [action.key]: action.value,
      };
    case CHANGE_CITY_VALUE: {
      console.log('je passe dans le case CHANGE_CITY_VALUE');
    }
      return {
        ...state,
        cityName: action.value,
      };
    case CHANGE_INSTRUMENT_VALUE: {
      console.log('je passe dans le case CHANGE_INSTRUMENT_VALUE');
    }
      return {
        ...state,
        instrumentName: action.value,
      };
    case CHANGE_STYLE_VALUE: {
      console.log('je passe dans le case CHANGE_STYLE_VALUE');
    }
      return {
        ...state,
        styleName: action.value,
      };
    case CHANGE_CATEGORY_VALUE: {
      console.log('je passe dans le case CHANGE_CATEGORY_VALUE');
    }
      return {
        ...state,
        categoryName: action.value,
      };

    case CLICK_SEARCH: {
      console.log('je passe dans le case CLICK_RESULT_VALUE');
    }
      return {
        ...state,
        searchResult: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
