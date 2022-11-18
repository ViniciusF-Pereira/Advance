const __game_config = {
    // aqui eu configuro umas informações de jogo.
    game__board: document.querySelector('.game-board'),
    personagens: document.querySelector('.seleciona_personagen'),
    player: document.querySelector('.bloco2'),
}



function selecionar_personagem() {
    var personagens = [

    ];

    personagens[0] = `https://github.com/ViniciusF-Pereira/Advance/blob/main/imgs/level1/player.gif?raw=true`
    personagens[1] = `https://github.com/ViniciusF-Pereira/Advance/blob/main/imgs/level1/player.gif?raw=true`
    personagens[2] = `https://github.com/ViniciusF-Pereira/Advance/blob/main/imgs/level1/player.gif?raw=true`

    var personagens_nome = ["sapo", "SAPO", "default"]
    const __personagens = {

        div: document.querySelector('.seleciona_personagen'),
    }

    for (let i = 0; i < 3; i++) {
        __personagens.div.innerHTML += `<button type="button" onclick="teste(${i})" value="${i}"><span>${personagens_nome[i]}</span><img src="${personagens[i]}"></button>`
    }


}

function teste(i) {

    localStorage.setItem("personagem", i);

    console.log(i);
    __game_config.personagens.style.visibility = 'hidden';

    __game_config.player.src = `https://github.com/ViniciusF-Pereira/Advance/blob/main/imgs/level${i}/player.gif?raw=true`
}
selecionar_personagem();