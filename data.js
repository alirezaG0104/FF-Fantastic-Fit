// return all students

    const usersObject = [
      {
        username: 'cihuy1@gmail.com',
        name: 'cihuy',
        name: 'abc1',
        age: 18,
        scheduleID: ['FIBA-Thu-08'],
      },
      {
        username: 'cihuy2@gmail.com',
        name: 'cihuy',
        name: 'abc2',
        age: 18,
        scheduleID: ['FIBA-Thu-08'],
      },
      {
        username: 'cihuy3@gmail.com',
        name: 'cihuy',
        name: 'abc3',
        age: 18,
        scheduleID: ['FIBA-Thu-08'],
      },
      {
        username: 'cihuy4@gmail.com',
        name: 'cihuy',
        name: 'abc4',
        age: 18,
        scheduleID: ['FIBA-Thu-08'],
      },
    ];


    const coursesObject = [
      {
        name: 'Bola basket',
        price: 75000,
        img: 'assets/card-basketball.png',
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
        img: 'assets/card-soccer.png',
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
        img: 'assets/card-balet.png',
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
        img: 'assets/card-silat.png',
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
        img: 'assets/card-takraw.png',
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
        img: 'assets/card-tarung.png',
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
  
    const carstObject = [
      {
        email: 'cihuy2@gmail.com',
        scheduleID: ['FIBA-Mon-08', 'FIBA-Thu-08'],
        totalPrice: 0,
      },
      {
        email: 'cihuy3@gmail.com',
        scheduleID: ['FIBA-Mon-08'],
        totalPrice: 0,
      },
    ];