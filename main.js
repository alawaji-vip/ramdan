// main.js

let logo    = document.querySelector('.logo');
let form    = document.querySelector('#form');
let name    = document.querySelector('#nameField');

logo.onclick = () => {
    window.location.replace('#');
}

name.autocomplete = 'off'