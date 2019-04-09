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
  event.target.textContent = `Home`

});

navigation.addEventListener('keypress', event => {
  event.target.textContent = 'Home';

})
//propagation

//wheel inside Welcome to Fun Bus!.
const introh2 = document.querySelector('.intro h2')
introh2.addEventListener('wheel', event => {
  event.target.style.fontSize = "10px";
})


//drag / drop //drag contact into drop zone..
/*
const draggable = document.querySelector('#drag');

draggable.addEventListener('drag', event => {

},false);
*/

//load

//const alerter = document.querySelector('container')

//alerter.addEventListener('DOMContentLoaded', event => {
//  console.log(event.target.value);
//})
