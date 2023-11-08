const numBubbles = 70;
const maxBubbleSize = 100;
const windowHeight = document.getElementById('pages').offsetHeight;
const windowWidth = document.getElementById('pages').offsetWidth;
const bubbleHolder = document.getElementById('bubbles');

function generateBubble() {
    const bubble = document.createElement('img');
    bubble.classList.add('bubble');
    const bubbleWidth = Math.random() * maxBubbleSize
    bubble.style.width = bubbleWidth + 'px';
    bubble.style.top = (Math.random() * windowHeight) + 'px';
    bubble.style.left = (Math.random() * windowWidth) +'px';
    bubble.style.zIndex = -1 * bubbleWidth;   
    bubble.src = 'resources/bubble-medium.png';

    bubbleHolder.appendChild(bubble);
}

for (let i = 0; i < numBubbles; i++) {
    generateBubble()
}

window.addEventListener('scroll', () => {
    const distance = window.scrollY;
    const constant = 0.005;
    const bubbles = document.getElementsByClassName('bubble');

    for (let bubble of bubbles) {
        const magnification = bubble.offsetWidth;
        bubble.style.transform = `translateY(${distance * Math.pow(magnification, 3/2) * constant * -1}px`;
    }
    
});