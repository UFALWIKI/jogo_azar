window.onload = function () {
	jogador_1 = prompt("Digite o nome do primeiro jogador");
	idade_jogador_1 = prompt("Digite a idade do primeiro jogador");
	jogador_2 = prompt("Digite o nome do segundo jogador");
	idade_jogador_2 = prompt("Digite a idade do segundo jogador");
	
	document.getElementById("nome_1").innerHTML = "Jogador 1: " + jogador_1 + " / idade : " + idade_jogador_1 + " anos";
	document.getElementById("nome_2").innerHTML = "Jogador 2: " + jogador_2 + " / idade : " + idade_jogador_2 + " anos";
}

function start() {
	jogador_1 = document.getElementById("nome_1").innerHTML;
	jogador_2 = document.getElementById("nome_2").innerHTML;
	num = parseInt((Math.random() * 20) + 1);
	game(num, jogador_1, jogador_2, 0, 0);
}

function vitoria(jogador, qtd_jogadas) {
	chute_errado = (qtd_jogadas-1) > 0 ? (qtd_jogadas-1) : 0;
	msg = jogador + " Venceu\nResumo do jogo\n" + jogador + ": deu " + (qtd_jogadas-1) + " chutes errados totalizando " + qtd_jogadas + " jogadas";
	alert(msg);
}

function derrota(jogador, qtd_jogadas) {
	chute_errado = (qtd_jogadas-1) > 0 ? (qtd_jogadas-1) : 0;
	msg = jogador + " Você perdeu, se esforce mais\nResumo do jogo\n" + jogador + ": deu " + (qtd_jogadas-1) + " chutes errados totalizando " + qtd_jogadas + " jogadas";
	alert(msg)
}

function game(num, jogador_1, jogador_2, qtd_turnos_jog_1, qtd_turnos_jog_2) {
	jogada1 = parseInt(prompt("Olá " + jogador_1 + ", qual seu chute?", ""));
	qtd_turnos_jog_1++;
	if(num == jogada1) {
		value = parseInt(document.getElementById("pontos_j1").innerHTML);
		document.getElementById("pontos_j1").innerHTML = (value+1);
		vitoria(jogador_1, qtd_turnos_jog_1);
		derrota(jogador_2, qtd_turnos_jog_2);
		return;
	} else if(num > jogada1){
		alert(jogada1 + " é menor que o numero sorteado");
	} else {
		alert(jogada1 + " é maior que o numero sorteado");
	}

	jogada2 = parseInt(prompt("Olá " + jogador_2 + ", qual seu chute?", ""));
	qtd_turnos_jog_2++;
	if(num == jogada2) {
		value = parseInt(document.getElementById("pontos_j2").innerHTML);
		document.getElementById("pontos_j2").innerHTML = (value+1);
		vitoria(jogador_2, qtd_turnos_jog_2);
		derrota(jogador_1, qtd_turnos_jog_1);
		return;	
	} else if(num > jogada2){
		alert(jogada2 + " é menor que o numero sorteado");
	} else {
		alert(jogada2 + " é maior que o numero sorteado");
	}
	game(num, jogador_1, jogador_2, qtd_turnos_jog_1, qtd_turnos_jog_2);
}