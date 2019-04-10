// Your code goes here
/*
	* [ ] `mouseover` //
	* [ ] `keydown` //
	* [ ] `wheel` //
	* [ ] `drag / drop`
	* [ ] `load` //
	* [ ] `focus` //
	* [ ] `resize`
	* [ ] `scroll`
	* [ ] `select`
	* [ ] `dblclick`'//
 */


const logo = document.querySelector('.logo-heading');
//mouseover events...
logo.addEventListener('mouseover', event => {
    event.target.style.color = 'red';
    event.target.style.fontSize = '50px';
    event.target.style.textDecoration = 'underline';
    alert('Im here')
    event.stopPropagation(); //stops the container1event listener...
 })

logo.addEventListener('mouseleave', event => {
  event.target.style.color = 'black';
  event.target.style.fontSize = '40px'
  event.target.style.textDecoration = 'none';
;})



const container1 = document.querySelector('.h1container');
container1.addEventListener('mouseover', event => {
  alert('Im bubbling over'); //this is prevented from running due to the event.stopPropgation from logo eventlistener
});
//keydown
const navigation = document.querySelector('a');

navigation.addEventListener('keydown', event => {
  event.target.textContent = `Home`

});

navigation.addEventListener('keypress', event => {
  event.target.textContent = 'Home';
  preventDefault();

})
const navigation1 = document.querySelector('.nav');


//propagation

//wheel inside Welcome to Fun Bus!.
const introh2 = document.querySelector('.intro h2')
introh2.addEventListener('wheel', event => {
  event.target.style.fontSize = "10px";
})

const button2 = document.querySelector('.btn2');
button2.addEventListener('click', event => {
  event.target.style.color = "green";
  event.preventDefault();
});
//drag / drop //drag contact into drop zone..
/*
const draggable = document.querySelector('#drag');

draggable.addEventListener('drag', event => {

},false);
*/

//load

const alerter = document.querySelector('.intro img')

alerter.addEventListener('load', event => {
  alert('its loaded');
})


//focus on an input box.
const welcome = document.querySelector('input');
welcome.addEventListener('focus', event => {
  event.target.style.background = "lightgreen";
  event.target.style.height = "30px";
  event.target.style.marginTop = "20px";
});


//resize


// select
const fun1 = document.querySelector('.fun');
fun1.addEventListener('select', event => {
  console.log(event)
  event.target.style.fontSize= "24px"
})

//dblclick

const double = document.querySelector('.btn1');
double.addEventListener('dblclick', event => {
  event.target.style.backgroundColor = 'green';

}); //double click on button1 changes color to green

//scroll

const double2 = document.querySelector('.btn2');
double2.addEventListener('dblclick', event => {
  event.target.style.backgroundColor = 'yellow';
});

const double3 = document.querySelector('.btn3');
double3.addEventListener('dblclick', event => {
  event.target.style.backgroundColor = 'blue';
});

const footer = document.querySelector('.footer');
footer.addEventListener('mouseover', event => {
  event.target.style.color = "red";
  event.target.style.backgroundColor = "blue";
});

const displayPic = document.querySelector('.pic');
displayPic.addEventListener('mouseover', event => {
  event.target.style.display = "none"
})
