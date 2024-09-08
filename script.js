const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const gameOver = document.querySelector('.game-over');
const restartButton = document.querySelector('.restart');

const jump = () => {
    
    mario.classList.add('jump');

    setTimeout(() => { 

        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        
        mario.src = './game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);

        gameOver.style.visibility = 'visible';


    
    }
}, 10);

const restart = () => {

    gameOver.style.visibility = 'hidden';

    pipe.style.animation = 'pipe-animations 1.5s infinite linear';
    pipe.style.left = ``;

    mario.src = './mario.gif';
    mario.style.width = '130px';
    mario.style.bottom = '0px';
    mario.style.marginLeft = '';
    mario.style.animation = '';

    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
        if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {
    
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
    
            mario.src = './game-over.png';
            mario.style.width = '70px';
            mario.style.marginLeft = '35px';
    
            gameOver.style.visibility = 'visible';
    
            clearInterval(loop);
        }
    }, 10);
}

document.addEventListener('keydown', jump);

restartButton.addEventListener('click', restart);
