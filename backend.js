// DATA STRUCTURE

// Course tiap cabor
// 0. Bola Basket
// 1. Sepak bola
// 2. Pencak silat
// 3. Ballet
// 4. Sepak takraw
// 5. Tarung derajat

const courseObject = [
  {
    name: 'Bola basket',
    price: 75000,
    organization: 'FIBA',
    schedule: [
      {
        day: 'monday',
        information: [
          {
            id: 'FIBA-Mon-08',
            coach: 'Roy Williams',
            hour: '08.00-10.00',
            totalStudents: 0,
          },
        ],
      },
      {
        day: 'thursday',
        information: [
          {
            id: 'FIBA-Thu-08',
            coach: 'Jay Wright',
            hour: '08.00-10.00',
            totalStudents: 0,
          },
          {
            id: 'FIBA-Thu-10',
            coach: 'Billy Donovan',
            hour: '19.00-21.00',
            totalStudents: 3,
          },
        ],
      },
    ],
  },
  {
    name: 'Sepak bola',
    price: 75000,
    organization: 'FIFA',
    schedule: [
      {
        day: 'monday',
        information: [
          {
            id: 'FIFA-Mon-08',
            coach: 'Roy Williams',
            hour: '08.00-10.00',
            totalStudents: 0,
          },
        ],
      },
      {
        day: 'thursday',
        information: [
          {
            id: 'FIFA-Thu-08',
            coach: 'Jay Wright',
            hour: '08.00-10.00',
            totalStudents: 0,
          },
          {
            id: 'FIFA-Thu-10',
            coach: 'Billy Donovan',
            hour: '19.00-21.00',
            totalStudents: 3,
          },
        ],
      },
    ],
  },
  {
    name: 'Pencak silat',
    price: 75000,
    organization: 'PERSILAT',
    schedule: [
      {
        day: 'monday',
        information: [
          {
            id: 'PERS-Mon-08',
            coach: 'Roy Williams',
            hour: '08.00-10.00',
            totalStudents: 0,
          },
        ],
      },
      {
        day: 'thursday',
        information: [
          {
            id: 'PERS-Thu-08',
            coach: 'Jay Wright',
            hour: '08.00-10.00',
            totalStudents: 0,
          },
          {
            id: 'PERS-Thu-10',
            coach: 'Billy Donovan',
            hour: '19.00-21.00',
            totalStudents: 3,
          },
        ],
      },
    ],
  },
  {
    name: 'Ballet',
    price: 75000,
    organization: 'BALL',
    schedule: [
      {
        day: 'monday',
        information: [
          {
            id: 'BALL-Mon-08',
            coach: 'Roy Williams',
            hour: '08.00-10.00',
            totalStudents: 0,
          },
        ],
      },
      {
        day: 'thursday',
        information: [
          {
            id: 'BALL-Thu-08',
            coach: 'Jay Wright',
            hour: '08.00-10.00',
            totalStudents: 0,
          },
          {
            id: 'BALL-Thu-10',
            coach: 'Billy Donovan',
            hour: '19.00-21.00',
            totalStudents: 3,
          },
        ],
      },
    ],
  },
  {
    name: 'Sepak takraw',
    price: 75000,
    organization: 'ISTAF',
    schedule: [
      {
        day: 'monday',
        information: [
          {
            id: 'ISTA-Mon-08',
            coach: 'Roy Williams',
            hour: '08.00-10.00',
            totalStudents: 0,
          },
        ],
      },
      {
        day: 'thursday',
        information: [
          {
            id: 'ISTA-Thu-08',
            coach: 'Jay Wright',
            hour: '08.00-10.00',
            totalStudents: 0,
          },
          {
            id: 'ISTA-Thu-10',
            coach: 'Billy Donovan',
            hour: '19.00-21.00',
            totalStudents: 3,
          },
        ],
      },
    ],
  },
  {
    name: 'Tarung derajat',
    price: 75000,
    organization: 'KODRAT',
    schedule: [
      {
        day: 'monday',
        information: [
          {
            id: 'KODR-Mon-08',
            coach: 'Roy Williams',
            hour: '08.00-10.00',
            totalStudents: 0,
          },
        ],
      },
      {
        day: 'thursday',
        information: [
          {
            id: 'KODR-Thu-08',
            coach: 'Jay Wright',
            hour: '08.00-10.00',
            totalStudents: 0,
          },
          {
            id: 'KODR-Thu-10',
            coach: 'Billy Donovan',
            hour: '19.00-21.00',
            totalStudents: 3,
          },
        ],
      },
    ],
  },
];

// Informasi tiap student

const studentObject = [
  {
    username: 'cihuy1@gmail.com',
    name: 'cihuy',
    name: 'abc1',
    age: 18,
    scheduleId: ['FIBA-Thu-08'],
  },
  {
    username: 'cihuy2@gmail.com',
    name: 'cihuy',
    name: 'abc2',
    age: 18,
    scheduleId: ['FIBA-Thu-08'],
  },
  {
    username: 'cihuy3@gmail.com',
    name: 'cihuy',
    name: 'abc3',
    age: 18,
    scheduleId: ['FIBA-Thu-08'],
  },
  {
    username: 'cihuy4@gmail.com',
    name: 'cihuy',
    name: 'abc4',
    age: 18,
    scheduleId: ['FIBA-Thu-08'],
  },
];

const cartObject = [
  {
    id: 'abc3-cihuy3',
    username: 'cihuy3@gmail.com',
    scheduleID: [],
    totalPrice: 0,
  },
  {
    id: 'abc4-cihuy4',
    username: 'cihuy3@gmail.com',
    scheduleID: [],
    totalPrice: 0,
  },
];

function createStudent(arrayUser) {
  const obj = {
    username: arrayUser[0],
    password: arrayUser[1],
    name: arrayUser[2],
    age: arrayUser[3],
    scheduleId: [],
  };
  studentObject.push(obj);
}
