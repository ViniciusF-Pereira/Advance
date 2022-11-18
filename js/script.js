const gameConfig = {

    game__board: document.querySelector('.game-board'),
    game_board__start: document.querySelector('.game-board-start'),
    menu_inicial_config: document.querySelector('.menu_inicial_config'),
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
var animation = 3;

var moedas = parseInt(localStorage.getItem('moedas'));



enemy.style.animation = 'none';

function game__start() {
    gameConfig.btn_gameOn.style.visibility = "hidden";
    gameConfig.menu_inicial_config.style.visibility = 'hidden';








    setTimeout(() => {

        gameConfig.game_board__start.style.visibility = 'visible';


        enemy.style.animation = 'enemy-animation 3s linear infinite';

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



                        GameOver.style.visibility = 'visible';
                        gameConfig.gameOver_fundo.style.visibility = 'visible';
                        level_board.style.visibility = 'hidden';
                        gameOn === 0;


                        clearInterval(loop)


                        gameConfig.gameOver_imgfundo.src = `https://github.com/ViniciusF-Pereira/Advance/blob/main/imgs/deaths/death${death_value}.gif?raw=true`;
                        pontuacao = 0;

                        setTimeout(() => {
                            GameOver.style.visibility = 'hidden';
                            gameConfig.gameOver_fundo.style.visibility = 'hidden';

                            gameConfig.game_board__start.style.visibility = 'hidden';
                            gameConfig.menu_inicial_config.style.visibility = 'visible';


                        }, 3800)



                    } else if (gameOn == 1) {

                        if (enemyPosition <= 82 && enemyPosition > 0 && playerPosition > 108) {


                            pontuacao = pontuacao + 1;
                            pontuacaoPlacar.innerHTML = "" + pontuacao;


                            moedas = moedas + 1;
                            localStorage.setItem('moedas', moedas);


                            if (pontuacao >= pontuacaolevel[game_level]) {


                                localStorage.setItem("pontuacao", pontuacao)

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
    }, 400)



}



function aumentarNivel() {



    game_level = game_level + 1;

    pontuacaolevel[game_level] = pontuacaolevel[game_level - 1] + pontuacaolevel[1];

    animation = 3;

    animation_time = animation - 0.2;


    enemy.style.animation = `enemy-animation ${animation_time}s linear infinite`;



}


function game__level(level) {



    gameConfig.player.src = `https://github.com/ViniciusF-Pereira/Advance/blob/main/imgs/personagens/persona${localStorage.getItem("personagem")}.gif?raw=true`
    gameConfig.enemy.src = `https://github.com/ViniciusF-Pereira/Advance/blob/main/imgs/level${level}/enemy.png?raw=true`;
    gameConfig.gamebackground.src = `https://github.com/ViniciusF-Pereira/Advance/blob/main/imgs/level${level}/background.gif?raw=true`;

}


function myFunction() {
    level = 1;
    gameConfig.figure_caption.style.visibility = "hidden";

    game__start();


}

function game__StartNewGame() {
    window.location.reload()

}