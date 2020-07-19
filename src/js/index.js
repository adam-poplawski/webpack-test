import '../scss/main.scss';
import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const firstName='Adam';
const age=43
console.log(`Witajcie, nazywam się ${firstName} i mam ${age} lata.`);

const paragraph = document.querySelector('.about__description--js');
paragraph.innerHTML='coś';

const heading = document.querySelector('.main_heading--js');
heading.innerHTML=`Witajcie, nazywam się ${firstName} i mam ${age} lata.`;

function hello (secondName, age) {
    console.log(`Witajcie, nazywam się ${secondName} i mam ${age} lata.`);
}

const secondName='Marcin';
hello (secondName, age);

const hamburger = document.querySelector('.hamburger--js')
hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open')
})
 
console.log(moment().startOf('day').fromNow());



const entry = localStorage.getItem('entry');
let result = '';

if (entry) {
    result = entry;
}

const entryInput = document.querySelector('.entry--js');
entryInput.value = result;




