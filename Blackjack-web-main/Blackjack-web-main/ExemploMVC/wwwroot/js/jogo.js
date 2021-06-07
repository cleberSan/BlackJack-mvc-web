var btn_jogador1 = document.getElementById("btn_jogador_1");
var btn_jogador2 = document.getElementById("btn_jogador_2");
var btn_jogador3 = document.getElementById("btn_jogador_3");
var lbl_jogador1 = document.getElementById("jogador1");
var lbl_jogador2 = document.getElementById("jogador2");
var lbl_jogador3 = document.getElementById("jogador3");
var btn_parar1 = document.getElementById("btn_parar_1");
var btn_parar2 = document.getElementById("btn_parar_2");
var btn_parar3 = document.getElementById("btn_parar_3");
var btn_reiniciar = document.getElementById("btn_reiniciar");
var alert_vencedor = document.getElementById("vencedor");
var showAlert = document.getElementById("alertWinner");
var pontuacaoJogador1 = 0;
var pontuacaoJogador2 = 0;
var pontuacaoJogador3 = 0;

function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

function iniciar() {

    $(btn_jogador1).removeAttr('disabled');
    $(btn_parar_1).removeAttr('disabled');
    $(btn_reiniciar).removeAttr('disabled');
    lbl_jogador1.value = 'Teste';

}
function reiniciar() {
    pontuacaoJogador1 = 0;
    pontuacaoJogador2 = 0;
    pontuacaoJogador3 = 0;
    lbl_jogador1.innerHTML = "0";
    lbl_jogador2.innerHTML = "0";
    lbl_jogador3.innerHTML = "0";
    iniciar();
}

function jogador1() {
    var cartas1 = document.getElementById("cartas1");
    valorJogado = valorAleatorio();
    pontuacaoJogador1 += valorJogado;
    lbl_jogador1.innerHTML = pontuacaoJogador1;
    $(cartas1).attr("src", '/images/' + valorJogado + '.jpg');
    if (pontuacaoJogador1 >= 22) {
        console.log('Estorou jogador 1');
        parar1();
    }


}

function parar1() {
    console.log('Parar');

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');


}


function jogador2() {
    console.log('Jogardor 2');
    var cartas2 = document.getElementById("cartas2");
    $(cartas2).attr("src", '/images/' + valorAleatorio() + '.jpg');
    valorJogado = valorAleatorio();
    pontuacaoJogador2 += valorJogado;
    lbl_jogador2.innerHTML = pontuacaoJogador2;
    console.log(pontuacaoJogador2);
    if (pontuacaoJogador2 >= 22) {
        console.log('Estorou jogador 2');
        parar2();
    }

}

function parar2() {
    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');


    $(btn_jogador3).removeAttr('disabled');
    $(btn_parar3).removeAttr('disabled');

}


function jogador3() {
    var cartas3 = document.getElementById("cartas3");
    $(cartas3).attr("src", '/images/' + valorAleatorio() + '.jpg');
    valorJogado = valorAleatorio();
    pontuacaoJogador3 += valorJogado;
    lbl_jogador3.innerHTML = pontuacaoJogador3;
    if (pontuacaoJogador3 >= 22) {
        console.log('Estorou jogador 3');
        parar3();
    }

}

function parar3() {
    $(btn_jogador3).attr('disabled', 'disabled');
    $(btn_parar3).attr('disabled', 'disabled');
    calcularVencedor();
}


function calcularVencedor() {
    if ((pontuacaoJogador1 > pontuacaoJogador2) && (pontuacaoJogador1 > pontuacaoJogador3) && (pontuacaoJogador1 <= 21)) {
        alert_vencedor.innerHTML = "Jogador 1 Ganhou";
        showAlert.classList.add("show");
    } else if ((pontuacaoJogador2 > pontuacaoJogador1) && (pontuacaoJogador2 > pontuacaoJogador3) && (pontuacaoJogador2 <= 21)) {
        alert_vencedor.innerHTML = "Jogador 2 Ganhou";
        showAlert.classList.add("show");
    } else if ((pontuacaoJogador3 > pontuacaoJogador1) && (pontuacaoJogador3 > pontuacaoJogador2) && (pontuacaoJogador3 <= 21)) {
        alert_vencedor.innerHTML = "Jogador 3 Ganhou";
        showAlert.classList.add("show");
    } else if ((pontuacaoJogador1 == pontuacaoJogador2) || (pontuacaoJogador1 == pontuacaoJogador3) || (pontuacaoJogador2 == pontuacaoJogador3)) {
        alert_vencedor.innerHTML = "EMPATE";
        showAlert.classList.add("show");
    } else {
        alert_vencedor.innerHTML = "Sem ganhador!";
        showAlert.classList.add("show");
    }
}