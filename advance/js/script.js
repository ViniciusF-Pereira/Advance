const player = document.querySelector('.player');
const enemy = document.querySelector('.enemy');


const gameConfig = {
    player: document.querySelector('.player'),
    enemy: document.querySelector('.enemy'),
    gamebackground: document.querySelector('.game-background'),
    gamefloor: document.querySelector('.game-floor'),
};


const pontuacaoPlacar = document.querySelector('.pontuacao');
const GameOver = document.querySelector('.game-over');
const level_board = document.querySelector('.level');

const pontuacaolevel = [];

pontuacaolevel[0] = 600;





function game__start() {

    level = 1;
    game__level(level);

    const gameOn = 1;
    var pontuacao = 0;

    var vidas = [0, 0, 0];
    const jump = () => {

        player.classList.add('pulo');


        setTimeout(() => {

            player.classList.remove('pulo');

        }, 500)



    }
    if (gameOn == 1) {


        const loop = setInterval(() => {

                console.log(vidas);



                const enemyPosition = enemy.offsetLeft;
                const playerPosition = +window.getComputedStyle(player).bottom.replace('px', '');

                if (enemyPosition <= 82 && enemyPosition > 0 && playerPosition < 108) {
                    enemy.style.animation = 'none';
                    enemy.style.left = `${enemyPosition}px`;
                    GameOver.style.visibility = 'visible';
                    gameOn = 0;



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



    gameConfig.player.src = `https://github.com/ViniciusF-Pereira/Advance/blob/main/advance/imgs/level${level}/player.gif?raw=true;`
    gameConfig.enemy.src = `https://github.com/ViniciusF-Pereira/Advance/blob/main/advance/imgs/level${level}/enemy.png?raw=true;`
    gameConfig.gamebackground.src = `https://github.com/ViniciusF-Pereira/Advance/blob/main/advance/imgs/level${level}/background.gif?raw=true;`

}
game__start();