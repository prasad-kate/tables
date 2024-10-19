export type Person = {
  id: number;
  firstName: string;
  lastName: string;
  company: string;
  city: string;
  country: string;
};

export const data = [
  {
    id: 1,
    firstName: "Elenora",
    lastName: "Wilkinson",
    company: "Feest - Reilly",
    city: "Hertaland",
    country: "Qatar",
  },
  {
    id: 2,
    firstName: "Berneice",
    lastName: "Feil",
    company: "Deckow, Leuschke and Jaskolski",
    city: "Millcreek",
    country: "Nepal",
  },
  {
    id: 3,
    firstName: "Frieda",
    lastName: "Baumbach",
    company: "Heidenreich, Grady and Durgan",
    city: "Volkmanside",
    country: "Croatia",
  },
  {
    id: 4,
    firstName: "Zachery",
    lastName: "Brown",
    company: "Cormier - Skiles",
    city: "Faychester",
    country: "Saint Pierre and Miquelon",
  },
  {
    id: 5,
    firstName: "Kendra",
    lastName: "Bins",
    company: "Wehner - Wilderman",
    city: "New Valentin",
    country: "Senegal",
  },
  {
    id: 6,
    firstName: "Lysanne",
    lastName: "Fisher",
    company: "Schmidt LLC",
    city: "Malachitown",
    country: "Costa Rica",
  },
  {
    id: 7,
    firstName: "Garrick",
    lastName: "Ryan",
    company: "Ryan - Buckridge",
    city: "East Pearl",
    country: "Cocos (Keeling) Islands",
  },
  {
    id: 8,
    firstName: "Hollis",
    lastName: "Medhurst",
    company: "Quitzon Group",
    city: "West Sienna",
    country: "Papua New Guinea",
  },
  {
    id: 9,
    firstName: "Arlo",
    lastName: "Buckridge",
    company: "Konopelski - Spinka",
    city: "Chino",
    country: "Congo",
  },
  {
    id: 10,
    firstName: "Rickie",
    lastName: "Auer",
    company: "Lehner - Walsh",
    city: "Nyahfield",
    country: "Sudan",
  },
  {
    id: 11,
    firstName: "Isidro",
    lastName: "Larson",
    company: "Reichert - Paucek",
    city: "Fort Rosinaside",
    country: "Belize",
  },
  {
    id: 12,
    firstName: "Bettie",
    lastName: "Skiles",
    company: "Zulauf, Flatley and Rolfson",
    city: "West Feltonchester",
    country: "Poland",
  },
] as Person[];

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  state: string;
};

export const fakeData: User[] = [
  {
    id: "9s41rp",
    firstName: "Kelvin",
    lastName: "Langosh",
    email: "Jerod14@hotmail.com",
    state: "Ohio",
  },
  {
    id: "08m6rx",
    firstName: "Molly",
    lastName: "Purdy",
    email: "Hugh.Dach79@hotmail.com",
    state: "Rhode Island",
  },
  {
    id: "5ymtrc",
    firstName: "Henry",
    lastName: "Lynch",
    email: "Camden.Macejkovic@yahoo.com",
    state: "California",
  },
  {
    id: "ek5b97",
    firstName: "Glenda",
    lastName: "Douglas",
    email: "Eric0@yahoo.com",
    state: "Montana",
  },
  {
    id: "xxtydd",
    firstName: "Leone",
    lastName: "Williamson",
    email: "Ericka_Mueller52@yahoo.com",
    state: "Colorado",
  },
  {
    id: "wzxj9m",
    firstName: "Mckenna",
    lastName: "Friesen",
    email: "Veda_Feeney@yahoo.com",
    state: "New York",
  },
  {
    id: "21dwtz",
    firstName: "Wyman",
    lastName: "Jast",
    email: "Melvin.Pacocha@yahoo.com",
    state: "Montana",
  },
  {
    id: "o8oe4k",
    firstName: "Janick",
    lastName: "Willms",
    email: "Delfina12@gmail.com",
    state: "Nebraska",
  },
];

//50 us states array
export const usStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
  "Puerto Rico",
];

// tree type table details
export type AnotherUser = {
  id: string;
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  managerId: string | null;
  subRows?: AnotherUser[];
};

export const anotherFakeData: AnotherUser[] = [
  {
    id: "1",
    firstName: "Dylan",
    lastName: "Murray",
    city: "East Daphne",
    state: "Kentucky",
    managerId: null,
    subRows: [
      {
        id: "1.1",
        firstName: "Ervin",
        lastName: "Reinger",
        city: "South Linda",
        state: "West Virginia",
        managerId: "1",
        subRows: [
          {
            id: "1.1.1",
            firstName: "Jordane",
            lastName: "Homenick",
            city: "South Linda",
            state: "West Virginia",
            managerId: "1.1",
          },
          {
            id: "1.1.2",
            firstName: "Jordan",
            lastName: "Clarkson",
            city: "San Francisco",
            state: "California",
            managerId: "1.1",
          },
        ],
      },
      {
        id: "1.2",
        firstName: "Brittany",
        lastName: "McCullough",
        city: "Lincoln",
        state: "Nebraska",
        managerId: "1",
      },
    ],
  },
  {
    id: "2",
    firstName: "Raquel",
    lastName: "Kohler",
    city: "Columbus",
    state: "Ohio",
    managerId: null,
    subRows: [
      {
        id: "2.1",
        firstName: "Branson",
        lastName: "Frami",
        city: "Charleston",
        state: "South Carolina",
        managerId: "2",
      },
    ],
  },
  {
    id: "3",
    firstName: "Jordon",
    lastName: "Harris",
    city: "Perth",
    state: "Western Australia",
    managerId: null,
    subRows: [
      {
        id: "3.1",
        firstName: "Eldora",
        lastName: "Koch",
        city: "Perth",
        state: "Western Australia",
        managerId: "3",
      },
      {
        id: "3.2",
        firstName: "Glenn",
        lastName: "Crist",
        city: "Darwin",
        state: "Northern Territory",
        managerId: "3",
      },
    ],
  },
];
