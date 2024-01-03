document.getElementById('bingoLink').addEventListener('click', () => {
    window.location.href = '/bingo';
});

document.getElementById('groupLink').addEventListener('click', () => {
    window.location.href = '/group';
});

document.getElementById('newsLink').addEventListener('click', () => {
    window.location.href = '/news';
});

document.getElementById('ballTigersLink').addEventListener('click', () => {
    window.location.href = '/balltigers';
});

const max = 200;
const min = -200;
for (let link of document.getElementsByClassName('link')) {
    const random = Math.random() * (max - min) + min;
    link.style.transform += 'translateY(' + random + 'px)';

}