function ResolvedorDeLabirinto() {
	this.resolver = function(mapa) {
		var populacao = new Populacao();
		populacao.inicializar(mapa); /* Gênesis */
		console.log(populacao.evoluir());
	}
}