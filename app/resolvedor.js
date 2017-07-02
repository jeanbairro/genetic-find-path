function ResolvedorDeLabirinto() {
	this.solucoes = [];
	
	this.resolver = function(mapa) {
		var populacao = new Populacao();
		populacao.inicializar(100, mapa);
		this.solucoes.push(populacao.retornarMelhorCromossomo());

		console.log(this.solucoes);
	}
}