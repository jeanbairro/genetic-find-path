function ResolvedorDeLabirinto() {
	var geracoes = [];

	this.resolver = function(mapa) {
		var populacao = new Populacao();
		populacao.inicializar(mapa); /* Gênesis */
		geracoes.push(populacao);

		var evolucionador = new Evolucionador(mapa);

		for (var i = 0; i < 1000; i++) {
			geracoes.push(evolucionador.evoluir(geracoes[i]));
		}

		console.log(geracoes[1000].retornarMelhorCromossomo());
	}
}