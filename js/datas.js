const __game_config = {

    // aqui eu configuro umas informações de jogo.
    menu_inicial: document.querySelector('.menu_inicial_config'),
    game__board: document.querySelector('.game-board'),
    personagens: document.querySelector('.seleciona_personagen'),
    player: document.querySelector('._persona'),
    btn_gameOn: document.querySelector('.btn_gameOn'),
    moedas: document.querySelector('._moedas'),


}


var personagens_ok = false;
var personagens = [

];

personagens[0] = `https://github.com/ViniciusF-Pereira/Advance/blob/main/imgs/personagens/persona0.gif?raw=true`
personagens[1] = `https://github.com/ViniciusF-Pereira/Advance/blob/main/imgs/personagens/persona1.gif?raw=true`
personagens[2] = `https://github.com/ViniciusF-Pereira/Advance/blob/main/imgs/personagens/persona2.gif?raw=true`

var personagens_nome = ["sapo", "SAPO", "default"]
const __personagens = {

    div: document.querySelector('.seleciona_personagen'),
}




function selecionar_personagem() {


    __game_config.menu_inicial.style.visibility = 'hidden';
    __game_config.personagens.style.visibility = 'visible';

    if (personagens_ok == false) {

        for (let i = 0; i < 3; i++) {
            __personagens.div.innerHTML += `<button type="button" onclick="teste(${i})" value="${i}"><span>${personagens_nome[i]}</span><img src="${personagens[i]}"></button>`
        }

        personagens_ok = true;
    }

}

function teste(i) {

    if (localStorage.getItem("personagem") = NaN) {
        localStorage.setItem("personagem", 1)
    } else {

        localStorage.setItem("personagem", parseInt(i));
        console.log(localStorage.getItem("personagem"));
    }
    __game_config.personagens.style.visibility = 'hidden';
    __game_config.menu_inicial.style.visibility = 'visible';

    __game_config.player.src = `https://github.com/ViniciusF-Pereira/Advance/blob/main/imgs/personagens/persona${i}.gif?raw=true`
}


function game__inicial____configure() {

    __game_config.btn_gameOn.style.visibility = 'hidden';
    setInterval(() => {
        if (localStorage.getItem("moedas") = NaN) {
            __game_config.moedas.innerHTML = 0;
        } else {
            __game_config.moedas.innerHTML = localStorage.getItem('moedas');
        };
    }, 1000);

    setTimeout(() => {
        __game_config.menu_inicial.style.visibility = 'visible';


        __game_config.player.src = `https://github.com/ViniciusF-Pereira/Advance/blob/main/imgs/personagens/persona${localStorage.getItem("personagem")}.gif?raw=true`
    }, 2000);
}