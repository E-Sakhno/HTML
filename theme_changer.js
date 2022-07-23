'use strict'

let darkButton = document.querySelector('.dark-mode-button');
let lightButton = document.querySelector('.light-mode-button');
let body = document.querySelector('body');

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
}

lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
}

let theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
} else {
    body.classList.add('light');
}
