function ResolvedorDeLabirinto() {
	var geracoes = [];

	this.resolver = function(mapa) {
		var populacao = new Populacao();
		populacao.inicializar(mapa); /* Gênesis */
		geracoes.push(populacao);

		var evolucionador = new Evolucionador(mapa);

		for (var i = 0; i < 999; i++) {
			var geracaoEvoluida = evolucionador.evoluir2(geracoes[i]);
			geracoes.push(geracaoEvoluida);

			if (geracaoEvoluida.retornarMelhorCromossomo().fitness === 1) {
				break;
			}
		}

		console.log(geracoes);

		var melhorCromossomoDaUltimaGeracao = geracoes[geracoes.length-1].retornarMelhorCromossomo();
		
		return {
			melhorCromossomoDaUltimaGeracao: melhorCromossomoDaUltimaGeracao,
			quantidadeDeGeracoes: geracoes.length,
			caminhoTraduzido: mapa.retornarCaminhoTraduzido(melhorCromossomoDaUltimaGeracao.genes),
			fitnessMedio: geracoes[geracoes.length-1].fitnessMedio
		};
	}
}