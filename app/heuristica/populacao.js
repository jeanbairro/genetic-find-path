function Populacao() {
	
	this.cromossomos = [];

	this.inicializar = function(tamanho, mapa) {
		for (var i = 0; i < tamanho; i++) {
			var cromossomo = new Cromossomo();
			cromossomo.definirGenes(20, 1, 4);
			cromossomo.calcularFitness(mapa);
			
			this.cromossomos.push(cromossomo);
		}

		console.log("Genêsis\n")
		console.log(this.cromossomos);
	}

	this.retornarMelhorCromossomo = function(fn) {
		return this.cromossomos.sort(function(a, b) {
			return b.fitness - a.fitness
		})[0];
	}
}