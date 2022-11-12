const player = document.querySelector('.player');
const enemy = document.querySelector('.enemy');

const gameConfig = {

    game__board: document.querySelector('.game-board'),
    player: document.querySelector('.player'),
    enemy: document.querySelector('.enemy'),
    gamebackground: document.querySelector('.game-background'),
    gamefloor: document.querySelector('.game-floor'),
    gameOver_fundo: document.querySelector('.game-over_fundo'),
    gameOver_imgfundo: document.querySelector('.game-over_fundo_img'),
    btn_gameOn: document.querySelector('.btn_gameOn'),
    figure_caption: document.querySelector('.figure_caption'),
};


const pontuacaoPlacar = document.querySelector('.pontuacao');
const GameOver = document.querySelector('.game-over_menssagem');
const level_board = document.querySelector('.leveis');

const pontuacaolevel = [];

pontuacaolevel[0] = 600;




enemy.style.animation = 'none';

function game__start() {


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }




    var death_value = getRandomInt(5);
    console.log(death_value)

    enemy.style.animation = 'enemy-animation 3s linear infinite';
    const gameOn = 1;
    var pontuacao = 0;





    const jump = () => {

        gameConfig.player.classList.add('pulo');


        setTimeout(() => {

            gameConfig.player.classList.remove('pulo');

        }, 500)



    }
    if (gameOn == 1) {


        const loop = setInterval(() => {




                const enemyPosition = enemy.offsetLeft;
                const playerPosition = +window.getComputedStyle(gameConfig.player).bottom.replace('px', '');

                if (enemyPosition <= 82 && enemyPosition > 0 && playerPosition < 108) {

                    enemy.style.animation = 'none';
                    enemy.style.left = `${enemyPosition}px`;


                    GameOver.style.visibility = 'visible';
                    gameConfig.gameOver_fundo.style.visibility = 'visible';
                    level_board.style.visibility = 'hidden';
                    gameOn === 0;


                    clearInterval(loop)


                    gameConfig.gameOver_imgfundo.src = `https://github.com/ViniciusF-Pereira/Advance/blob/main/advance/imgs/deaths/death${death_value}.gif?raw=true`;





                } else if (gameOn == 1) {

                    if (enemyPosition <= 82 && enemyPosition > 0 && playerPosition > 108) {


                        pontuacao = pontuacao + 1;
                        pontuacaoPlacar.innerHTML = "" + pontuacao;

                        if (pontuacao >= pontuacaolevel[0]) {


                            aumentarNivel()
                            level = level + 1;
                            level_board.innerHTML = "level " + level;

                            pontuacao = 0;

                        }


                    }

                }



            },
            2)
    }

    document.addEventListener('keydown', jump);


    var level = 1;

    level_board.innerHTML = "level " + level;


}



function aumentarNivel() {

    pontuacaolevel[0] = pontuacaolevel[0] + pontuacaolevel[0];


}


function game__level(level) {



    gameConfig.player.src = `https://github.com/ViniciusF-Pereira/Advance/blob/main/advance/imgs/level${level}/player.gif?raw=true`;
    gameConfig.enemy.src = `https://github.com/ViniciusF-Pereira/Advance/blob/main/advance/imgs/level${level}/enemy.png?raw=true`;
    gameConfig.gamebackground.src = `https://github.com/ViniciusF-Pereira/Advance/blob/main/advance/imgs/level${level}/background.gif?raw=true`;

}

gameConfig.btn_gameOn.addEventListener("click", myFunction);

function myFunction() {
    game__start();
    level = 1;
    game__level(level);

    gameConfig.figure_caption.style.visibility = "hidden";
    gameConfig.btn_gameOn.style.visibility = "hidden";
    gameConfig.game__board.style.visibility = 'visible';
}