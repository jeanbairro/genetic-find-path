function Mapa() {
	this.posicaoInicial = {
		X: 14,
		Y: 7
	};

	this.posicaoFinal = {
		X: 0,
		Y: 2
	}

	this.direcao = {
		CIMA: 1,
		BAIXO: 2,
        ESQUERDA: 3,
        DIREITA: 4
	}

	this.tamanho = {
		LARGURA: 15,
		ALTURA: 10
	}

	this.labirinto = [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
        [8, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 5],
        [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	];

	this.traduzir = function(valor) {
		switch(valor) {
			case 1:
				return "CIMA";
			case 2:
				return "BAIXO";
			case 3:
				return "ESQUERDA";
			case 4: 
				return "DIREITA";
		}
	}
}