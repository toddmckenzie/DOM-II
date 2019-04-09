// Your code goes here
/*
	* [ ] `mouseover`
	* [ ] `keydown`
	* [ ] `wheel`
	* [ ] `drag / drop`
	* [ ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [ ] `scroll`
	* [ ] `select`
	* [ ] `dblclick`'
 */

let color0 = 'blue';
let color1 = 'green';
let color2 = 'red';
let color3 = 'yellow';
let color4 = 'green';
let color5 = 'teal';
let color6 = 'brown';
let color7 = 'black';

const logo = document.querySelector('.logo-heading');
//mouseover events...
logo.addEventListener('mouseover', event => {
    event.target.style.color = 'red';
    event.target.style.fontSize = '50px';
    event.target.style.textDecoration = 'underline';
 })

logo.addEventListener('mouseleave', event => {
  event.target.style.color = 'black';
  event.target.style.fontSize = '40px'
  event.target.style.textDecoration = 'none';
;})

//keydown
const navigation = document.querySelector('a');

navigation.addEventListener('keydown', event => {
  event.target.textContent = `keydown`
});


const introh2 = document.
