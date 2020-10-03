const createHeart = () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; 

    heart.innerText = '❤️';
    heart.style.fontSize = "100px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 50000000);
}
setInterval(createHeart, 300);