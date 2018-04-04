function start() {
	jogador_1 = prompt("Digite o nome do primeiro jogador");
	jogador_2 = prompt("Digite o nome do segundo jogador");
	num = parseInt((Math.random() * 20) + 1);
	game(num, jogador_1, jogador_2, 0, 0);
}

function vitoria(jogador, qtd_jogadas) {
	msg = jogador + " Venceu\nResumo do jogo\n" + jogador + ": deu " + (qtd_jogadas-1) + " chutes errados totalizando " + qtd_jogadas + " jogadas";
	alert(msg);
}

function game(num, jogador_1, jogador_2, qtd_turnos_jog_1, qtd_turnos_jog_2) {
	jogada1 = parseInt(prompt("Olá " + jogador_1 + ", qual seu chute?", ""));
	qtd_turnos_jog_1++;
	if(num == jogada1) {
		vitoria(jogador_1, qtd_turnos_jog_1);
		return;
	} else if(num > jogada1){
		alert(jogada1 + " é menor que o numero sorteado");
	} else {
		alert(jogada1 + " é maior que o numero sorteado");
	}

	jogada2 = parseInt(prompt("Olá " + jogador_2 + ", qual seu chute?", ""));
	qtd_turnos_jog_2++;
	if(num == jogada2) {
		vitoria(jogador_2, qtd_turnos_jog_2);
		return;	
	} else if(num > jogada2){
		alert(jogada2 + " é menor que o numero sorteado");
	} else {
		alert(jogada2 + " é maior que o numero sorteado");
	}
	game(num, jogador_1, jogador_2, qtd_turnos_jog_1, qtd_turnos_jog_2);
}