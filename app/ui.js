function UI() {
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");

	this.desenharMapa = function(mapa) {
		for (var l = 0; l < mapa.tamanho.ALTURA; l++) {
			for (var c = 0; c < mapa.tamanho.LARGURA; c++) {
				var tile = mapa.labirinto[l][c];

				this.ctx.fillStyle="#eee";
				this.ctx.strokeRect(c * mapa.tamanho.TAMANHO_TILE, l * mapa.tamanho.TAMANHO_TILE, mapa.tamanho.TAMANHO_TILE, mapa.tamanho.TAMANHO_TILE);

				if (tile === 0) {
					this.ctx.fillStyle="#f1f1f1";
				} else if (tile === 1) {
					this.ctx.fillStyle="#000000";
				} else if (tile === 5) {
					this.ctx.fillStyle="#3273dc";
				} else {
					this.ctx.fillStyle="#00d1b2";
				}

				this.ctx.fillRect(c * mapa.tamanho.TAMANHO_TILE, l * mapa.tamanho.TAMANHO_TILE, mapa.tamanho.TAMANHO_TILE, mapa.tamanho.TAMANHO_TILE);
			}
		}
	}
	
	this.desenharSolucao = function(solucao, mapa) {
		console.log(solucao);
		var caminho = mapa.retornaCaminhoPercorrido(solucao.melhorCromossomoDaUltimaGeracao.genes);
		var len = caminho.length;

		for (var i = 0; i < len; i++) {
			var posicao = caminho[i];

			this.ctx.fillStyle="#eee";
			this.ctx.strokeRect(posicao.x * mapa.tamanho.TAMANHO_TILE, posicao.y * mapa.tamanho.TAMANHO_TILE, mapa.tamanho.TAMANHO_TILE, mapa.tamanho.TAMANHO_TILE);
			this.ctx.fillStyle="#EC3E3E";
			this.ctx.fillRect(posicao.x * mapa.tamanho.TAMANHO_TILE, posicao.y * mapa.tamanho.TAMANHO_TILE, mapa.tamanho.TAMANHO_TILE, mapa.tamanho.TAMANHO_TILE);
			this.ctx.fillStyle="#000000";
			this.ctx.fillText(i, posicao.x * mapa.tamanho.TAMANHO_TILE + 10, posicao.y * mapa.tamanho.TAMANHO_TILE + 20);
		}

		$("#geracoes").html(solucao.quantidadeDeGeracoes);
		$("#fitnessMedio").html(solucao.fitnessMedio);
		$("#fitnessMaximo").html(solucao.melhorCromossomoDaUltimaGeracao.fitness);
		$("#genes").html(solucao.caminhoTraduzido);
	}
}