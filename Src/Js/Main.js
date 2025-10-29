const body = document.body;
const btnMoon = document.querySelector('.h-Modos button:nth-child(1)');
const btnSun = document.querySelector('.h-Modos button:nth-child(2)');
const btnClose = document.querySelector('.h-hamburguesa button:nth-child(1)');
const btnMenu = document.querySelector('.h-hamburguesa button:nth-child(2)');
const nav = document.querySelector('.h-nav');

btnClose.style.display = 'none';

const savedMode = localStorage.getItem('theme');
if (savedMode === 'dark') {
body.classList.add('dark');
btnMoon.style.display = 'none';
btnSun.style.display = 'flex';
} else {
body.classList.remove('dark');
btnSun.style.display = 'none';
btnMoon.style.display = 'flex';
}

btnMoon.addEventListener('click', () => {
body.classList.add('dark');
btnMoon.style.display = 'none';
btnSun.style.display = 'flex';
localStorage.setItem('theme', 'dark');
});

btnSun.addEventListener('click', () => {
body.classList.remove('dark');
btnSun.style.display = 'none';
btnMoon.style.display = 'flex';
localStorage.setItem('theme', 'light');
});

btnMenu.addEventListener('click', () => {
nav.classList.add('activo');
btnMenu.style.display = 'none';
btnClose.style.display = 'flex';
});

btnClose.addEventListener('click', () => {
nav.classList.remove('activo');
btnClose.style.display = 'none';
btnMenu.style.display = 'flex';
});