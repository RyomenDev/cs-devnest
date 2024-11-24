/**
 * Selecting element
 */

// const heading = document.getElementsByTagName('h1');
// console.log(heading);

// const heading = document.getElementById('one');
// console.log(heading);

// const headingList = document.getElementsByClassName('two');
// console.log(headingList);

// querySelector  -> First element matching the selector
// querySelectorAll -> List of all elements matching the selector

// const heading = document.querySelector('#one');
// console.log(heading);

/**
 * Navigating the DOM
 */

// Children
const box = document.querySelector('.box');
// console.log(box.children[0].children[0]);
// console.log(box.lastElementChild);
// console.log(box.firstElementChild);

// const span = document.getElementById('one');
// console.log(span.parentElement.parentElement.parentElement.parentElement);

// console.log(span.nextElementSibling);
// console.log(span.previousElementSibling);

// Text Content -> Get / Set the text content of a element
// (textContent / innerText)
// const spSpan =
//   document.querySelector('#one').previousElementSibling.textContent;

// document.querySelector('#one').previousElementSibling.textContent = 'ONE _T';

// Attributes -> getAttribute or setAttribute

// const link = document.querySelector('a');

// console.dir(link);

// const val = link.getAttribute('href');
// link.setAttribute('href', 'https://twitter.com');

// console.log(val);

// className and classList

// const heading = document.getElementsByTagName('h3')[0];
// console.log(heading.className);

// heading.className = 'hello';

// console.log(heading.className);

// const classList = heading.classList;
// classList.add('new-class');
// console.log(heading.classList);
// // console.log(classList.contains('sample-'));
// classList.remove('sample-class');
// console.log(heading.classList);
// classList.toggle('color');
// console.log(heading.classList);
// classList.toggle('color');
// console.log(heading.classList);

const passwordElement = document.querySelector('h1');
const orgPassword = passwordElement.textContent;
const button = document.getElementsByTagName('button')[0];

// button.addEventListener('click', (e) => {
//   passwordElement.classList.toggle('hide');

//   if (passwordElement.classList.contains('hide')) {
//     button.textContent = 'Show Password';
//     passwordElement.textContent = '***********';
//   } else {
//     button.textContent = 'Hide Password';
//     passwordElement.textContent = orgPassword;
//   }
// });

/**
 * createElement
 */

// const headingElement = document.createElement('h1');
// headingElement.textContent = 'Dynamically Created Heading';

// appendChild / prepend
// document.body.appendChild(headingElement);
// document.querySelector('div').appendChild(headingElement);

// insertBefore
// const div = document.querySelector('div');
// const spHeadings = div.querySelectorAll('h1');
// console.log(spHeadings);
// const lastHeading = div.lastElementChild;

// div.insertBefore(headingElement, lastHeading);

// remove and removeChild

// document.querySelector('div').firstElementChild.remove();

// const div = document.querySelector('div');
// const heading = div.firstElementChild;
// div.removeChild(heading);

// const html = document.querySelector('div').innerHTML;
// console.log(html);

// const name = 'ADITYA AGRAWAL';

// document.querySelector('div').innerHTML = `<h4>${name}</h4>
// <h4>H2</h4>
// <h4>H3</h4>`;

// Change CSS using DOM

// const secondHeading =
//   document.querySelector('div').firstElementChild.nextElementSibling;

// secondHeading.style.color = 'red';
// secondHeading.style.backgroundColor = 'black';

// Event Handlers -> addEventListner

const spButton = document.querySelector('.btn-sp');

// const func = () => {
//   document.body.style.backgroundColor = 'black';

//   //   document.body.classList.toggle('dark-mode');
// };

// spButton.addEventListener('mouseover', func);

// spButton.addEventListener('click', (event) => {
//   console.log(event.currentTarget);
//   console.log(event.target);
//   console.log(event.type);
//   //   document.body.style.backgroundColor = '#fff';
// });

// Browser -> localStorage / sessionStorage / cookies

// localStorage.setItem('key', 'value');
// localStorage.setItem('key2', 'value2');

let visitCount = 0;

if (localStorage.getItem('visitCount')) {
  const x = Number(localStorage.getItem('visitCount'));
  visitCount = x + 1;
  localStorage.setItem('visitCount', x + 1);
} else {
  visitCount = 1;
  localStorage.setItem('visitCount', 1);
}

document.getElementById('visit-count').textContent = visitCount;
