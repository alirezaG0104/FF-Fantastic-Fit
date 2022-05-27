// DATA STRUCTURE

// Course tiap cabor
// 0. Bola Basket
// 1. Sepak bola
// 2. Pencak silat
// 3. Ballet
// 4. Sepak takraw
// 5. Tarung derajat

// return all students
function getAllUsers() {
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
  return usersObject;
}

// return all courses
function getAllCourses() {
  const courseObject = [
    {
      name: 'Bola basket',
      price: 70000,
      img: "assets/card-basketball.png",
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
          ],
        },
        {
          day: 'saturday',
          information: [
            {
              id: 'FIBA-Sat-10',
              coach: 'Jay Wright',
              hour: '10.00-12.00',
              totalStudents: 0,
            },
          ],
        },
      ]
    },
    {
      name: 'Sepak bola',
      price: 70000,
      img: "assets/card-soccer.png",
      organization: 'FIFA',
      schedule: [
        {
          day: 'monday',
          information: [
            {
              id: 'FIFA-Mon-14',
              coach: 'Bambang Suprit',
              hour: '14.00-16.00',
              totalStudents: 0,
            },
          ],
        },
        {
          day: 'wednesday',
          information: [
            {
              id: 'FIFA-Web-08',
              coach: 'David Div',
              hour: '08.00-10.00',
              totalStudents: 0,
            },
          ],
        },
        {
        day: 'friday',
          information: [
            {
              id: 'FIFA-Fri-15',
              coach: 'David Div',
              hour: '15.00-17.00',
              totalStudents: 0,
            },
          ],
        }
      ]
    },
    {
      name: 'Pencak silat',
      price: 75000,
      img: "assets/card-silat.png",
      organization: 'PERSILATAN BAJA HITAM',
      schedule: [
        {
          day: 'tuesday',
          information: [
            {
              id: 'PERS-Tue-19',
              coach: 'Pladimir Putin',
              hour: '19.00-21.00',
              totalStudents: 0,
            },
          ],
        },
        {
          day: 'thursday',
          information: [
            {
              id: 'PERS-Thu-08',
              coach: 'Jay Satrio',
              hour: '08.00-10.00',
              totalStudents: 0,
            },
          ],
        },
        {
          day: 'saturday',
          information: [
            {
              id: 'PERS-Sat-08',
              coach: 'Limbad jr',
              hour: '08.00-10.00',
              totalStudents: 0,
            },
          ],
        }
      ]
    },
    {
      name: 'Ballet',
      price: 100000,
      img:"assets/card-balet.png",
      organization: 'BALL',
      schedule: [
        {
          day: 'monday',
          information: [
            {
              id: 'BALL-Mon-08',
              coach: 'Maja Skavoski',
              hour: '08.00-10.00',
              totalStudents: 0,
            },
          ],
        },
        {
          day: 'tuesday',
          information: [
            {
              id: 'BALL-Tue-08',
              coach: 'Jay Wright',
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
              coach: 'Carlina Cilacap',
              hour: '09.00-11.00',
              totalStudents: 0,
            },
         ],
        },
      ]
    },
    {
      name: 'Sepak takraw',
      price: 75000,
      img: "assets/card-takraw.png",
      organization: 'ISTAF',
      schedule: [
        {
          day: 'monday',
          information: [
            {
              id: 'ISTA-Mon-19',
              coach: 'Roy setiawan',
              hour: '19.00-21.00',
              totalStudents: 0,
            },
          ],
        },
        {
          day: 'thursday',
          information: [
            {
              id: 'ISTA-Thu-08',
              coach: 'David Beckham',
              hour: '08.00-10.00',
              totalStudents: 0,
            }
          ],
        },
        {
          day: 'friday',
          information: [
            {
              id: 'ISTA-Thu-17',
              coach: 'Christiano Ronaldo',
              hour: '17.00-19.00',
              totalStudents: 0,
            },
          ],
        },
      ]
    },
    {
      name: 'Tarung derajat',
      price: 75000,
      img: "assets/card-tarung.png",
      organization: 'KODRAT',
      schedule: [
        {
          day: 'tuesday',
          information: [
            {
              id: 'KODR-Tue-20',
              coach: 'DS Rizky',
              hour: '20.00-22.00',
              totalStudents: 0,
            },
          ],
        },
        {
          day: 'friday',
          information: [
            {
              id: 'KODR-Fri-15',
              coach: 'DS Rizky',
              hour: '15.00-17.00',
              totalStudents: 0,
            },
          ],
        },
        {
          day: 'saturday',
          information: [
            {
              id: 'KODR-Sat-08',
              coach: 'DS Rizky',
              hour: '08.00-10.00',
              totalStudents: 0,
            }
          ]
        }
      ]
    }
  ]
  return courseObject;
}  
      



// return all carts
function getAllCarts() {
  const cartObject = [
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
  return cartObject;
}

function getUserCart(email) {
  const allCarts = getAllCarts();
  for (let i = 0; i < allCarts.length; i++) {
    if (email === allCarts[i].email) {
      return allCarts[i];
    }
  }
}
// console.log(getUserCart('cihuy2@gmail.com'));

function getTotalCart(email) {
  const userCart = getUserCart(email);
  return userCart.scheduleID.length;
}

function getCourse(courseId) {
  // ambil semua course
  const allCourse = getAllCourses();
  let indexCourse = 0;
  for (let i = 0; i < allCourse.length; i++) {
    // console.log(allCourse[i].schedule);
    /*
    [
      { day: 'monday', information: [ [Object] ] },
      { day: 'thursday', information: [ [Object], [Object] ] }
    ]
    */
    for (let j = 0; j < allCourse[i].schedule.length; j++) {
      // console.log(allCourse[i].schedule[j].information);
      /*
      [
        {
          id: 'KODR-Mon-08',
          coach: 'Roy Williams',
          hour: '08.00-10.00',
          totalStudents: 0
        }
      ]
      */
      for (let k = 0; k < allCourse[i].schedule[j].information.length; k++) {
        if (courseId === allCourse[i].schedule[j].information[k].id) {
          return allCourse[i];
        }
      }
    }
  }
}
// console.log(getCourse('KODR-Thu-10'));

function addNewCourseToCart(courseId, email) {
  // baca semua data cart
  const allCarts = getAllCarts();
  // console.log(allCarts);

  const obj = {};
  obj.email = email;

  const arr = [];
  arr.push(courseId);

  obj.scheduleID = arr;

  const course = getCourse(courseId);
  obj.totalPrice = course.price;

  allCarts.push(obj);
  // console.log(obj);
}
addNewCourseToCart('FIBA-Mon-08', 'cihuy6@gmail.com');

function getUser(email) {
  const allUsers = getAllUsers();

  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].username === email) {
      return allUsers[i];
    }
  }
}
// console.log(getUser('cihuy2@gmail.com'));

// create new user
function createUser(arrayUser) {
  const obj = {
    username: arrayUser[0],
    password: arrayUser[1],
    name: arrayUser[2],
    age: arrayUser[3],
    scheduleID: [],
  };

  const allUsers = getAllUsers();
  allUsers.push(obj);
  // console.log(allUsers);
}
createUser(['rizki', 'mantep', 'qwer', 18]);

console.log(0);
