// Form Submission
// const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const firstName = form.firstName.value;
//   const lastName = form.lastName.value;
//   const city = form.city.value;
//   console.log(firstName);
//   console.log(lastName);
//   console.log(city);

//   //   API Request -> SEND THIS TO OUR BACKEND
// });

// Navbar

const menuBtn = document.querySelector('.menu-btn');
console.log(menuBtn);
const menuDiv = document.querySelector('.menu-items');
menuBtn.addEventListener('click', (e) => {
  menuDiv.classList.add('show-menu');
});

const closeBtn = document.querySelector('.close-menu');

closeBtn.addEventListener('click', (e) => {
  menuDiv.classList.remove('show-menu');
});

// Spread Operator

const obj1 = {
  firstName: 'Aditya',
  lastName: 'Agrawal',
  state: 'Raj',
  city: 'Jaipur',
};

const obj2 = {
  ...obj1,
  lastName: 'sljdngds',
};

console.log(obj2);

// Extracting Values from an Array

const list = ['jngds', 'dangd', 1, 'dlgj', 'sdljgndg', true];

const list2 = [...list, 'jndg', 'jsng'];

console.log(list2);

const [first, second, third] = [...list];

console.log(first, second, third);
