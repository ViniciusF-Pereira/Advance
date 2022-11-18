const gameConfig = {
    // aqui eu configuro umas informações de jogo.
    game__board: document.querySelector('.game-board'),
    player: document.querySelector('.player'),
    enemy: document.querySelector('.enemy'),
    gamebackground: document.querySelector('.game-background'),
    gamefloor: document.querySelector('.game-floor'),
    gameOver_fundo: document.querySelector('.game-over_fundo'),
    gameOver_imgfundo: document.querySelector('.game-over_fundo_img'),
    btn_gameOn: document.querySelector('.btn_gameOn'),
    btn_StartNewGame: document.querySelector('.btn_StartNewGame'),
    figure_caption: document.querySelector('.figure_caption'),
    game_level: 1,
};


const pontuacaoPlacar = document.querySelector('.pontuacao');
const GameOver = document.querySelector('.game-over_menssagem');
const level_board = document.querySelector('.leveis');

const pontuacaolevel = [];

pontuacaolevel[1] = 500;

var pontuacao = 0;
var game_level = 1;

enemy.style.animation = 'none';

function game__start() {

    var animation = 3;

    setTimeout(() => {

        enemy.style.animation = `enemy-animation ${animation}s linear infinite`;
        gameConfig.game__board.style.visibility = 'visible';
        game__level(level);

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }




        var death_value = getRandomInt(5);
        console.log(death_value)


        const gameOn = 1;




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


                        gameConfig.gameOver_imgfundo.src = `https://github.com/ViniciusF-Pereira/Advance/blob/main/imgs/deaths/death${death_value}.gif?raw=true`;


                        setTimeout(() => { gameConfig.btn_StartNewGame.style.visibility = "visible"; }, 3800)



                    } else if (gameOn == 1) {

                        if (enemyPosition <= 82 && enemyPosition > 0 && playerPosition > 108) {


                            pontuacao = pontuacao + 1;
                            pontuacaoPlacar.innerHTML = "" + pontuacao;

                            if (pontuacao >= pontuacaolevel[game_level]) {



                                aumentarNivel(game_level);
                                game__level(game_level);

                                console.log(game_level);

                                level_board.innerHTML = "level " + game_level;

                                pontuacao = 0;

                            }


                        }

                    }



                },
                3)
        }

        document.addEventListener('keydown', jump);




        level_board.innerHTML = "level " + game_level;
    }, 1800)



}

function aumentarNivel() {




    game_level = game_level + 1;

    pontuacaolevel[game_level] = pontuacaolevel[game_level - 1] + pontuacaolevel[1];


    animation = animation - 0.2;


    enemy.style.animation = `enemy-animation ${animation}s linear infinite`;



}


function game__level(level) {

    gameConfig.player.src = `https://github.com/ViniciusF-Pereira/Advance/blob/main/imgs/level${level}/player.gif?raw=true`;
    gameConfig.enemy.src = `https://github.com/ViniciusF-Pereira/Advance/blob/main/imgs/level${level}/enemy.png?raw=true`;
    gameConfig.gamebackground.src = `https://github.com/ViniciusF-Pereira/Advance/blob/main/imgs/level${level}/background.gif?raw=true`;

}



function myFunction() {

    document.querySelector('.btn_gameOn').style.visibility = "hidden";

    setTimeout(() => {

        level = 1;
        gameConfig.figure_caption.style.visibility = "hidden";

        game__inicial____configure();


    }, 0);
}
myFunction();

function game__StartNewGame() {
    window.location.reload()

}



function game__inicial____configure() {


    gameConfig.game__board.style.visibility = 'visible';
    gameConfig.game__board.style.background = " url(https://cdn.leroymerlin.com.br/products/tijolo_comum_vermelho_8,7x4,3x18,6cm_bauth_85831844_abf9_600x600.jpeg)";

}