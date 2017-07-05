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
		ALTURA: 10,
		QTD_TILES: 150,
		TAMANHO_TILE: 30
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

	this.retornaCaminhoPercorrido = function(direcoes) {
		var caminho = [];
		var len = direcoes.length;
		var posicaoX = this.posicaoInicial.X;
        var posicaoY = this.posicaoInicial.Y;

		for (var i = 0; i < len; i++)
        {
        	var direcao = direcoes[i];

            if (direcao === this.direcao.DIREITA && posicaoX < this.tamanho.LARGURA-1 && this.labirinto[posicaoY][posicaoX+1] === 0) {
                ++posicaoX;
                caminho.push({ x: posicaoX, y: posicaoY });
            }
            else if (direcao === this.direcao.CIMA && posicaoY > 0 && this.labirinto[posicaoY-1][posicaoX] === 0) {
                --posicaoY;
                caminho.push({ x: posicaoX, y: posicaoY });
            } else if (direcao === this.direcao.ESQUERDA && posicaoX > 0 && (this.labirinto[posicaoY][posicaoX-1] === 0 || this.labirinto[posicaoY][posicaoX-1] === 8)) {
                --posicaoX;
                caminho.push({ x: posicaoX, y: posicaoY });
                
                if (this.labirinto[posicaoY][posicaoX] === 8) {
                    break;
                }
            }
            else if (direcao === this.direcao.BAIXO && posicaoY < this.tamanho.ALTURA-1 && this.labirinto[posicaoY+1][posicaoX] === 0) {
                ++posicaoY;
                caminho.push({ x: posicaoX, y: posicaoY });
            }
            else {
            	break;
            }
        }

        return caminho;
	}

	this.retornarCaminhoTraduzido = function(direcoes) {
		var traducao = "";
		var len = direcoes.length;

		for (var i = 0; i < len; i++)
        {
        	var direcao = direcoes[i];
        	traducao += `${this.traduzir(direcao)}, `;
        }

        return traducao;
	}
}